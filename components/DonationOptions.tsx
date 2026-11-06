"use client";

import { useState } from "react";
import { ArrowRightLeft, Bitcoin, CircleDollarSign } from "lucide-react";

const methods = [
  { id: "usdt", title: "USDT", detail: "Stablecoin · réseau à confirmer avec PPSDR", icon: CircleDollarSign },
  { id: "bitcoin", title: "Bitcoin", detail: "BTC · coordonnées transmises par PPSDR", icon: Bitcoin },
  { id: "bank", title: "Virement bancaire", detail: "Coordonnées communiquées par l’équipe", icon: ArrowRightLeft },
] as const;

export function DonationOptions() {
  const [method, setMethod] = useState<(typeof methods)[number]["id"]>("usdt");
  const selected = methods.find((item) => item.id === method)!;

  function requestPayment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Demande de don PPSDR — ${selected.title}`);
    const body = encodeURIComponent(`Bonjour PPSDR,\n\nJe souhaite contribuer par ${selected.title}.\nNom : ${data.get("name") || ""}\nAdresse e-mail : ${data.get("email") || ""}\nMontant souhaité : ${data.get("amount") || "à préciser"}\n\nMerci de me transmettre les modalités de paiement.`);
    window.location.href = `mailto:ppsdrcongo@gmail.com?subject=${subject}&body=${body}`;
  }

  return <div className="ppsdr-donation-layout">
    <div className="ppsdr-payment-options" role="radiogroup" aria-label="Mode de don">
      {methods.map(({ id, title, detail, icon: Icon }) => <button type="button" role="radio" aria-checked={method === id} className={`ppsdr-payment-card ${method === id ? "is-selected" : ""}`} key={id} onClick={() => setMethod(id)}><span className="ppsdr-payment-card__icon"><Icon aria-hidden="true"/></span><span><strong>{title}</strong><small>{detail}</small></span><span className="ppsdr-payment-card__radio" aria-hidden="true"/></button>)}
    </div>
    <div className="ppsdr-donation-form-card"><div className="ppsdr-donation-form-card__heading"><span>Votre choix</span><h2>{selected.title}</h2><p>Demandez à l’équipe PPSDR les coordonnées adaptées pour finaliser votre don.</p></div><form onSubmit={requestPayment}><label>Nom et prénom<input name="name" autoComplete="name" required/></label><label>Adresse e-mail<input name="email" type="email" autoComplete="email" required/></label><label>Montant souhaité (facultatif)<input name="amount" inputMode="decimal" placeholder="Montant et devise"/></label><button type="submit">Demander les modalités <span aria-hidden="true">→</span></button></form><small className="ppsdr-payment-note">Les adresses USDT/Bitcoin et coordonnées bancaires seront communiquées directement par PPSDR. Aucun paiement n’est prélevé sur ce formulaire.</small></div>
  </div>;
}
