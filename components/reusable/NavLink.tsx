"use client";

import { useState } from "react";

export default function NavLink({ href, display, isActive }: { href: string; display: string; isActive: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={`#${href}`}
            className="font-mono flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className={`text-[#4F8EF7] transition-opacity duration-150 ${isActive || hovered ? "opacity-100" : "opacity-0"}`}>
                &gt;
            </span>
            <span className={isActive ? "text-white" : ""}>{display}</span>
        </a>
    );
}
