import React from "react";

/**
 * TS-Λ3 // AUTHORITATIVE ICON SUBSTRATE
 * CLASSIFICATION: MATERIAL SYMBOLS ENGINE
 * AUTHORITY: hello@butterdime.com
 */

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  variant?: "outlined" | "rounded" | "sharp";
  fill?: 0 | 1;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  size = 24,
  variant = "outlined",
  fill = 0,
}) => {
  const baseClass =
    variant === "outlined"
      ? "material-symbols-outlined"
      : variant === "rounded"
      ? "material-symbols-rounded"
      : "material-symbols-sharp";

  return (
    <span
      className={`${baseClass} ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' 400, 'GRAD' 0, 'opsz' 48`
      }}
    >
      {name}
    </span>
  );
};
