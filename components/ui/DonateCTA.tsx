"use client";

import React, { useState } from "react";
import { Heart, ShieldCheck } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface DonateCTAProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const DonateCTA: React.FC<DonateCTAProps> = ({
  title = "Aidez-nous à améliorer le cadre de vie des populations vulnérables",
  subtitle = "« En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo. »",
  className,
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);

  const amounts = [20, 50, 100, 250];

  const impactMap: Record<number, string> = {
    20: "permet de fournir des trousses de premiers soins d'urgence pour un ménage pygmée.",
    50: "prend en charge des soins médicaux et des compléments nutritionnels pour un enfant malnutri.",
    100: "fournit des semences maraîchères de qualité et des outils agricoles pour l'autonomie d'un village.",
    250: "finance la scolarisation et les fournitures pour 10 enfants dans nos centres de rattrapage.",
  };

  return (
    <section className={cn("bg-[#403a60] py-12 md:py-16 text-white", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-[#960051] rounded-full mb-4">
          <Heart className="w-6 h-6 text-white" />
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          {title}
        </h2>

        <p className="text-gray-200 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Donation box card */}
        <div className="bg-white rounded-none p-6 sm:p-8 text-[#403a60] shadow-xl max-w-xl mx-auto border border-[#e5e9e8]">
          {/* Amount buttons */}
          <div className="grid grid-cols-4 gap-2.5 mb-4">
            {amounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setSelectedAmount(amount)}
                className={cn(
                  "py-3 rounded-none font-extrabold text-lg border-2 transition-all",
                  selectedAmount === amount
                    ? "border-[#960051] bg-[#960051] text-white shadow-md"
                    : "border-gray-200 hover:border-[#403a60] text-[#403a60] bg-white"
                )}
              >
                {amount} $
              </button>
            ))}
          </div>

          {/* Impact description */}
          <div className="bg-[#f0f1f2] p-3.5 rounded-none text-sm text-[#373737] mb-6 min-h-[50px] flex items-center justify-center">
            <p>
              <strong className="font-bold text-[#960051]">
                {selectedAmount} $
              </strong>{" "}
              {impactMap[selectedAmount] || "contribue directement au bien-être des communautés sur le terrain."}
            </p>
          </div>

          {/* Submit CTA */}
          <Button
            href="/how-to-help/why-donate-to-sightsavers"
            variant="primary"
            size="lg"
            className="w-full text-base py-3.5 rounded-none uppercase font-bold tracking-wide"
          >
            Faire un don de {selectedAmount} $
          </Button>

          <div className="flex items-center justify-center mt-4 text-xs text-[#686c74]">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-[#006f62]" />
            <span>Dons sécurisés via Mobile Money & Virement bancaire • PPSDR ONGD</span>
          </div>
        </div>
      </div>
    </section>
  );
};
