"use client";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-8 md:mb-10 lg:mb-14 ${alignClass}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3 md:mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-6 md:w-8 bg-accent" />
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
          <span className="h-px w-6 md:w-8 bg-accent" />
        </div>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2 md:mt-3 text-sm md:text-base lg:text-lg text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
