import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { GlitchButton } from "./GlitchButton";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  badge?: string;
  image: string;
  specs: string[];
}

export function ProductCard({ product, index, onAdd }: { product: Product; index: number; onAdd: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative hud-clip bg-surface/70 border border-border overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_10px_40px_-10px_var(--neon-cyan),0_0_30px_-10px_var(--neon-magenta)]"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

        {/* Scan line */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden pointer-events-none">
          <div
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
            style={{ animation: "scan 2s linear infinite" }}
          />
        </div>

        {product.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-accent-foreground text-[10px] font-heading font-bold uppercase tracking-widest hud-clip shadow-[0_0_15px_var(--neon-magenta)]">
            {product.badge}
          </div>
        )}

        <button className="absolute top-3 right-3 h-9 w-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all hover:text-primary">
          <Eye className="h-4 w-4" />
        </button>

        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {product.specs.map((s) => (
            <span
              key={s}
              className="text-[10px] font-mono px-2 py-0.5 bg-background/70 border border-primary/30 text-primary backdrop-blur"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="text-[10px] font-mono text-primary tracking-[0.25em] mb-1">
          // {product.category.toUpperCase()}
        </div>
        <h3 className="font-display font-bold text-lg leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-xs ${i < Math.round(product.rating) ? "text-primary" : "text-muted/50"}`}
              style={i < Math.round(product.rating) ? { textShadow: "0 0 6px var(--neon-cyan)" } : undefined}
            >
              ▲
            </span>
          ))}
          <span className="text-xs font-mono text-muted-foreground ml-1">{product.rating.toFixed(1)}</span>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            {product.oldPrice && (
              <div className="text-xs text-muted-foreground line-through font-mono">
                ${product.oldPrice.toLocaleString()}
              </div>
            )}
            <div className="font-display font-black text-2xl neon-text-magenta">
              ${product.price.toLocaleString()}
            </div>
          </div>
          <GlitchButton variant="primary" onClick={onAdd} className="!px-4 !py-2.5 !text-xs">
            <ShoppingCart className="h-4 w-4" />
            Add
          </GlitchButton>
        </div>
      </div>

      {/* Corner accents */}
      <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.article>
  );
}
