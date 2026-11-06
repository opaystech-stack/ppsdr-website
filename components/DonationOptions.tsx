"use client";

import { useState } from "react";

export function DonationOptions({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const en = locale === "en";
  const [amount, setAmount] = useState("25");
  const [frequency, setFrequency] = useState("once");

  function requestDonation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const requestedAmount = amount === "custom" ? String(data.get("customAmount") || "") : amount;
    const subject = encodeURIComponent(en ? "PPSDR donation enquiry" : "Demande de don PPSDR");
    const body = encodeURIComponent(en
      ? `Hello PPSDR,\n\nI would like to make a ${frequency === "monthly" ? "monthly" : "one-time"} donation of ${requestedAmount} USD.\nName: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\nPhone: ${data.get("phone") || ""}\nPreferred method: ${data.get("method") || ""}\n\nPlease send me the details to complete my donation.`
      : `Bonjour PPSDR,\n\nJe souhaite faire un don ${frequency === "monthly" ? "mensuel" : "unique"} de ${requestedAmount} USD.\nNom complet : ${data.get("name") || ""}\nE-mail : ${data.get("email") || ""}\nTéléphone : ${data.get("phone") || ""}\nMoyen souhaité : ${data.get("method") || ""}\n\nMerci de me transmettre les modalités pour finaliser mon don.`);
    window.location.href = `mailto:ppsdrcongo@gmail.com?subject=${subject}&body=${body}`;
  }

  const amounts = ["10", "25", "50", "100"];
  return <div className="ppsdr-donation-form-card">
    <form onSubmit={requestDonation}>
      <fieldset>
        <legend>{en ? "Choose an amount (USD)" : "Choisissez un montant ($)"}</legend>
        <div className="ppsdr-donation-amounts">
          {amounts.map((value) => <label className={amount === value ? "is-selected" : ""} key={value}>
            <input type="radio" name="amountChoice" value={value} checked={amount === value} onChange={() => setAmount(value)} />
            <span>${value}</span>
          </label>)}
          <label className={amount === "custom" ? "is-selected" : ""}>
            <input type="radio" name="amountChoice" value="custom" checked={amount === "custom"} onChange={() => setAmount("custom")} />
            <span>{en ? "Other amount" : "Montant libre"}</span>
          </label>
        </div>
        {amount === "custom" && <label className="ppsdr-donation-custom">{en ? "Amount in USD" : "Montant en dollars"}<input name="customAmount" type="number" min="1" step="0.01" required /></label>}
      </fieldset>

      <fieldset>
        <legend>{en ? "Frequency" : "Fréquence"}</legend>
        <div className="ppsdr-donation-frequency">
          <label><input type="radio" name="frequency" checked={frequency === "once"} onChange={() => setFrequency("once")} /> {en ? "One-time" : "Don unique"}</label>
          <label><input type="radio" name="frequency" checked={frequency === "monthly"} onChange={() => setFrequency("monthly")} /> {en ? "Monthly" : "Don mensuel"}</label>
        </div>
      </fieldset>

      <div className="ppsdr-donor-fields">
        <label>{en ? "Full name" : "Nom complet"}<input name="name" autoComplete="name" required /></label>
        <label>{en ? "E-mail address" : "Adresse e-mail"}<input name="email" type="email" autoComplete="email" required /></label>
        <label>{en ? "Telephone" : "Téléphone"}<input name="phone" type="tel" autoComplete="tel" required /></label>
      </div>

      <fieldset className="ppsdr-donation-methods">
        <legend>{en ? "Payment methods" : "Moyens de paiement"}</legend>
        <label className="ppsdr-donation-method"><input type="radio" name="method" value="Mobile Money" defaultChecked /><span><strong>Mobile Money</strong><small>Airtel Money, M-Pesa, Orange Money — {en ? "numbers to be provided by PPSDR" : "numéros à compléter par PPSDR"}.</small></span></label>
        <label className="ppsdr-donation-method"><input type="radio" name="method" value="Bank transfer" /><span><strong>{en ? "Bank transfer" : "Virement bancaire"}</strong><small>{en ? "Bank details to be provided by PPSDR." : "Coordonnées bancaires à compléter par PPSDR."}</small></span></label>
        <p className="ppsdr-card-coming">{en ? "Online card payments are coming soon." : "Le paiement en ligne par carte arrive bientôt."}</p>
      </fieldset>
      <button type="submit">{en ? "Make a donation" : "Faire un don"}</button>
      <p className="ppsdr-payment-note">{en ? "This request opens an email to PPSDR. No payment is collected on this page." : "Cette demande prépare un e-mail à PPSDR. Aucun paiement n’est prélevé sur cette page."}</p>
    </form>
  </div>;
}
