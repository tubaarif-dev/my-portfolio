import { skills } from "@/lib/data";
import { Badge, Section, card } from "./ui";

export default function Skills() {
  return (
    <Section id="skills" title="Tech Stack">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.title} className={card}>
            <h3 className="mb-4 font-bold">{s.title}</h3>
            <div className="flex flex-wrap gap-2">{s.items.map((i) => <Badge key={i}>{i}</Badge>)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
