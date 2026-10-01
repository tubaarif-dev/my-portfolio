import { experience } from "@/lib/data";
import { Section } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-8 border-l border-stone-300 pl-8 dark:border-slate-800">
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_12px] shadow-rose-500 dark:bg-pink-500 dark:shadow-pink-500" />
            <p className="font-mono text-xs text-rose-600 dark:text-cyan-400">{e.period}</p>
            <h3 className="text-lg font-bold">{e.role}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{e.org}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
