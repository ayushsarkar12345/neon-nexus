import { motion } from "framer-motion";
import { GlitchButton } from "./GlitchButton";
import { Radio } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl relative overflow-hidden hud-clip border border-primary/30 bg-surface/60 p-10 md:p-16"
      >
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-primary tracking-[0.3em] mb-4">
              <Radio className="h-3.5 w-3.5 animate-pulse" />
              TRANSMISSION // 04:17 AM
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl leading-tight mb-4">
              Join the <span className="neon-text-cyan">NEXUS</span> Syndicate.
            </h2>
            <p className="text-muted-foreground max-w-md">
              Early drops, operator-only discounts, and priority access to
              limited flagship silicon. No spam. No mercy.
            </p>
          </div>

          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="operator@nexus.net"
                className="flex-1 bg-background/80 border border-border hud-clip px-4 py-3.5 text-sm font-mono placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
              />
              <GlitchButton variant="accent">Infiltrate</GlitchButton>
            </form>
            <div className="mt-4 text-xs font-mono text-muted-foreground">
              <span className="text-primary">›</span> 47,382 operators subscribed — zero leaks.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
