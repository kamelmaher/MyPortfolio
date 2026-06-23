type Project = {
    demoLink: string,
    image: string,
    title: string,
    desc: string,
    createdAt: string,
    gitHubLink: string
    skills: string[]
}
const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <article className="group">
            <div className="relative w-full aspect-[4/3] bg-surface outline outline-1 -outline-offset-1 outline-white/5 rounded-sm mb-6 overflow-hidden group-hover:outline-primary/40 transition-all">
                <a href={project.demoLink} target="_blank">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="size-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                    />
                </a>
            </div>
            <div className="flex justify-between items-start gap-6">
                <div>
                    <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                    <p className="text-sm text-text-dim leading-relaxed max-w-md">
                        {project.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.skills.map((s) => (
                            <span
                                key={s}
                                className="text-[10px] font-mono uppercase tracking-wider text-text-dim border border-border px-2 py-0.5 rounded-xs"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-primary font-mono text-xs shrink-0">{project.createdAt}</div>
            </div>
        </article>
    )
}

export default ProjectCard
