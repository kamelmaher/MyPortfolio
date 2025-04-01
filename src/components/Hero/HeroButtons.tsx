import { Stack } from "@mui/material"
import MyButton from "../MyButton"
const HeroButtons = () => {
    return (
        <Stack
            direction={{
                xs: "column",
                md: "row"
            }}
            justifyContent={{
                xs: "center",
                lg: "space-around"
            }}
            alignItems={{
                xs: "center",
                lg: "space-around"
            }}
            m={"16px 0"}
            spacing={2}
        >
            <a href="https://drive.google.com/file/d/1Sw7xqQNbGumaMQgjCB6cLO1e_OWqLHdi/view" target="_blank">
                <MyButton
                    value="Download CV"
                />
            </a>
            <MyButton contained value="Hire Me!" link="https://mostaql.com/u/Kamel_Maher123" />
        </Stack>
    )
}

export default HeroButtons
