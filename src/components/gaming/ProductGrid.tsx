import { motion } from "framer-motion";
import { useState } from "react";
import { ProductCard, type Product } from "./ProductCard";
import laptopImg from "@/assets/product-laptop.jpg";
import phoneImg from "@/assets/product-phone.jpg";
import monitorImg from "@/assets/product-monitor.jpg";
import keyboardImg from "@/assets/product-keyboard.jpg";
import headsetImg from "@/assets/product-headset.jpg";
import gpuImg from "@/assets/product-gpu.jpg";

const ALL_PRODUCTS: Product[] = [
  {
    id: "1", name: "Lenovo IdeaPad Gaming 3", category: "Gaming Laptops",
    price: 1099, oldPrice: 1299, rating: 4.6, badge: "Hot Drop",
    image: laptopImg, specs: ["RTX 4060", "i7-13700H", "16GB"],
  },
  {
    id: "2", name: "Realme 7 Pro Gaming Edition", category: "Mobile Gaming",
    price: 349, rating: 4.4, image: phoneImg,
    specs: ["120Hz AMOLED", "SD 720G", "8GB"],
  },
  {
    id: "3", name: "UltraWide 34\" Curved QD-OLED", category: "Peripherals",
    price: 899, oldPrice: 1099, rating: 4.9, badge: "-18%",
    image: monitorImg, specs: ["175Hz", "1440p", "0.03ms"],
  },
  {
    id: "4", name: "NEXUS RTX 5090 Titan GPU", category: "PC Components",
    price: 2499, rating: 4.8, badge: "Flagship",
    image: gpuImg, specs: ["32GB GDDR7", "Ray AI", "450W"],
  },
  {
    id: "5", name: "Hex-Switch Pro Mechanical TKL", category: "Peripherals",
    price: 189, oldPrice: 229, rating: 4.7, image: keyboardImg,
    specs: ["Hot-Swap", "RGB PBT", "8K Poll"],
  },
  {
    id: "6", name: "Void Surround 7.1 Headset", category: "Peripherals",
    price: 149, rating: 4.5, badge: "New",
    image: headsetImg, specs: ["THX Spatial", "50mm", "Wireless"],
  },
  {
    id: "7", name: "ASUS ROG Strix G16 Rig", category: "Gaming Laptops",
    price: 1799, rating: 4.7, image: laptopImg,
    specs: ["RTX 4070", "i9-14900", "32GB"],
  },
  {
    id: "8", name: "BF2042-Ready Mobile Cooler", category: "Mobile Gaming",
    price: 59, oldPrice: 79, rating: 4.3, image: phoneImg,
    specs: ["-15°C", "RGB", "USB-C"],
  },
];

const FILTERS = ["All", "Gaming Laptops", "Mobile Gaming", "PC Components", "Peripherals"];

export function ProductGrid({ onAdd }: { onAdd: () => void }) {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => p.category === filter);

  return (
    <section className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="font-mono text-xs text-accent mb-2 tracking-[0.3em]">// FEATURED_INVENTORY</div>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display font-black text-4xl sm:text-5xl max-w-2xl">
              Mission-Ready <span className="neon-text-magenta">Gear</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-xs font-heading font-semibold uppercase tracking-widest hud-clip border transition-all ${
                    filter === f
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_var(--neon-cyan)]"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {visible.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
