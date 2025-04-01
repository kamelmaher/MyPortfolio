import { Stack } from "@mui/material"
import GitHub from "/github.png"
import LinkedIn from "/linkedin.png"
const SocialLinks = () => {
    return (
        <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"center"}
            className="social"
        >
            <a href="https://www.linkedin.com/in/kamelmaher/" target="_blank">
                <img src={LinkedIn} alt="LinkedIn" loading="lazy" />
            </a>
            <a href="https://github.com/kamelmaher" target="_blank">
                <img src={GitHub} alt="GitHub" loading="lazy" />
            </a>
        </Stack>
    )
}

export default SocialLinks
