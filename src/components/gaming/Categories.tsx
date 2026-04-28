import { motion } from "framer-motion";
import { Smartphone, Laptop, Cpu, Keyboard } from "lucide-react";

const cats = [
  { icon: Smartphone, name: "Mobile Gaming", tag: "HANDHELD OPS", count: 42, color: "var(--neon-magenta)" },
  { icon: Laptop, name: "Gaming Laptops", tag: "MOBILE RIGS", count: 87, color: "var(--neon-cyan)" },
  { icon: Cpu, name: "PC Components", tag: "CORE HARDWARE", count: 213, color: "var(--neon-magenta)" },
  { icon: Keyboard, name: "Peripherals", tag: "COMBAT GEAR", count: 156, color: "var(--neon-cyan)" },
];

export function Categories() {
  return (
    <section className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <div className="font-mono text-xs text-primary mb-2 tracking-[0.3em]">// SELECT_LOADOUT</div>
            <h2 className="font-display font-black text-4xl sm:text-5xl">
              Choose Your <span className="neon-text-cyan">Arsenal</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm font-mono text-sm">
            Four categories. Thousands of battle-tested SKUs. Pick your class.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cats.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.name}
                href="#"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative hud-clip bg-surface/70 border border-border p-6 md:p-8 overflow-hidden transition-colors hover:border-primary/60"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(ellipse at center, ${c.color} 0%, transparent 60%)`,
                    opacity: 0,
                    mixBlendMode: "screen",
                  }}
                />
                <div
                  className="relative mb-6 h-14 w-14 flex items-center justify-center border"
                  style={{
                    borderColor: c.color,
                    boxShadow: `0 0 20px color-mix(in oklab, ${c.color} 40%, transparent)`,
                    clipPath: "polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: c.color }} />
                </div>

                <div className="font-mono text-[10px] tracking-[0.25em] mb-1" style={{ color: c.color }}>
                  {c.tag}
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 group-hover:translate-x-1 transition-transform">
                  {c.name}
                </h3>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>{c.count} items</span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
