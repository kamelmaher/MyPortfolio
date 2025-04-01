import { Box, Stack } from "@mui/material"
import Section from "../Section"
import PersonalImage from "/picture.jpg"
import AboutCard from "./AboutCard"
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
const About = () => {
    return (
        <Section
            titleText="Get To Know More"
            title="About Me"
        >
            <Stack
                direction={{
                    xs: "column",
                    lg: "row"
                }}
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    borderRadius={"32px"}
                    overflow={"hidden"}
                    maxWidth={"300px"}
                >
                    <img src={PersonalImage} alt="Personal-Img" loading="lazy" style={{ objectFit: "contain" }} />
                </Box>
                <Box>
                    <Stack
                        direction={{
                            xs: "column",
                            md: "row"
                        }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        spacing={4}
                        mb={4}
                    >
                        <AboutCard icon={<WorkspacePremiumRoundedIcon />} title="Experience" textOne="+4 Years" textTwo="Frontend Development" />
                        <AboutCard icon={<PeopleRoundedIcon />} title="Education" textOne="B.Sc. in Software Engineering" textTwo="" />
                    </Stack>
                    <p className="text" style={{ fontSize: "15px", padding: "5px" }}>
                        I am a passionate front-end developer specializing in React and TypeScript. With a strong focus on creating responsive and user-friendly web applications, I enjoy turning ideas into functional and visually appealing designs. I have experience working with various tools and libraries to build dynamic, high-performance websites. I believe in writing clean and maintainable code that enhances the user experience. Always eager to learn new technologies and improve my skills.
                    </p>
                </Box>
            </Stack>
        </Section>
    )
}

export default About
