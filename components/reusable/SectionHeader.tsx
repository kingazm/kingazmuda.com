export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-4">
        <h2 className="text-2xl font-bold text-white"><span className="font-mono text-[#4F8EF7] mr-2">//</span>{title}</h2>
    </div>
  );
}