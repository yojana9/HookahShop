
import { useMemo } from "react";

type HeaderProps = {
  text: string;
  size?: "medium" | "small";
  className?: string;
};

export default function Header({
  text,
  size = "medium",
  className = "",
}: HeaderProps) {
  
  const classes = useMemo(() => {
    const styles = {
      medium: "text-4xl font-extrabold tracking-wide",
      small: "text-xl font-semibold",
    };
    return `${styles[size]} ${className}`.trim();
  }, [size, className]);

  return <h2 className={classes}>{text}</h2>;
}
