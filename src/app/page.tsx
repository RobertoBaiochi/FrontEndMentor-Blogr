"use client";
import Designed from "@/components/Designed/Designed";
import Hero from "@/components/Hero/Hero";
import Infrastrucure from '@/components/Infrastructure/Infrastructure';
import Tooling from '@/components/Tooling/Tooling';

export default function Home() {
  return (
    <main>
      <Hero />
      <Designed />
      <Infrastrucure />
      <Tooling />
    </main>
  );
}
