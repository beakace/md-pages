import Realizacje from "@/components/realizacje";
import { getProjects } from "@/lib/data";

export default async function ProjectsSection() {
  const projects = await getProjects();
  return <Realizacje projects={projects} />;
}
