export default function NavLink({ href, display }: { href: string; display: string }) {
    return (
        <a href={`#${href}`} className="text-slate-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-slate-300 after:transition-all hover:after:w-full">
            {display}
        </a>
    );
}