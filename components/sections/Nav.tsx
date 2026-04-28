import NavLink from "../reusable/NavLink";

export default function Nav() {
  return (
    <nav className="hidden sm:block py-2 mb-6 text-xl text-slate-400">
      <ul>
        <li className="mb-1"><NavLink href="about" display="About" /></li>
        <li className="mb-1"><NavLink href="experience" display="Experience" /></li>
        <li className="mb-1"><NavLink href="projects" display="Projects" /></li>
      </ul>
    </nav>
  );
}