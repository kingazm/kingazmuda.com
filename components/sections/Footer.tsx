export default function Footer({ name }: { name: string }) {
  return (
    <div className="py-2 mb-3 mt-1 text-center text-m text-slate-500">
      <p>{name} © 2026 All rights reserved.</p>
    </div>
  );
}