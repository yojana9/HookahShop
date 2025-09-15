import React, { useMemo } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "deep";
  text: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "deep",
  text,
  onClick,
  size = "md",
  className = "",
  type = "button",
  showArrow,
}) => {
  const classes = useMemo(() => {
    const base =
      "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-colors ring-1 ring-black/5 shadow-md";
    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-6 text-base",
    } as const;
    const styles = {
      primary:
        "bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white",
      secondary:
        "bg-white border border-purple-700 text-purple-700 hover:bg-purple-50",
      deep:
        "bg-[#3B007B] hover:bg-[#2A005C] text-white", 
    } as const;
    return `${base} ${sizes[size]} ${styles[variant]} ${className}`.trim();
  }, [variant, size, className]);

  const shouldShowArrow =
    typeof showArrow === "boolean" ? showArrow : variant === "primary";

  return (
    <button type={type} onClick={onClick} className={classes}>
      <span>{text}</span>
      {shouldShowArrow && <span className="ml-2 text-base leading-none">→</span>}
    </button>
  );
};

export default Button;
