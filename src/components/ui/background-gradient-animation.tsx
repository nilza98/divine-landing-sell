import React from "react";

export const BackgroundGradientAnimation = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={`relative h-screen flex items-center justify-center overflow-hidden ${containerClassName || ''}`}>
      <div className={`absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 ${className || ''}`} />
      {children}
    </div>
  );
};
