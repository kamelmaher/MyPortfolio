import { Box, Typography } from "@mui/material"
import { ReactNode } from "react"
type AboutCardProps = {
    icon: ReactNode,
    title: string
    textOne: string
    textTwo: string
}
const AboutCard = ({ icon, title, textOne, textTwo }: AboutCardProps) => {
    return (
        <Box
            textAlign={"center"}
            border={"1px solid var(--text-secondary)"}
            minWidth={"300px"}
            minHeight={"180px"}
            className={"my-card"}
        >
            {icon}
            <Typography variant="h6" fontWeight={"600"} mb={1}>{title}</Typography>
            <p className="text">{textOne}</p>
            <p className="text">{textTwo}</p>
        </Box>
    )
}

export default AboutCard
