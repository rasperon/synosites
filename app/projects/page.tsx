import { ProjectsHeader } from "@/components/projects/projects-header";
import { ProjectsList } from "@/components/projects/projects-list";

export default function ProjectsPage() {
  return (
    <div className="container py-8">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
}