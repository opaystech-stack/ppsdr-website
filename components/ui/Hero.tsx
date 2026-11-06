import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  theme?: "navy" | "plum" | "gray" | "yellow";
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt = "",
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  theme = "navy",
  className,
}) => {
  const themeClasses = {
    navy: "bg-brand-navy text-white",
    plum: "bg-brand-plum text-white",
    gray: "bg-brand-gray-light text-brand-navy",
    yellow: "bg-brand-yellow text-brand-navy",
  };

  const isDark = theme === "navy" || theme === "plum";

  return (
    <section
      className={cn(
        "relative py-12 md:py-20 overflow-hidden",
        themeClasses[theme],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className={cn("lg:col-span-7", !image && "lg:col-span-10 lg:mx-auto text-center")}>
            {eyebrow && (
              <span
                className={cn(
                  "inline-block text-xs font-bold uppercase tracking-wider mb-3 px-2.5 py-1 rounded",
                  isDark ? "bg-white/10 text-brand-yellow" : "bg-brand-plum text-white"
                )}
              >
                {eyebrow}
              </span>
            )}

            <h1
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6",
                isDark ? "text-white" : "text-brand-navy"
              )}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={cn(
                  "text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl",
                  isDark ? "text-gray-200" : "text-brand-text"
                )}
              >
                {subtitle}
              </p>
            )}

            {(ctaText || secondaryCtaText) && (
              <div className="flex flex-wrap gap-4 items-center">
                {ctaText && ctaHref && (
                  <Button
                    href={ctaHref}
                    variant={isDark ? "primary" : "secondary"}
                    size="lg"
                  >
                    {ctaText}
                  </Button>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Button
                    href={secondaryCtaHref}
                    variant={isDark ? "outline" : "plum"}
                    size="lg"
                    className={isDark ? "border-white text-white hover:bg-white hover:text-brand-navy" : ""}
                  >
                    {secondaryCtaText}
                  </Button>
                )}
              </div>
            )}
          </div>

          {image && (
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
