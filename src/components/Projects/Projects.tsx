import { Stack } from "@mui/material"
import Section from "../Section"
import ProjectCard from "./ProjectCard"
import { PROJECTS } from "../../Data/Projects"


const Projects = () => {
    return (
        <Section
            titleText="Browse My Last"
            title="Projects"
        >
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
            >
                {
                    PROJECTS.map(project => <ProjectCard key={project.img} project={project} />)
                }
            </Stack>
        </Section>
    )
}

export default Projects
