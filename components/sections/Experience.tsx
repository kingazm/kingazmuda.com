import ExperienceCard from "../reusable/ExperienceCard";
import SectionHeader from "../reusable/SectionHeader";
import { ExperienceEntry } from "@/types";

export default function Experience({ experience }: { experience: ExperienceEntry[] }) {
  return (
    <div>
      <SectionHeader title="Experience" />
      {experience.map((job, index) => (
        <div key={index}>
          <ExperienceCard {...job} />
        </div>
      ))}
    </div>
  );
}
