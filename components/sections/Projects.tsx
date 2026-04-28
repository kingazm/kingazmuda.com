import ProjectCard from "../reusable/ProjectCard";
import SectionHeader from "../reusable/SectionHeader";
import { Project } from "@/types";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <SectionHeader title="Projects" />
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}
