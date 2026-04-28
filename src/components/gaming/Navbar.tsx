import { useEffect, useState } from "react";
import { Search, ShoppingCart, User, Menu, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ cartCount }: { cartCount: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (cartCount === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 400);
    return () => clearTimeout(t);
  }, [cartCount]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center gap-4 md:gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="relative">
            <Zap className="h-7 w-7 text-primary transition-transform group-hover:scale-110" strokeWidth={2.5} />
            <div className="absolute inset-0 blur-md bg-primary/60 -z-10" />
          </div>
          <span className="font-display font-black text-xl tracking-widest neon-text-cyan">
            NEXUS<span className="neon-text-magenta">//</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-heading font-semibold uppercase tracking-wider">
          {["Laptops", "Mobile", "Components", "Peripherals", "Deals"].map((l) => (
            <a
              key={l}
              href="#"
              className="relative text-foreground/80 hover:text-primary transition-colors"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Search */}
        <div className="flex-1 max-w-md ml-auto hidden md:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search the arsenal..."
              className="w-full bg-surface/60 border border-border hud-clip pl-10 pr-4 py-2.5 text-sm font-mono placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:bg-surface focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3 ml-auto md:ml-0">
          <button className="p-2 rounded-md hover:bg-surface hover:text-primary transition-colors">
            <User className="h-5 w-5" />
          </button>

          <motion.button
            animate={bump ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.4 }}
            className="relative p-2 rounded-md hover:bg-surface hover:text-primary transition-colors group"
          >
            <ShoppingCart className="h-5 w-5" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center shadow-[0_0_10px_var(--neon-magenta)]"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <button className="lg:hidden p-2 rounded-md hover:bg-surface">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
