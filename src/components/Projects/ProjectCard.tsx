import { Box, Stack, Typography } from "@mui/material"
import MyButton from "../MyButton"
import { Project } from "../../types/Project"
type ProjectCardProps = {
    project: Project
}
const ProjectCard = ({ project }: ProjectCardProps) => {
    const { title: projectTitle, img, projectDesc, gitHubLink, liveDemoLink } = project
    return (
        <Box
            bgcolor={"#fafafa"}
            className="my-card"
            width={{
                xs: "100%",
                sm: "calc(100% / 2 - 15px)",
                md: "calc(100% / 3 - 15px)",
            }}
            mb={"15px !important"}
        >
            <Box borderRadius={"12px"} overflow={"hidden"} height={"200px"}>
                <img src={img} alt={projectTitle} loading="lazy" />
            </Box>
            <Box textAlign={"center"} mt={2}>
                <Typography variant="h6" mb={1}>{projectTitle}</Typography>
                <p className="text" style={{ fontSize: "14px" }}>{projectDesc}</p>
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
    )
}

export default ProjectCard
