"use client";

import { useEffect, useState } from "react";
import NavLink from "../reusable/NavLink";

const sections = ["about", "experience", "projects"];

export default function Nav() {
    const [active, setActive] = useState("about");

    useEffect(() => {
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(el);
            return observer;
        });

        return () => observers.forEach(o => o?.disconnect());
    }, []);

    return (
        <nav className="hidden sm:block py-2 mb-6 text-xl text-slate-400">
            <ul>
                {sections.map((id) => (
                    <li key={id} className="mb-1">
                        <NavLink
                            href={id}
                            display={id.charAt(0).toUpperCase() + id.slice(1)}
                            isActive={active === id}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
