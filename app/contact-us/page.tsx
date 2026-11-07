"use client";

import React, { useState } from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { ChevronRight, Phone, Mail, MapPin, Share2, CheckCircle2, Send } from "lucide-react";
import { EmailModule } from "@/components/modules/EmailModule";

const CANAUX_CONTACT = [
  {
    title: "Téléphone & WhatsApp",
    icon: Phone,
    text: "Pour joindre notre coordination générale et notre équipe de terrain :",
    linkText: "+243 997 133 925",
    href: "tel:+243997133925",
  },
  {
    title: "Courrier électronique",
    icon: Mail,
    text: "Pour les correspondances officielles, demandes d'information ou partenariats :",
    linkText: "ppsdrcongo@gmail.com",
    href: "mailto:ppsdrcongo@gmail.com",
  },
  {
    title: "Email de secours / Secrétariat",
    icon: Mail,
    text: "Adresse alternative de notre secrétariat administratif :",
    linkText: "ppsdrongdasbl@gmail.com",
    href: "mailto:ppsdrongdasbl@gmail.com",
  },
  {
    title: "Siège social",
    icon: MapPin,
    text: "Bureau de la coordination nationale :",
    linkText: "Goma, Nord-Kivu, République démocratique du Congo",
    href: "#",
  },
  {
    title: "Réseaux sociaux officiels",
    icon: Share2,
    text: "Suivez nos activités et reportages en direct sur Facebook et YouTube :",
    linkText: "Facebook & YouTube PPSDR",
    href: "https://www.facebook.com/profile.php?id=61593676719622",
  },
];

const BUREAUX_ANTENNES = [
  {
    region: "Siège National — Goma",
    address: "Coordination générale de PPSDR, Ville de Goma, Province du Nord-Kivu, RDC",
    phone: "+243 997 133 925",
    email: "ppsdrcongo@gmail.com",
  },
  {
    region: "Antenne d'Idjwi Sud — Kisiza",
    address: "Bureau de l'antenne PPSDR, Kisiza, Chefferie Ntambuka, Territoire d'Idjwi, Province du Sud-Kivu, RDC",
    phone: "+243 997 133 925",
    email: "ppsdrcongo@gmail.com",
  },
  {
    region: "Antenne de Lubero (Conservation)",
    address: "Coordination du projet de conservation communautaire de la forêt de Masekeseke, Territoire de Lubero, Nord-Kivu, RDC",
    phone: "+243 997 133 925",
    email: "ppsdrongdasbl@gmail.com",
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#373737]">
            <Link href="/" className="hover:text-[#960051]">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-[#403a60]">Contact</span>
          </nav>
        </div>
      </div>

      {/* Module 0: c-hero-fullscreen */}
      <div className="relative bg-[#403a60] overflow-hidden lg:min-h-[500px] flex items-center">
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url("/images/ppsdr/schoolchildren-brick-school.webp")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#403a60] via-[#403a60]/85 to-transparent lg:w-3/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full z-10">
          <div className="bg-white p-8 sm:p-10 lg:max-w-xl shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-2">
              Nous contacter
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#403a60] leading-tight mb-4">
              Contactez PPSDR
            </h1>
            <div className="w-16 h-1 bg-[#960051] mb-6" />
            <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-6 font-medium">
              « Vous pouvez nous contacter pour toute demande d&apos;information, de visite de terrain, de partenariat institutionnel ou de soutien humanitaire. »
            </p>
            <Link
              href="#formulaire-contact"
              className="inline-block bg-[#960051] hover:bg-[#75003f] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 transition-colors shadow-sm"
            >
              Envoyer un message
            </Link>
          </div>
        </div>

        {/* Mobile fallback image */}
        <div className="lg:hidden relative w-full aspect-[16/9]">
          <Image
            src="/images/ppsdr/schoolchildren-brick-school.webp"
            alt="Schoolchildren gathered outside a brick school"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Contact callout */}
      <section className="py-8 bg-[#960051] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl sm:text-2xl font-bold text-center sm:text-left">
            Besoin d&apos;informations rapides ou de réponses sur nos actions ?
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#960051] hover:bg-[#403a60] hover:text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 transition-colors whitespace-nowrap shadow-md"
          >
            Contacter notre équipe
          </Link>
        </div>
      </section>

      {/* Module 2: Canaux de contact */}
      <section className="py-16 bg-[#f0f1f2] border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CANAUX_CONTACT.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="bg-white border border-[#e5e9e8] p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-[#f0f1f2] text-[#960051] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#403a60] mb-3">
                      {c.title}
                    </h3>
                    <p className="text-[#373737] text-sm leading-relaxed mb-6">
                      {c.text}
                    </p>
                  </div>
                  <div>
                    {c.href.startsWith("http") || c.href.startsWith("tel:") || c.href.startsWith("mailto:") ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-bold text-[#960051] hover:text-[#403a60] transition-colors"
                      >
                        {c.linkText}
                      </a>
                    ) : (
                      <Link
                        href={c.href}
                        className="text-sm font-bold text-[#960051] hover:text-[#403a60] transition-colors"
                      >
                        {c.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Module 3: Formulaire de contact */}
      <section id="formulaire-contact" className="py-16 bg-white border-b border-[#e5e9e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-2">
              Formulaire direct
            </span>
            <h2 className="text-3xl font-bold text-[#403a60] mb-4">
              Laissez-nous un message
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto mb-4" />
            <p className="text-xs text-[#686c74]">
              Le formulaire envoie les messages vers : <strong>[ADRESSE E-MAIL DESTINATAIRE À CONFIRMER]</strong>
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#f0f1f2] border-l-4 border-[#006f62] flex items-center space-x-4 text-[#403a60]">
              <CheckCircle2 className="w-8 h-8 text-[#006f62] flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">Message envoyé avec succès !</h3>
                <p className="text-sm text-[#686c74]">
                  Notre équipe vous répondra dans les meilleurs délais à l&apos;adresse indiquée.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#f0f1f2] p-8 border border-[#e5e9e8]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#403a60] uppercase tracking-wider mb-2">
                    Votre nom complet <span className="text-[#960051]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    placeholder="Ex: Jean Mukendi"
                    className="w-full px-4 py-3 border border-[#e5e9e8] rounded-none text-sm text-[#373737] focus:outline-none focus:border-[#960051] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#403a60] uppercase tracking-wider mb-2">
                    Votre adresse e-mail <span className="text-[#960051]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nom@exemple.com"
                    className="w-full px-4 py-3 border border-[#e5e9e8] rounded-none text-sm text-[#373737] focus:outline-none focus:border-[#960051] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#403a60] uppercase tracking-wider mb-2">
                  Sujet de votre message <span className="text-[#960051]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.sujet}
                  onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                  placeholder="Ex: Demande de partenariat / Soutien humanitaire"
                  className="w-full px-4 py-3 border border-[#e5e9e8] rounded-none text-sm text-[#373737] focus:outline-none focus:border-[#960051] bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#403a60] uppercase tracking-wider mb-2">
                  Votre message <span className="text-[#960051]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Écrivez votre message ici..."
                  className="w-full px-4 py-3 border border-[#e5e9e8] rounded-none text-sm text-[#373737] focus:outline-none focus:border-[#960051] bg-white"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center bg-[#960051] hover:bg-[#75003f] text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Module 4: Antennes et Bureaux en RDC */}
      <section className="py-16 bg-[#f0f1f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
              Nos bureaux et antennes en RDC
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUREAUX_ANTENNES.map((b, idx) => (
              <div key={idx} className="bg-white border border-[#e5e9e8] p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#403a60] mb-3 border-b border-[#e5e9e8] pb-2">
                    {b.region}
                  </h3>
                  <p className="text-sm text-[#373737] leading-relaxed mb-4">
                    {b.address}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#f0f1f2] text-xs text-[#686c74] space-y-1">
                  <p><span className="font-semibold text-[#403a60]">Tél:</span> {b.phone}</p>
                  <p><span className="font-semibold text-[#403a60]">Email:</span> {b.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Module */}
      <EmailModule />
    </div>
  );
}
