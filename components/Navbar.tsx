import { nav, profile } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/60 bg-[#FAF8F5]/70 backdrop-blur-md dark:border-slate-800 dark:bg-[#0B132B]/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className="shrink-0 text-lg font-extrabold tracking-wide">
          {profile.name.toUpperCase()}
          <span className="text-rose-500 dark:text-pink-500">.</span>
        </a>
        <nav className="flex gap-4 overflow-x-auto text-xs font-medium sm:gap-6 sm:text-sm">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="text-slate-600 transition hover:text-rose-500 dark:text-pink-500 dark:text-slate-300">
              {n}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
