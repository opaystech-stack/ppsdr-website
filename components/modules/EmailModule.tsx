"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function EmailModule() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-[#f0f1f2] border-t border-[#e5e9e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#e5e9e8] shadow-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Left image column with PPSDR field photo */}
          <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-5 bg-gray-200 min-h-[300px]">
            <Image
              src="/images/ppsdr/community-workshop.webp"
              alt="Community members taking part in a health workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Right form column */}
          <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#403a60] mb-3">
              Restez informés de nos actions de terrain
            </h2>
            <div className="w-16 h-1 bg-[#960051] mb-6" />
            <p className="text-[#373737] text-base leading-relaxed mb-6">
              Recevez directement les rapports et témoignages de nos interventions auprès des peuples autochtones pygmées et des paysans vulnérables en République démocratique du Congo.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#f0f1f2] border-l-4 border-[#006f62] flex items-center space-x-3 text-[#403a60]">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-[#006f62]" />
                <p className="text-base font-bold">
                  Merci de votre engagement et de votre intérêt pour les actions de PPSDR !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#403a60] uppercase tracking-wider mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Votre prénom"
                      className="w-full px-4 py-2.5 border border-[#e5e9e8] rounded-none text-sm text-[#373737] focus:outline-none focus:border-[#960051]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#403a60] uppercase tracking-wider mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Votre nom"
                      className="w-full px-4 py-2.5 border border-[#e5e9e8] rounded-none text-sm text-[#373737] focus:outline-none focus:border-[#960051]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#403a60] uppercase tracking-wider mb-1">
                    Adresse e-mail <span className="text-[#960051]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nom@exemple.com"
                    className="w-full px-4 py-2.5 border border-[#e5e9e8] rounded-none text-sm text-[#373737] focus:outline-none focus:border-[#960051]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#960051] hover:bg-[#75003f] text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 transition-colors"
                  >
                    S&apos;inscrire
                  </button>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed pt-2">
                  Vous pouvez vous désinscrire à tout moment en nous écrivant à{" "}
                  <a href="mailto:ppsdrcongo@gmail.com" className="underline hover:text-[#960051]">
                    ppsdrcongo@gmail.com
                  </a>
                  . Pour plus d&apos;informations, consultez notre{" "}
                  <Link href="/about-us" className="underline hover:text-[#960051]">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
