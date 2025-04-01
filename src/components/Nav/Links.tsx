import { Stack, Typography } from "@mui/material"
export const LINKS = ["About", "Experience", "Projects", "Contact"]
const Links = () => {
    return (
        <Stack
            direction={"row"}
            spacing={2}
            display={{ xs: "none", md: "flex" }}
        >
            {
                LINKS.map(link => <Typography key={link} variant="h6" component={"p"} className="pointer link">
                    <a href={`#${link}`}>{link}</a>
                </Typography>)
            }
        </Stack >
    )
}

export default Links
