import { Box, Stack, Typography } from "@mui/material"
import Links from "./Links"
import Menu from "./Menu"
const Nav = () => {
    console.log("Nav Rendered")
    return (
        <Box>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={{
                    xs: "20px 0"
                }}
            >
                <Typography variant="h5" component={"h1"} className="logo">Kamel Maher</Typography>
                <Links />
                <Menu />
            </Stack>
        </Box>
    )
}

export default Nav
