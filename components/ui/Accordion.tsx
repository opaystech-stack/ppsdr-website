"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  id?: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  allowMultiple = false,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    items.map((it, idx) => (it.defaultOpen ? idx : -1)).filter((idx) => idx !== -1)
  );

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className="border border-brand-gray-border rounded-lg overflow-hidden bg-white shadow-sm transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-brand-navy hover:text-brand-plum bg-white hover:bg-gray-50 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg pr-4">{item.title}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-brand-plum flex-shrink-0 transition-transform duration-200",
                  isOpen && "transform rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-brand-text text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-gray-50/50">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
