"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowLeft, Check, Copy, Heart, LockKeyhole, X } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import React, { FormEvent, PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";

type Frequency = "monthly" | "once";
type PaymentMethod = "mobile" | "bank";

export function DonationModalManager({ children }: PropsWithChildren) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const en = locale === "en";
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [amount, setAmount] = useState("10");
  const [otherAmount, setOtherAmount] = useState("");
  const [dedicate, setDedicate] = useState(false);
  const [dedicationName, setDedicationName] = useState("");
  const [organization, setOrganization] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [method, setMethod] = useState<PaymentMethod>("mobile");
  const [provider, setProvider] = useState("Airtel Money");
  const [copied, setCopied] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("Nord-Kivu");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("CD");
  const [reference, setReference] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousPathname = useRef(pathname);

  const close = useCallback(() => {
    setOpen(false);
    setStep(1);
    if (pathname === "/faire-un-don") router.replace("/");
    else if (window.location.search.includes("don=1")) window.history.replaceState({}, "", window.location.pathname);
  }, [pathname, router]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (/\/faire-un-don\/?(?:\?.*)?$/.test(href)) {
        event.preventDefault();
        setStep(1);
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (pathname === "/faire-un-don" || window.location.search.includes("don=1")) setOpen(true);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      setOpen(pathname === "/faire-un-don");
      setStep(1);
    }
  }, [pathname]);

  const text = (fr: string, enText: string) => en ? enText : fr;
  const amountText = amount === "other" ? otherAmount : amount;
  const amountLabel = amountText ? `$${amountText}` : text("Montant libre", "Other amount");
  const goNext = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setStep((current) => Math.min(5, current + 1)); };
  const copyInfo = async (value: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return <>
    {children}
    {open && <div className="ppsdr-donation-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <section className="ppsdr-donation-modal" role="dialog" aria-modal="true" aria-label={text("Faire un don à PPSDR", "Donate to PPSDR")}>
        <button ref={closeRef} className="ppsdr-donation-close" type="button" onClick={close} aria-label={text("Fermer", "Close")}><X/></button>
        <div className="ppsdr-donation-intro">
          <div className="ppsdr-donation-photo"><Image src="/images/ppsdr/schoolyard-sunlight.webp" alt={text("Enfants dans la cour de leur école", "Children in their school yard")} fill priority sizes="(max-width: 760px) 100vw, 50vw"/></div>
          <div className="ppsdr-donation-intro-copy"><Image src="/images/ppsdr/logo-ppsdr.webp" alt="PPSDR" width={150} height={66} className="ppsdr-donation-logo"/><h2>{text("Votre don agit sur le terrain", "Your donation makes a difference on the ground")}</h2>
            <p>{text("PPSDR accompagne les peuples autochtones pygmées et les paysans vulnérables des milieux ruraux de la RDC : santé, éducation, sécurité alimentaire, environnement et justice sociale. Aujourd'hui, vous pouvez changer la vie d'une famille et lui donner ce qu'il lui faut pour vivre dignement.", "PPSDR supports Indigenous Pygmy peoples and vulnerable farmers in rural areas of the DRC through health, education, food security, the environment, and social justice. Today, you can change a family's life and help provide what it needs to live with dignity.")}</p>
            <nav className="ppsdr-donation-inline-links"><a href={en ? "/en/pourquoi-nous-soutenir" : "/pourquoi-nous-soutenir"}>{text("Découvrir d'autres façons de donner", "Discover other ways to give")}</a><a href={en ? "/en/contact" : "/contact"}>{text("Contactez-nous", "Contact us")}</a><a href={en ? "/en/contact" : "/contact"}>{text("Donner chaque année", "Give annually")}</a></nav>
          </div>
        </div>
        <div className="ppsdr-donation-flow">
          {step < 5 && <div className="ppsdr-donation-flow-heading">{step === 1 ? <><LockKeyhole aria-hidden="true"/><h2>{text("Don sécurisé", "Secure donation")}</h2></> : <><button type="button" onClick={() => setStep(step - 1)} aria-label={text("Retour", "Back")}><ArrowLeft/></button><h2>{["", "", text("Entrez vos coordonnées", "Enter your details"), text("Entrez votre adresse", "Enter your address"), text("Choisissez votre moyen de paiement", "Choose your payment method")][step]}</h2></>}</div>}
          {step === 1 && <>
            <div className="ppsdr-donation-frequency"><button type="button" className={frequency === "once" ? "selected" : ""} onClick={() => setFrequency("once")}>{text("Don unique", "Give once")}</button><button type="button" className={frequency === "monthly" ? "selected" : ""} onClick={() => setFrequency("monthly")}><Heart aria-hidden="true"/>{text("Mensuel", "Monthly")}</button></div>
            <div className="ppsdr-donation-amounts">{[["10", text("Offre des fournitures scolaires à un enfant", "Provides school supplies for a child")], ["25", text("Fournit des semences à une famille", "Provides seeds for a family")], ["50", text("Finance les soins de santé d'une mère et de son enfant", "Funds health care for a mother and her child")]].map(([value, detail]) => <button type="button" className={amount === value ? "selected" : ""} onClick={() => setAmount(value)} key={value}><strong>${value}</strong><span>{detail}</span></button>)}<button type="button" className={amount === "other" ? "selected" : ""} onClick={() => setAmount("other")}>{text("Autre montant", "Other amount")}</button>{amount === "other" && <label className="ppsdr-donation-other">$ <input aria-label={text("Montant libre en dollars", "Custom amount in dollars")} inputMode="decimal" type="number" min="1" value={otherAmount} onChange={(event) => setOtherAmount(event.target.value)} placeholder="0"/></label>}</div>
            <label className="ppsdr-donation-check"><input type="checkbox" checked={dedicate} onChange={(event) => setDedicate(event.target.checked)}/>{text("Dédier ce don", "Dedicate this donation")}</label>
            {dedicate && <input className="ppsdr-donation-field" value={dedicationName} onChange={(event) => setDedicationName(event.target.value)} placeholder={text("Nom de la personne", "Person's name")}/>}
            <button className="ppsdr-donation-primary" type="button" onClick={() => setStep(2)}>{frequency === "monthly" ? text("Faire un don mensuel", "Donate monthly") : text("Faire un don", "Donate")}</button>
          </>}
          {step === 2 && <form className="ppsdr-donation-step-form" onSubmit={goNext}><div className="ppsdr-donation-fields"><input required autoComplete="given-name" placeholder={text("Prénom", "First name")} value={firstName} onChange={(e) => setFirstName(e.target.value)}/><input required autoComplete="family-name" placeholder={text("Nom", "Last name")} value={lastName} onChange={(e) => setLastName(e.target.value)}/><input required type="email" autoComplete="email" placeholder={text("Adresse e-mail", "Email address")} value={email} onChange={(e) => setEmail(e.target.value)}/></div><label className="ppsdr-donation-check"><input type="checkbox" checked={organization} onChange={(e) => setOrganization(e.target.checked)}/>{text("Donner en tant qu'organisation", "Donate as an organization")}</label><label className="ppsdr-donation-check"><input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)}/>{text("Donner anonymement", "Donate anonymously")}</label><button className="ppsdr-donation-primary" type="submit">{text("Continuer", "Continue")}</button></form>}
          {step === 3 && <form className="ppsdr-donation-step-form" onSubmit={goNext}><div className="ppsdr-donation-fields"><input required autoComplete="street-address" placeholder={text("Adresse", "Street address")} value={address} onChange={(e) => setAddress(e.target.value)}/><input autoComplete="address-line2" placeholder={text("Appartement / suite / étage", "Apartment / suite / floor")} value={apartment} onChange={(e) => setApartment(e.target.value)}/><input required autoComplete="address-level2" placeholder={text("Ville", "City")} value={city} onChange={(e) => setCity(e.target.value)}/><div className="ppsdr-donation-two-fields"><input placeholder={text("Province", "Province / state")} value={province} onChange={(e) => setProvince(e.target.value)}/><input autoComplete="postal-code" placeholder={text("Code postal", "Postal code")} value={postal} onChange={(e) => setPostal(e.target.value)}/></div><label className="ppsdr-donation-country">{text("Pays", "Country")}<select value={country} onChange={(e) => setCountry(e.target.value)}><option value="CD">{text("RD Congo", "DR Congo")}</option><option value="UG">Uganda</option><option value="RW">Rwanda</option><option value="BI">Burundi</option><option value="OTHER">{text("Autre", "Other")}</option></select></label></div><button className="ppsdr-donation-primary" type="submit">{text("Continuer", "Continue")}</button></form>}
          {step === 4 && <form className="ppsdr-donation-step-form" onSubmit={(e) => { e.preventDefault(); setStep(5); }}><div className="ppsdr-donation-recap"><strong>{amountLabel}</strong><span>{frequency === "monthly" ? text("Don mensuel", "Monthly donation") : text("Don unique", "One-time donation")}</span></div><div className="ppsdr-donation-payment-tabs"><button type="button" className={method === "mobile" ? "selected" : ""} onClick={() => setMethod("mobile")}>Mobile Money</button><button type="button" className={method === "bank" ? "selected" : ""} onClick={() => setMethod("bank")}>{text("Virement bancaire", "Bank transfer")}</button></div>{method === "mobile" ? <div className="ppsdr-donation-payment-detail"><label>{text("Opérateur", "Provider")}<select value={provider} onChange={(e) => setProvider(e.target.value)}><option>Airtel Money</option><option>M-Pesa</option><option>Orange Money</option></select></label><p><strong>{provider}</strong><span>{text("Numéro PPSDR : à compléter par PPSDR", "PPSDR number: to be provided by PPSDR")}</span><button type="button" disabled onClick={() => copyInfo("")}><Copy/> {copied ? text("Copié", "Copied") : text("Copier le numéro", "Copy number")}</button></p><label>{text("Votre numéro Mobile Money", "Your Mobile Money number")}<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={text("Pour vérifier la réception", "For payment verification")}/></label><small>{text("Envoyez le montant choisi au numéro ci-dessus, puis cliquez sur « J'ai envoyé mon don ».", "Send the selected amount to the number above, then click ‘I have sent my donation.’")}</small></div> : <div className="ppsdr-donation-payment-detail"><div className="ppsdr-donation-bank-details"><strong>{text("Coordonnées bancaires PPSDR", "PPSDR bank details")}</strong><dl><div><dt>{text("Banque", "Bank")}</dt><dd>Trust Merchant Bank S.A. (TMB)</dd></div><div><dt>{text("Intitulé du compte", "Account holder")}</dt><dd>PROGRAMME DE PROMOTION DE LA SANTE ET DE DVMT EN MILIEUX RURAUX</dd></div><div className="ppsdr-donation-account-row"><dt>{text("Numéro de compte", "Account number")}</dt><dd><span>00017280022000078254960</span><button type="button" onClick={() => copyInfo("00017280022000078254960")}><Copy aria-hidden="true"/> {copied ? text("Copié", "Copied") : text("Copier", "Copy")}</button></dd></div><div><dt>{text("Devise", "Currency")}</dt><dd>USD</dd></div><div><dt>SWIFT</dt><dd>TRMSCD3L</dd></div><div><dt>{text("Agence", "Branch")}</dt><dd>1223 Avenue Lumumba, Lubumbashi, RD Congo</dd></div><div><dt>{text("E-mail banque", "Bank email")}</dt><dd><a href="mailto:tmb@tmb.cd">tmb@tmb.cd</a></dd></div></dl></div><label>{text("Référence du virement (optionnel)", "Transfer reference (optional)")}<input value={reference} onChange={(e) => setReference(e.target.value)}/></label><small>{text("Effectuez le virement avec les coordonnées ci-dessus, puis cliquez sur « J'ai envoyé mon don ».", "Make the transfer using the details above, then click ‘I have sent my donation.’")}</small></div>}<p className="ppsdr-donation-card-note">{text("Le paiement en ligne par carte arrive bientôt.", "Online card payments are coming soon.")}</p><button className="ppsdr-donation-primary" type="submit">{text("J'ai envoyé mon don", "I have sent my donation")}</button></form>}
          {step === 5 && <div className="ppsdr-donation-confirm"><span><Check/></span><h2>{text("Merci pour votre don !", "Thank you for your donation!")}</h2><p>{text("PPSDR vérifiera la réception de votre don et vous enverra un reçu officiel sur demande.", "PPSDR will verify receipt of your donation and send you an official receipt on request.")}</p><button className="ppsdr-donation-primary" type="button" onClick={close}>{text("Fermer", "Close")}</button></div>}
        </div>
        <footer className="ppsdr-donation-modal-footer"><a href={en ? "/en/contact" : "/contact"}>{text("Mon don est-il sécurisé ? Contactez-nous.", "Questions about donation security? Contact us.")}</a><a href={en ? "/en/contact" : "/contact"}>{text("Annuler un don mensuel ? Contactez-nous.", "To cancel a monthly donation, contact us.")}</a><a href={en ? "/en/contact" : "/contact"}>{text("Signaler un problème", "Report a problem")}</a></footer>
      </section>
    </div>}
  </>;
}
