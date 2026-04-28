import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/gaming/Navbar";
import { Hero } from "@/components/gaming/Hero";
import { Categories } from "@/components/gaming/Categories";
import { ProductGrid } from "@/components/gaming/ProductGrid";
import { CtaBanner } from "@/components/gaming/CtaBanner";
import { Footer } from "@/components/gaming/Footer";
import { LoadingOverlay } from "@/components/gaming/LoadingOverlay";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NEXUS // Tactical Gear for Hardcore Gamers" },
      {
        name: "description",
        content:
          "Premium gaming laptops, PC components, mechanical keyboards, and mobile gaming gear. Engineered for operators who refuse to lose a frame.",
      },
      { property: "og:title", content: "NEXUS // Tactical Gear for Hardcore Gamers" },
      {
        property: "og:description",
        content: "Shop flagship RTX rigs, 360Hz monitors, and pro peripherals. Zero latency. Zero mercy.",
      },
    ],
  }),
});

function Index() {
  const [cart, setCart] = useState(0);
  return (
    <>
      <LoadingOverlay />
      <div className="relative min-h-screen">
        <Navbar cartCount={cart} />
        <main>
          <Hero />
          <Categories />
          <ProductGrid onAdd={() => setCart((c) => c + 1)} />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </>
  );
}
