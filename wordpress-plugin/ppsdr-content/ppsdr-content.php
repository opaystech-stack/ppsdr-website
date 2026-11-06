<?php
/**
 * Plugin Name: PPSDR Content
 * Description: Reports with PDF attachments for the PPSDR headless website.
 * Version: 1.0.0
 * Author: PPSDR
 */

if (!defined('ABSPATH')) { exit; }

add_action('init', function () {
    register_post_type('ppsdr_report', [
        'labels' => [
            'name' => 'Rapports', 'singular_name' => 'Rapport',
            'add_new_item' => 'Ajouter un rapport', 'edit_item' => 'Modifier le rapport',
        ],
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'ppsdr_reports',
        'menu_icon' => 'dashicons-media-document',
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
        'has_archive' => false,
        'rewrite' => ['slug' => 'rapport-document'],
    ]);
});

add_action('rest_api_init', function () {
    register_rest_field('ppsdr_report', 'pdf_url', [
        'get_callback' => function ($post) {
            $id = (int) get_post_meta($post['id'], 'ppsdr_pdf_attachment_id', true);
            return $id ? wp_get_attachment_url($id) : null;
        },
        'schema' => ['description' => 'Public PDF URL for this report', 'type' => ['string', 'null'], 'context' => ['view', 'edit']],
    ]);
});

add_action('init', function () {
    register_post_meta('ppsdr_report', 'ppsdr_pdf_attachment_id', [
        'type' => 'integer', 'single' => true, 'show_in_rest' => true,
        'auth_callback' => function () { return current_user_can('edit_posts'); },
    ]);
});

add_action('add_meta_boxes', function () {
    add_meta_box('ppsdr-report-pdf', 'Fichier PDF du rapport', function ($post) {
        wp_nonce_field('ppsdr_save_report_pdf', 'ppsdr_report_pdf_nonce');
        $id = (int) get_post_meta($post->ID, 'ppsdr_pdf_attachment_id', true);
        $url = $id ? wp_get_attachment_url($id) : '';
        echo '<p><input type="hidden" id="ppsdr_pdf_attachment_id" name="ppsdr_pdf_attachment_id" value="' . esc_attr($id) . '">';
        echo '<button type="button" class="button" id="ppsdr-select-report-pdf">Choisir un PDF</button> ';
        echo '<span id="ppsdr-report-pdf-name">' . esc_html($url ? basename($url) : 'Aucun PDF sélectionné') . '</span></p>';
    }, 'ppsdr_report', 'normal', 'high');
});

add_action('admin_enqueue_scripts', function ($hook) {
    if (!in_array($hook, ['post.php', 'post-new.php'], true)) { return; }
    $screen = get_current_screen();
    if (!$screen || $screen->post_type !== 'ppsdr_report') { return; }
    wp_enqueue_media();
    wp_add_inline_script('media-editor', "jQuery(function($){$('#ppsdr-select-report-pdf').on('click',function(e){e.preventDefault();var frame=wp.media({title:'Sélectionner un rapport PDF',library:{type:'application/pdf'},button:{text:'Utiliser ce PDF'},multiple:false});frame.on('select',function(){var file=frame.state().get('selection').first().toJSON();$('#ppsdr_pdf_attachment_id').val(file.id);$('#ppsdr-report-pdf-name').text(file.filename||file.url);});frame.open();});});");
});

add_action('save_post_ppsdr_report', function ($post_id) {
    if (!isset($_POST['ppsdr_report_pdf_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['ppsdr_report_pdf_nonce'])), 'ppsdr_save_report_pdf')) { return; }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) { return; }
    if (!current_user_can('edit_post', $post_id)) { return; }
    if (isset($_POST['ppsdr_pdf_attachment_id'])) {
        update_post_meta($post_id, 'ppsdr_pdf_attachment_id', absint($_POST['ppsdr_pdf_attachment_id']));
    }
});

register_activation_hook(__FILE__, function () {
    if (!term_exists('Actualités', 'category')) {
        wp_insert_term('Actualités', 'category', ['slug' => 'actualites']);
    }
});
