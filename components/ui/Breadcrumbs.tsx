import React from "react";
import {Link} from "@/i18n/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("bg-brand-gray-light py-2.5 px-4 sm:px-6 lg:px-8 border-b border-gray-200 text-xs sm:text-sm", className)}
    >
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-brand-text-muted overflow-x-auto whitespace-nowrap">
        <Link
          href="/"
          className="flex items-center hover:text-brand-navy transition-colors text-brand-text-muted"
        >
          <Home className="w-3.5 h-3.5 mr-1" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-navy transition-colors truncate max-w-[200px]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-brand-navy truncate max-w-[300px]">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
