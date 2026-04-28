import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Cpu } from "lucide-react";
import heroImg from "@/assets/hero-gaming.jpg";
import { GlitchButton } from "./GlitchButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Parallax background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${y * 0.3}px)` }}
      >
        <img
          src={heroImg}
          alt="Flagship gaming hardware showcase"
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 -z-10" />

      {/* Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              boxShadow: "0 0 8px var(--neon-cyan)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scan"
          style={{ animation: "scan 6s linear infinite" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-primary/40 hud-clip bg-primary/10 text-primary text-xs font-heading font-semibold uppercase tracking-[0.2em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            System Online — New Drop Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            <span className="block text-foreground">ENGINEER</span>
            <span className="block neon-text-cyan">YOUR</span>
            <span className="block neon-text-magenta">DOMINANCE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Weapons-grade rigs. Bleeding-edge silicon. Zero latency. Built for
            operators who treat <span className="text-primary">frame rate</span> as a religion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <GlitchButton variant="primary">
              Shop the Drop <ChevronRight className="h-5 w-5" />
            </GlitchButton>
            <button className="group inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors">
              <Cpu className="h-4 w-4" />
              Build Your Rig
              <span className="h-px w-10 bg-current group-hover:w-16 transition-all" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md"
          >
            {[
              { v: "360Hz", l: "Max Refresh" },
              { v: "0.5ms", l: "Response" },
              { v: "24/7", l: "Ops Support" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-primary/50 pl-3">
                <div className="font-display font-bold text-xl sm:text-2xl text-foreground">{s.v}</div>
                <div className="text-[10px] sm:text-xs font-heading uppercase tracking-widest text-muted-foreground mt-0.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating HUD card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div
            className="relative glass hud-clip p-6 neon-border animate-float"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-primary">FLAGSHIP.PROD_01</span>
              <span className="text-xs font-mono text-accent">[IN STOCK]</span>
            </div>
            <div className="font-display font-black text-3xl mb-1">RTX 5090 TITAN</div>
            <div className="text-sm text-muted-foreground font-mono mb-5">Next-gen ray-traced annihilation.</div>

            <div className="space-y-2.5 text-xs font-mono">
              {[
                ["VRAM", "32GB GDDR7", 95],
                ["CLOCK", "2.95GHz", 88],
                ["RAY CORES", "NEXUS AI", 100],
              ].map(([k, v, p]) => (
                <div key={k as string}>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="text-primary">{v}</span>
                  </div>
                  <div className="h-1 bg-surface overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${p}%`, boxShadow: "0 0 10px var(--neon-cyan)" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-border flex items-end justify-between">
              <div>
                <div className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">Price</div>
                <div className="neon-text-magenta font-display font-black text-2xl">$2,499</div>
              </div>
              <div className="text-[10px] font-mono text-primary/80">
                -15% LAUNCH<br/>EXPIRES IN 2D:14H
              </div>
            </div>
          </div>

          {/* Floating accents */}
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
