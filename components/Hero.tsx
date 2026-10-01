import { profile } from "@/lib/data";
import { btn } from "./ui";

const outline = `${btn} border border-stone-300 dark:border-slate-700 dark:hover:border-pink-500/60`;

export default function Hero() {
  const social = [
    ["LinkedIn", profile.linkedin],
    ["GitHub", profile.github],
    ["Upwork", profile.upwork],
    ["Email", `mailto:${profile.email}`],
  ];
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-16 px-6 pb-16 pt-24">
      <div className="pointer-events-none absolute -top-10 left-1/3 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl dark:bg-pink-500/20" />
      <span className="relative inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 font-mono text-xs text-indigo-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
        {profile.location}
      </span>
      <h1 className="relative mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl">{profile.name}</h1>
      <p className="relative mt-4 text-base font-semibold sm:text-lg lg:whitespace-nowrap lg:text-xl text-rose-600 dark:text-cyan-400 sm:text-2xl">{profile.title}</p>
      <p className="relative mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{profile.tagline}</p>
      <div className="relative mt-8 flex flex-wrap gap-3">
        <a href="#projects" className={`${btn} bg-rose-600 text-white shadow-lg shadow-rose-500/30 dark:bg-pink-500 dark:shadow-pink-500/30`}>View Projects</a>
        <a href="#contact" className={outline}>Contact Me</a>
      </div>
      <div className="relative mt-3 flex flex-wrap gap-3">
        {social.map(([label, href]) => {
          const external = href.startsWith("http");
          return (
            <a key={label} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={outline}>
              {label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
