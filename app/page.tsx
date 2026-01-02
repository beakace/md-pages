import About from "@/components/about";
import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";
import Intro from "@/components/intro";
import ProjectsSection from "@/app/sections/projects-section";
import Process from "@/components/experience";
import Services from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Services />
      <ProjectsSection />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
