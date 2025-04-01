import { Box, Stack, Typography } from "@mui/material"
import Skill from "./Skill"
import { Skill as skillType } from "../../types/Skill"
type ExperienceCardProps = {
    title: string
    list: skillType[]
}

const ExperienceCard = ({ title, list }: ExperienceCardProps) => {
    return (
        <Box
            className="my-card"
            width={{
                xs: "100%",
                md: "calc(100% / 2)"
            }}
        >
            <Typography variant="h5" color="var(--text-secondary)" fontWeight={"600"} textAlign={"center"}>{title}</Typography>
            <Stack
                mt={3}
                direction={"row"}
                flexWrap={"wrap"}
            >
                {
                    list.map(skill => <Skill key={skill.name} skill={skill} />)
                }
            </Stack>
        </Box>
    )
}

export default ExperienceCard
