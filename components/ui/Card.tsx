import React from "react";
import {Link} from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  href?: string;
  date?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  excerpt,
  image,
  imageAlt = "",
  category,
  href,
  date,
  className,
}) => {
  const CardContent = (
    <div
      className={cn(
        "group flex flex-col bg-white border border-brand-gray-border rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full",
        className
      )}
    >
      {image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {category && (
            <span className="absolute top-3 left-3 bg-brand-plum text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              {category}
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {!image && category && (
          <span className="text-brand-plum text-xs font-bold uppercase tracking-wider mb-2">
            {category}
          </span>
        )}

        {date && <p className="text-xs text-brand-text-muted mb-2">{date}</p>}

        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-plum transition-colors mb-3">
          {title}
        </h3>

        {excerpt && (
          <p className="text-brand-text-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
            {excerpt}
          </p>
        )}

        {href && (
          <div className="mt-auto pt-2 flex items-center text-brand-navy font-bold text-sm group-hover:text-brand-plum transition-colors">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
