import { certs, education } from "@/lib/data";
import { Section, btn, card } from "./ui";

export default function Credentials() {
  return (
    <Section id="credentials" title="Certifications & Education">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certs.map((c) => (
          <div key={c.name} className={`${card} flex flex-col`}>
            <h3 className="font-semibold">{c.name}</h3>
            <p className="mt-1 break-all font-mono text-xs text-slate-500 dark:text-slate-400">
              {c.date}
              {c.id ? ` | ID: ${c.id}` : ""}
            </p>
            {c.verify && (
              <div className="mt-4">
                <a href={c.verify} target="_blank" rel="noopener noreferrer" className={`${btn} border border-stone-300 !px-4 !py-2 text-xs dark:border-slate-700 dark:hover:border-pink-500/60`}>
                  Verify Credential ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <h3 className="mb-4 mt-12 text-xl font-bold">Education</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} className={card}>
            <p className="font-semibold">{e.title}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{e.school} | {e.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
