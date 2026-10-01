import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import { WhatsAppButton } from "@/components/ui";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t border-stone-200/60 py-10 text-center text-sm text-slate-500 dark:border-slate-800">
        <div className="flex flex-col items-center gap-4">
          <a href={`mailto:${profile.email}`} className="font-medium text-rose-600 hover:underline dark:text-cyan-400">{profile.email}</a>
          <WhatsAppButton label="Chat on WhatsApp" />
          <p>© {new Date().getFullYear()} Tuba Arif. Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
