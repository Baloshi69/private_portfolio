import React from "react";
import { cn } from "@/lib/utils";
import { useIsNasirDomain } from "@/hooks/useContactVisibility";

interface BrandNameProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showIcon?: boolean;
  label?: string;
  showText?: boolean;
}

const BrandName: React.FC<BrandNameProps> = ({
  className,
  iconClassName,
  textClassName,
  showIcon = true,
  label = "ALbaloshi.Tech",
  showText = true,
}) => {
  const isNasirDomain = useIsNasirDomain();
  const effectiveLabel = isNasirDomain ? "Nasir Nawaz" : label;

  const renderLabel = () => {
    const dotIndex = effectiveLabel.indexOf(".");

    if (dotIndex === -1) {
      return effectiveLabel;
    }

    const before = effectiveLabel.slice(0, dotIndex);
    const after = effectiveLabel.slice(dotIndex + 1);

    return (
      <>
        {before}
        <span className="text-theme-accent font-bold">.</span>
        {after}
      </>
    );
  };

  return (
    <span
      className={cn("inline-flex items-center", (showIcon && showText) && "gap-3", className)}
      aria-label={effectiveLabel}
    >
      {showIcon && (
        <img
          src="/albaloshi-logo.svg"
          alt=""
          aria-hidden="true"
          className={cn("h-9 w-auto shrink-0", iconClassName)}
        />
      )}
      {showText && (
        <span className={cn("font-logo text-lg leading-none text-slate-900 font-semibold", textClassName)}>
          {renderLabel()}
        </span>
      )}
    </span>
  );
};

export default BrandName;
