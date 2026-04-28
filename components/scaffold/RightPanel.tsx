import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import { Project, ExperienceEntry } from "@/types";

export default function RightPanel({ projects, experience, longDescription }: { projects: Project[]; experience: ExperienceEntry[]; longDescription: string }) {
  return (
    <div>
      <section id="about" className="mb-12">
        <About longDescription={longDescription} />
      </section>
      <section id="experience" className="mb-12">
        <Experience experience={experience} />
      </section>
      <section id="projects" className="mb-12">
        <Projects projects={projects} />
      </section>
    </div>
  );
}
