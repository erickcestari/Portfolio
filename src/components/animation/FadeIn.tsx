import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn = ({ children, className }: FadeInProps) => {
  return (
    <div
      className={`opacity-0 animate-fadeIn ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
