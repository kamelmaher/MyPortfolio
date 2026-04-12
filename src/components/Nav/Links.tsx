import { Stack, Typography } from "@mui/material"
import { links } from "../../Data"
const Links = () => {
    return (
        <Stack
            direction={"row"}
            spacing={2}
            display={{ xs: "none", md: "flex" }}
        >
            {
                links.map(link => <Typography
                    key={link}
                    variant="h6"
                    component={"p"}
                    className="pointer link"
                    fontSize={18}
                >
                    <a href={`#${link}`}>{link}</a>
                </Typography>)
            }
        </Stack >
    )
}

export default Links
