import React from "react";

interface IconContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const IconContainer: React.FC<IconContainerProps> = ({ children, className = "" }) => (
  <div
    className={
      "relative " +
      "rounded-[22.5%] bg-gradient-to-br from-[#2C3E50] to-[#1B2631] " +
      "flex items-center justify-center shadow-2xl overflow-hidden " +
      className
    }
  >
    {children}
  </div>
);
