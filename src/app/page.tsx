import { Hero } from "@/components/home/Hero";
import { SkillsBento } from "@/components/home/SkillsBento";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsBento />
      <FeaturedProjects />
    </>
  );
}
