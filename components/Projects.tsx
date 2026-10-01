import { clientSites, projects } from "@/lib/data";
import { Badge, Section, btn, card } from "./ui";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className={`${card} flex flex-col`}>
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <Badge key={s}>{s}</Badge>)}</div>
            {(p.live || p.code) && (
              <div className="mt-5 flex gap-3">
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className={`${btn} bg-rose-600 text-white dark:bg-pink-500`}>Live Demo</a>}
                {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className={`${btn} border border-stone-300 dark:border-slate-700 dark:hover:border-pink-500/60`}>GitHub Code</a>}
              </div>
            )}
          </article>
        ))}
      </div>

      <h3 className="mb-4 mt-12 text-xl font-bold">WordPress Client Showcase</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clientSites.map((c) => (
          <a key={c.domain} href={`https://${c.domain}`} target="_blank" rel="noopener noreferrer" className={`${card} block`}>
            <p className="font-mono text-sm font-bold text-rose-600 dark:text-cyan-400">{c.domain} ↗</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
