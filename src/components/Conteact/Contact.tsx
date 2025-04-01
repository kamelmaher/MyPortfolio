import { Stack } from "@mui/material"
import Section from "../Section"
import ContactItem from "./ContactItem"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const MY_EMAIL = "kamelmahersh@gmail.com"
const Contact = () => {
    return (
        <Section
            titleText="Get In Touch"
            title="Contact Me"
        >
            <Stack
                direction={"row"}
                className="my-card"
                justifyContent={"space-between"}
                width={{
                    xs: "100%",
                    md: "600px"
                }}
                m={"auto"}
                flexWrap={"wrap"}
                gap={2}
            >
                <ContactItem icon={<EmailIcon fontSize="small" />} title={MY_EMAIL} link={`mailto:${MY_EMAIL}`} />
                <ContactItem icon={<LinkedInIcon fontSize="small" />} title="Kamel Maher" link="https://www.linkedin.com/in/kamelmaher/" />
            </Stack>
        </Section>
    )
}

export default Contact
