"use client";
import { useState } from "react";
import { profile } from "@/lib/data";
import { Section, WhatsAppButton, btn, card } from "./ui";

const input =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30 dark:focus:border-pink-500 dark:border-slate-800 dark:bg-slate-900/60";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\nReply to: ${f.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-5 md:grid-cols-2">
        <div className={card}>
          <h3 className="mb-3 font-bold">Let&apos;s work together</h3>
          <p className="text-sm">
            <a className="text-rose-600 hover:underline dark:text-cyan-400" href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="mt-4"><WhatsAppButton label="Discuss a Project" /></div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[["LinkedIn", profile.linkedin], ["GitHub", profile.github], ["Upwork", profile.upwork]].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" className={`${btn} border border-stone-300 dark:border-slate-700 dark:hover:border-pink-500/60`}>{l}</a>
            ))}
          </div>
        </div>
        <form onSubmit={submit} className={`${card} space-y-3`}>
          <input required placeholder="Your name" value={f.name} onChange={set("name")} className={input} />
          <input required type="email" placeholder="Your email" value={f.email} onChange={set("email")} className={input} />
          <textarea required rows={4} placeholder="Your message" value={f.message} onChange={set("message")} className={input} />
          <button type="submit" className={`${btn} bg-rose-600 text-white shadow-lg shadow-rose-500/30 dark:bg-pink-500 dark:shadow-pink-500/30`}>Send Message</button>
        </form>
      </div>
    </Section>
  );
}
