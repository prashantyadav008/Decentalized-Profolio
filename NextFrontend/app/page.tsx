/** @format */

import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { Achievements } from "@/components/home/achievements";
import ThreeWrapper from "@/components/home/ThreeWrapper";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* 3D Scene goes here */}
      <ThreeWrapper />

      <FeaturedProjects />
      <SkillsShowcase />
      <Achievements />
    </div>
  );
}
