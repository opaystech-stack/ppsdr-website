"use client";

import { useState } from "react";

export function ContactForm({ locale, defaultSubject = "don" }: { locale: "fr" | "en"; defaultSubject?: "don" | "partnership" }) {
  const en = locale === "en";
  const [submitted, setSubmitted] = useState(false);
  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("[PPSDR] " + String(data.get("subject") || "Contact"));
    const newline = String.fromCharCode(10);
    const nameLabel = en ? "Name" : "Nom";
    const contactLabel = en ? "Telephone or email" : "Téléphone ou e-mail";
    const subjectLabel = en ? "Subject" : "Sujet";
    const body = encodeURIComponent(nameLabel + ": " + String(data.get("name") || "") + newline + contactLabel + ": " + String(data.get("contact") || "") + newline + subjectLabel + ": " + String(data.get("subject") || "") + newline + newline + String(data.get("message") || ""));
    setSubmitted(true);
    window.location.href = "mailto:ppsdrcongo@gmail.com?subject=" + subject + "&body=" + body;
  }
  return <form className="ppsdr-contact-form" onSubmit={sendMessage}>
    <label>{en ? "Name" : "Nom"}<input name="name" autoComplete="name" required /></label>
    <label>{en ? "Telephone or email" : "Téléphone ou e-mail"}<input name="contact" required /></label>
    <label>{en ? "Subject" : "Sujet"}<select name="subject" defaultValue={defaultSubject}><option value="don">{en ? "Donation" : "Don"}</option><option value="partnership">{en ? "Partnership" : "Partenariat"}</option><option value="volunteering">{en ? "Volunteering" : "Bénévolat"}</option><option value="press">{en ? "Press" : "Presse"}</option><option value="other">{en ? "Other" : "Autre"}</option></select></label>
    <label>{en ? "Message" : "Message"}<textarea name="message" rows={5} required /></label>
    <button type="submit">{en ? "Send" : "Envoyer"}</button>
    <p className="ppsdr-contact-form__note" role={submitted ? "status" : undefined}>{submitted ? (en ? "Your email app was opened. Send the message there so PPSDR receives it." : "Votre messagerie a été sollicitée. Envoyez le message depuis votre application pour que PPSDR le reçoive.") : (en ? "Your email app will open with the message addressed to PPSDR." : "Votre messagerie s’ouvrira avec le message adressé à PPSDR.")}</p>
  </form>;
}
