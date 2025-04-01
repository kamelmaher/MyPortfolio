import { Box, Typography } from "@mui/material"
import { ReactNode } from "react"
type SectionProps = {
    titleText: string,
    title: string,
    children: ReactNode
}
const Section = ({ titleText, title, children }: SectionProps) => {
    return (
        <Box padding={"40px 0"} id={title.split(" ")[0]}>
            <Box
                textAlign={"center"}
                mb={"30px"}
            >
                <p className="text section-text">{titleText}</p>
                <Typography variant="h3" fontWeight={"600"}>{title}</Typography>
            </Box>
            {children}
        </Box>
    )
}

export default Section
