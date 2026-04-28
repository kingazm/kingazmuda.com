import Hero from "../sections/Hero";
import Socials from "../reusable/Socials";
import Nav from "../sections/Nav";
import { Personal } from "@/types";

export default function LeftPanel({ personal }: { personal: Personal }) {
  return (
    <div>
        <Hero
            name={personal.name}
            title={personal.title}
            shortDescription={personal.shortDescription}
        />
        <Nav/>
        <Socials
            links={personal.socials}
        />
    </div>
  );
}
