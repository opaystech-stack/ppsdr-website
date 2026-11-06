const fs = require('fs');

let css = fs.readFileSync('data/sightsavers_main.min.css', 'utf8');

// Replace fonts
css = css.replace(/font-family:[^;}]+(?:sightsavers|arial|helvetica|sans-serif)[^;}]*/gi, 'font-family:"Montserrat", sans-serif');

// Fix relative URLs to absolute Sightsavers CDN assets
css = css.replace(/url\(\.\.\/font\//g, 'url(https://www.sightsavers.org/wp-content/themes/theme/assets/build/font/');
css = css.replace(/url\(\.\.\/\.\.\/images\//g, 'url(https://www.sightsavers.org/wp-content/themes/theme/assets/images/');
css = css.replace(/url\(\.\.\/images\//g, 'url(https://www.sightsavers.org/wp-content/themes/theme/assets/images/');
css = css.replace(/url\(\.\.\/icons\//g, 'url(https://www.sightsavers.org/wp-content/themes/theme/assets/icons/');

// Replace colors
css = css.replace(/#fb2\b/gi, '#D00000');
css = css.replace(/#ffbb22\b/gi, '#D00000');
css = css.replace(/#f5b31f\b/gi, '#b00000');

css = css.replace(/#403a60\b/gi, '#19313b');
css = css.replace(/#312c4b\b/gi, '#12232a');

css = css.replace(/#960051\b/gi, '#D00000');
css = css.replace(/#820040\b/gi, '#b00000');
css = css.replace(/#75003f\b/gi, '#b00000');
css = css.replace(/#8b0047\b/gi, '#D00000');

css = css.replace(/#006f62\b/gi, '#2b6fe8');

fs.writeFileSync('app/sightsavers-branded.css', css);
console.log('Successfully regenerated app/sightsavers-branded.css with absolute URLs, size:', css.length);
