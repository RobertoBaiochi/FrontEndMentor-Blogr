"use client";

import { Overpass } from "next/font/google";

import Designed from "@/components/Designed";
import Hero from "@/components/Hero";
import Infrastrucure from "@/components/Infrastructure";
import Tooling from "@/components/Tooling";

const overpass = Overpass({ weight: ["300", "600"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={overpass.className}>
      <Hero />
      <Designed />
      <Infrastrucure />
      <Tooling />
    </main>
  );
}
