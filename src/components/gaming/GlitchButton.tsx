import { ButtonHTMLAttributes, useState } from "react";
import { motion } from "framer-motion";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "ghost";
}

export function GlitchButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}: Props) {
  const [glitching, setGlitching] = useState(false);

  const base =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold uppercase tracking-widest text-sm hud-clip transition-all select-none";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-[0_0_30px_var(--neon-cyan)] hover:brightness-110",
    accent:
      "bg-accent text-accent-foreground hover:shadow-[0_0_30px_var(--neon-magenta)] hover:brightness-110",
    ghost:
      "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={(e) => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 300);
        onClick?.(e);
      }}
      className={`${base} ${variants[variant]} ${className}`}
      style={glitching ? { animation: "glitch 0.3s ease-in-out" } : undefined}
      {...(props as object)}
    >
      {glitching && (
        <>
          <span
            aria-hidden
            className="absolute inset-0 hud-clip bg-accent mix-blend-screen opacity-70"
            style={{ transform: "translate(3px, 0)" }}
          />
          <span
            aria-hidden
            className="absolute inset-0 hud-clip bg-primary mix-blend-screen opacity-70"
            style={{ transform: "translate(-3px, 0)" }}
          />
        </>
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
