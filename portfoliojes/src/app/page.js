"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSections from "./components/SkillsSection";
import ButtonGoUp from "./components/ButtonGoUp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <ButtonGoUp />
        <HeroSection />
        <SkillsSections />
        <AboutSection />
      </div>
    </main>
  );
}
