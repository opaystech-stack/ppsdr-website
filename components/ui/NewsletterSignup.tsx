"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  className?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className={cn("bg-[#403a60] p-6 md:p-8 rounded-none text-white", className)}>
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-8 h-8 text-[#960051] mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-white mb-2">
          Restez informés de nos actions
        </h3>
        <p className="text-gray-200 text-sm mb-6">
          Recevez nos actualités de terrain auprès des peuples autochtones pygmées et paysans en République démocratique du Congo.
        </p>

        {submitted ? (
          <div className="bg-[#006f62]/20 border border-[#006f62] text-blue-200 p-4 rounded flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-[#960051]" />
            <span>Merci pour votre inscription à la lettre d&apos;information de PPSDR !</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-grow px-4 py-2.5 rounded-none text-[#373737] placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#960051]"
            />
            <Button type="submit" variant="primary" size="md">
              S&apos;inscrire
            </Button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-4">
          Vous pouvez vous désinscrire à tout moment. Nous respectons votre vie privée.
        </p>
      </div>
    </div>
  );
};
