export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-4 border-l-4 border-slate-500 pl-2">
        <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}