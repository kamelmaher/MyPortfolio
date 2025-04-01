import { Box, Stack } from "@mui/material"
import personalImg from "/picture.jpg"
import SocialLinks from "./SocialLinks"
import HeroButtons from "./HeroButtons"
import HeroText from "./HeroText"
const Hero = () => {
    return (
        <Stack
            direction={{
                xs: "column",
                lg: "row"
            }}
            justifyContent={"center"}
            alignItems={"center"}
            className="hero"
            spacing={2}
            height={{
                xs: "fit-content",
                lg: "calc(100vh - 82px)"
            }}
        >
            <Box
                width={{
                    xs: "200px",
                    md: "275px"
                }}
                height={{
                    xs: "200px",
                    md: "275px"
                }}
                overflow={"hidden"}
                borderRadius={"50%"}
            >
                <img src={personalImg} alt="Personal Image" loading="lazy" />
            </Box>
            <Box
                textAlign={"center"}
                width={{
                    xs: "fit-content",
                    lg: "350px"
                }}
            >

                <HeroText />
                <HeroButtons />
                <SocialLinks />
            </Box>
        </Stack>
    )
}

export default Hero
