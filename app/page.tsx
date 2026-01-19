import OMnie from "@/components/o-mnie";
import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";
import Start from "@/components/start";
import ProjectsSection from "@/app/sections/projects-section";
import Proces from "@/components/proces";
import Uslugi from "@/components/uslugi";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Start />
      <SectionDivider />
      <ProjectsSection />
      <Uslugi />
      <Proces />
      <OMnie />
      <Contact />
    </main>
  );
}
