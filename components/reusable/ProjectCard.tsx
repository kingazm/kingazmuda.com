import { Project } from "@/types";

export default function ProjectCard({ name, description, link, stack, image }: Project) {
    return (
        <div className="mb-6 rounded-lg p-4 bg-[#1A2035] transition-transform hover:scale-102 flex gap-4">
            <div className="flex-1">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-slate-400">{description}</p>
                {stack && stack.length > 0 && (
                    <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-2 mb-2">
                        {stack.map((tech, idx) => (
                            <div key={idx} className="w-8 h-8">
                                <img src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`} alt={tech} />
                            </div>
                        ))}
                    </div>
                )}
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#4F8EF7] hover:underline transition-colors">
                    View Project →
                </a>
            </div>
            {image && (
                <div className="w-32 flex-shrink-0 relative overflow-hidden rounded-md">
                    <img
                        src={image}
                        alt={`${name} thumbnail`}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    );
}
