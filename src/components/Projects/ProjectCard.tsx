import { Box, Stack, Typography } from "@mui/material"
import MyButton from "../MyButton"
import { Project } from "../../types/Project"
import Animated from "../Animated"
type ProjectCardProps = {
    project: Project
}
const ProjectCard = ({ project }: ProjectCardProps) => {
    const { title: projectTitle, img, projectDesc, gitHubLink, liveDemoLink } = project
    return (
        <Box
            width={{
                xs: "100%",
                sm: "calc(100% / 2 - 15px)",
                md: "calc(100% / 3 - 15px)",
            }}
            style={{
                border: "1px solid var(--text-secondary)",
                borderRadius: "32px",
            }}
            padding={3}
        >
            <Animated className="project-card">
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    height={"100%"}
                >
                    <Box>
                        <Box borderRadius={"12px"} overflow={"hidden"} height={"200px"}>
                            <img src={img} alt={projectTitle} loading="lazy" />
                        </Box>
                        <Box textAlign={"center"} mt={2}>
                            <Typography variant="h6" mb={1}>{projectTitle}</Typography>
                            <p className="text" style={{ fontSize: "14px" }}>{projectDesc}</p>
                        </Box>
                    </Box>
                    <Stack direction={"column"} spacing={2} alignItems={"center"} mt={3}>
                        <a href={gitHubLink} target="_blank">
                            <MyButton value="GitHub" size="small"></MyButton>
                        </a>
                        <a href={liveDemoLink} target="_blank">
                            <MyButton contained value="Live Demo" size="medium"></MyButton>
                        </a>
                    </Stack>
                </Box>
            </Animated>
        </Box >
    )
}

export default ProjectCard
