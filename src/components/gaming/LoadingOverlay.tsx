import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const step = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(step);
          setTimeout(() => setVisible(false), 350);
          return 100;
        }
        return p + Math.random() * 12 + 5;
      });
    }, 90);
    return () => clearInterval(step);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="cyber-grid absolute inset-0 opacity-30" />

          {/* Crosshair */}
          <div className="relative flex flex-col items-center gap-10">
            <div className="relative h-28 w-28">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ boxShadow: "0 0 30px var(--neon-cyan)" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border border-accent/60"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[2px] w-16 bg-primary" style={{ boxShadow: "0 0 8px var(--neon-cyan)" }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[2px] h-16 bg-primary" style={{ boxShadow: "0 0 8px var(--neon-cyan)" }} />
              </div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <div className="h-2 w-2 rounded-full bg-accent" style={{ boxShadow: "0 0 15px var(--neon-magenta)" }} />
              </motion.div>
            </div>

            {/* Health bar */}
            <div className="w-72">
              <div className="flex justify-between font-mono text-[10px] tracking-[0.25em] mb-2">
                <span className="neon-text-cyan">// BOOTING NEXUS</span>
                <span className="text-primary">{Math.min(100, Math.floor(progress))}%</span>
              </div>
              <div className="h-2 border border-primary/40 p-[2px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                  style={{
                    width: `${Math.min(100, progress)}%`,
                    boxShadow: "0 0 12px var(--neon-cyan), 0 0 20px var(--neon-magenta)",
                  }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <div className="mt-3 font-mono text-[10px] text-muted-foreground tracking-widest">
                › LOADING COMBAT MODULES...
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
