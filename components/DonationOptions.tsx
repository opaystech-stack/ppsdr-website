"use client";

import { useState } from "react";
import { ArrowRightLeft, Bitcoin, CircleDollarSign } from "lucide-react";

const methods = [
  { id: "usdt", title: "USDT", detail: "Stablecoin · réseau à confirmer avec PPSDR", icon: CircleDollarSign },
  { id: "bitcoin", title: "Bitcoin", detail: "BTC · coordonnées transmises par PPSDR", icon: Bitcoin },
  { id: "bank", title: "Virement bancaire", detail: "Coordonnées communiquées par l’équipe", icon: ArrowRightLeft },
] as const;

export function DonationOptions({locale='fr'}: {locale?: 'fr'|'en'}) {
  const en = locale === 'en';
  const [method, setMethod] = useState<(typeof methods)[number]["id"]>("usdt");
  const selected = methods.find((item) => item.id === method)!;

  function requestPayment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selectedTitle = locale === 'en' ? ({usdt:'USDT',bitcoin:'Bitcoin',bank:'Bank transfer'} as const)[selected.id] : selected.title;
    const subject = encodeURIComponent(locale === 'en' ? `PPSDR donation enquiry — ${selectedTitle}` : `Demande de don PPSDR — ${selectedTitle}`);
    const body = encodeURIComponent(locale === 'en' ? `Hello PPSDR,\n\nI would like to contribute by ${selectedTitle}.\nName: ${data.get("name") || ""}\nEmail address: ${data.get("email") || ""}\nDesired amount: ${data.get("amount") || "to be specified"}\n\nPlease send me the payment details.` : `Bonjour PPSDR,\n\nJe souhaite contribuer par ${selectedTitle}.\nNom : ${data.get("name") || ""}\nAdresse e-mail : ${data.get("email") || ""}\nMontant souhaité : ${data.get("amount") || "à préciser"}\n\nMerci de me transmettre les modalités de paiement.`);
    window.location.href = `mailto:ppsdrcongo@gmail.com?subject=${subject}&body=${body}`;
  }

  return <div className="ppsdr-donation-layout">
    <div className="ppsdr-payment-options" role="radiogroup" aria-label="Mode de don">
      {methods.map(({ id, detail, icon: Icon }) => { const title = en ? ({usdt:'USDT',bitcoin:'Bitcoin',bank:'Bank transfer'} as const)[id] : ({usdt:'USDT',bitcoin:'Bitcoin',bank:'Virement bancaire'} as const)[id]; const translatedDetail = en ? ({usdt:'Stablecoin · network to be confirmed by PPSDR',bitcoin:'BTC · details provided by PPSDR',bank:'Details provided by the team'} as const)[id] : detail; return <button type="button" role="radio" aria-checked={method === id} className={`ppsdr-payment-card ${method === id ? "is-selected" : ""}`} key={id} onClick={() => setMethod(id)}><span className="ppsdr-payment-card__icon"><Icon aria-hidden="true"/></span><span><strong>{title}</strong><small>{translatedDetail}</small></span><span className="ppsdr-payment-card__radio" aria-hidden="true"/></button>; })}
    </div>
    <div className="ppsdr-donation-form-card"><div className="ppsdr-donation-form-card__heading"><span>{en?'Your selection':'Votre choix'}</span><h2>{en ? ({usdt:'USDT',bitcoin:'Bitcoin',bank:'Bank transfer'} as const)[selected.id] : selected.title}</h2><p>{en?'Ask the PPSDR team for the details needed to complete your donation.':'Demandez à l’équipe PPSDR les coordonnées adaptées pour finaliser votre don.'}</p></div><form onSubmit={requestPayment}><label>{en?'Full name':'Nom et prénom'}<input name="name" autoComplete="name" required/></label><label>{en?'Email address':'Adresse e-mail'}<input name="email" type="email" autoComplete="email" required/></label><label>{en?'Desired amount (optional)':'Montant souhaité (facultatif)'}<input name="amount" inputMode="decimal" placeholder={en?'Amount and currency':'Montant et devise'}/></label><button type="submit">{en?'Request details':'Demander les modalités'} <span aria-hidden="true">→</span></button></form><small className="ppsdr-payment-note">{en?'USDT/Bitcoin addresses and bank details will be provided directly by PPSDR. This form does not collect a payment.':'Les adresses USDT/Bitcoin et coordonnées bancaires seront communiquées directement par PPSDR. Aucun paiement n’est prélevé sur ce formulaire.'}</small></div>
  </div>;
}
