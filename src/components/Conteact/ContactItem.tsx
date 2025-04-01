import { Stack, Typography } from "@mui/material"
import { ReactNode } from "react"
type ContactItemProps = {
    icon: ReactNode,
    title: string,
    link: string
}
const ContactItem = ({ icon, title, link }: ContactItemProps) => {
    return (
        <Stack className="pointer" direction={"row"} alignItems={"center"} spacing={1}>
            <Stack
                width={"30px"}
                height={"30px"}
                borderRadius={"50%"}
                bgcolor={"black"}
                color={"white"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {icon}
            </Stack>
            <a href={link}>
                <Typography variant="h6">{title}</Typography>
            </a>
        </Stack>
    )
}

export default ContactItem
