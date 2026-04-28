import { SocialLink } from "@/types";

export default function Socials({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex space-x-4 mt-16">
      {links.map((link, idx) => (
        <div key={idx} className="w-8 h-8">
            <a href={link.url}>
                <img 
                    src={`https://skillicons.dev/icons?i=${link.platform.toLowerCase()}`} 
                    alt={link.url}
                />
            </a>
        </div>
      ))}
    </div>
  );
}
