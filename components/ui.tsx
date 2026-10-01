import { profile } from "@/lib/data";

export const card =
  "rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:backdrop-blur-md dark:shadow-none dark:hover:border-pink-500/50 dark:hover:shadow-pink-500/10";

export const btn =
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:scale-105";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 font-mono text-xs text-indigo-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
      {children}
    </span>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight">
        {title}
        <span className="text-rose-500 dark:text-pink-500">.</span>
      </h2>
      {children}
    </section>
  );
}

export function WhatsAppButton({ label = "Discuss on WhatsApp" }: { label?: string }) {
  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`${btn} bg-[#25D366] text-white shadow-lg shadow-green-500/30`}
    >
      {label}
    </a>
  );
}
