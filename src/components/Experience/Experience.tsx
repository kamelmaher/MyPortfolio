import { Stack } from "@mui/material"
import Section from "../Section"
import ExperienceCard from "./ExperienceCard"
import { Skills, SOFT_SKILLS } from "../../Data/Skills"

const Experience = () => {
    return (
        <Section
            titleText="Explore My"
            title="Experience"
        >
            <Stack
                direction={{
                    xs: "column",
                    md: "row"
                }}
                spacing={3}
            >
                <ExperienceCard list={Skills} title="Frontend Development" />
                <ExperienceCard list={SOFT_SKILLS} title="Soft Skills" />
            </Stack>
        </Section>
    )
}

export default Experience
