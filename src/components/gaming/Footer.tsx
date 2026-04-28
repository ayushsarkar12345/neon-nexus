import { Zap, Twitch, Youtube, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-primary" strokeWidth={2.5} />
            <span className="font-display font-black text-lg tracking-widest neon-text-cyan">
              NEXUS//
            </span>
          </a>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed">
            Tactical hardware for operators who refuse to lose a frame.
          </p>
          <div className="flex gap-2 mt-5">
            {[Twitch, Youtube, Twitter, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 flex items-center justify-center border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_15px_var(--neon-cyan)] transition-all hud-clip"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { h: "Shop", l: ["Laptops", "Components", "Peripherals", "Mobile", "Deals"] },
          { h: "Support", l: ["Order Status", "Warranty", "RMA Portal", "Contact", "Build Guides"] },
          { h: "Company", l: ["About", "Careers", "Press", "Affiliates", "Esports"] },
        ].map((col) => (
          <div key={col.h}>
            <div className="font-display font-bold text-sm uppercase tracking-widest neon-text-cyan mb-4">
              {col.h}
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {col.l.map((x) => (
                <li key={x}>
                  <a href="#" className="hover:text-primary transition-colors">{x}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <div>© 2026 NEXUS Syndicate // All rigs reserved.</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEMS NOMINAL
            </span>
            <span>v4.0.7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
