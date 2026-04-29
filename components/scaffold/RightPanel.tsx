import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import { Project, ExperienceEntry } from "@/types";

export default function RightPanel({ projects, experience, longDescription }: { projects: Project[]; experience: ExperienceEntry[]; longDescription: string }) {
  return (
    <div>
      <section id="about" className="scroll-mt-24 mb-10">
        <About longDescription={longDescription} />
      </section>
      <section id="experience" className="scroll-mt-10 mb-10">
        <Experience experience={experience} />
      </section>
      <section id="projects" className="scroll-mt-10 mb-10">
        <Projects projects={projects} />
      </section>
    </div>
  );
}
