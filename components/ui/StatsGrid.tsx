import React from "react";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  description?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  title?: string;
  theme?: "light" | "navy" | "plum";
  className?: string;
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  stats,
  title,
  theme = "light",
  className,
}) => {
  const isDark = theme === "navy" || theme === "plum";

  const themeClasses = {
    light: "bg-brand-gray-light text-brand-navy",
    navy: "bg-brand-navy text-white",
    plum: "bg-brand-plum text-white",
  };

  return (
    <section className={cn("py-12 md:py-16", themeClasses[theme], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {title && (
          <h2
            className={cn(
              "text-2xl md:text-3xl font-extrabold mb-10 tracking-tight",
              isDark ? "text-white" : "text-brand-navy"
            )}
          >
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={cn(
                "p-6 rounded-lg",
                isDark ? "bg-white/10" : "bg-white border border-brand-gray-border shadow-card"
              )}
            >
              <div className="text-4xl md:text-5xl font-black text-brand-yellow mb-2 tracking-tight">
                {stat.value}
              </div>
              <div
                className={cn(
                  "text-lg font-bold mb-2",
                  isDark ? "text-white" : "text-brand-navy"
                )}
              >
                {stat.label}
              </div>
              {stat.description && (
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    isDark ? "text-gray-200" : "text-brand-text-muted"
                  )}
                >
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
