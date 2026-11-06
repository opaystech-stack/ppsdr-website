"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { DonationBanner } from "./DonationBanner";

export function DonationBannerInjector() {
  const locale = useLocale();
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/faire-un-don" || pathname === "/404" || pathname === "/not-found") return null;
  return <DonationBanner locale={locale === "en" ? "en" : "fr"}/>;
}
