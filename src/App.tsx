
import ProjectCard from "./components/Projects/ProjectCard"
import { PROJECTS as projects } from "./Data/Projects"
import { Skills as skills } from "./Data/Skills"


const App = () => {

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm tracking-tight text-primary">
            <span className="opacity-50">&lt;</span>fullstack-dev
            <span className="opacity-50"> /&gt;</span>
          </a>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-text-dim">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] grid-lines" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono text-primary mb-8 uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
              Engineering digital products from{" "}
              <span className="text-primary">logic to interface.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-dim leading-relaxed mb-10 max-w-2xl">
              I&apos;m a software engineer focused on building modern, scalable, user-centered
              web applications with React, TypeScript, Node.js, Express and MongoDB —
              from idea to deployment.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-border text-sm font-medium rounded-sm hover:bg-surface transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono text-primary uppercase tracking-[0.25em]">
              About
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-text-dim">
            <p>
              I&apos;m a full-stack developer working across the React ecosystem and
              Node.js backends. I&apos;ve built real-world products including freelancing
              platforms, eCommerce systems, dashboards and content-based web apps.
            </p>
            <p>
              My focus is on shipping things that are modern, scalable and genuinely
              useful — clean architecture, sensible data models, and interfaces that
              respect the person using them.
            </p>
            <p className="text-foreground">
              I&apos;m especially interested in Software Engineering, Frontend and
              Full-Stack roles where I can contribute to meaningful products and keep
              growing through impactful work.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="flex justify-between items-end mb-14">
          <div>
            <h2 className="text-xs font-mono text-primary uppercase tracking-[0.25em] mb-4">
              Selected Works
            </h2>
            <p className="text-3xl md:text-4xl font-medium tracking-tight">
              Real-world applications.
            </p>
          </div>
          <span className="hidden md:block font-mono text-xs text-text-dim">
            [01 — 0{projects.length}]
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((p, index) => (
            <ProjectCard project={p} key={index} />
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="bg-surface py-24 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-xs font-mono text-primary uppercase tracking-[0.25em] mb-4">
              Technical Stack
            </h2>
            <p className="text-3xl md:text-4xl font-medium tracking-tight max-w-2xl">
              Tools I reach for to ship complete, practical solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 md:gap-16">
            {Object.entries(skills).map(([heading, items]) => (
              <div key={heading}>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
                  {heading}
                </h3>
                <ul className="space-y-3 text-text-dim text-sm">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="size-1 bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <h2 className="text-xs font-mono text-primary uppercase tracking-[0.25em] mb-6">
              Contact
            </h2>
            <p className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
              Let&apos;s build something <span className="text-primary">durable.</span>
            </p>
          </div>
          <div className="md:col-span-5 space-y-6">
            <a
              href="mailto:kamelmahersh@gmail.com"
              className="flex justify-between items-center border-b border-border pb-4 text-lg font-medium hover:text-primary transition-colors group"
            >
              kamelmahersh@gmail.com
              <span className="text-text-dim group-hover:translate-x-1 group-hover:text-primary transition-all">
                →
              </span>
            </a>
            <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-text-dim">
              <a href="https://github.com/kamelmaher" className="hover:text-primary transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/kamelmaher/" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://drive.google.com/file/d/1lqOPd61vGYJoksbsGSkSymqu3-KzFatM/view?usp=sharing" className="hover:text-primary transition-colors">CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-text-dim font-mono tracking-tight">
            © {new Date().getFullYear()} / DESIGNED FOR PERFORMANCE
          </div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-dim">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
