import { Typography } from '@mui/material'

const HeroText = () => {
    return (
        <>
            <p className="text" style={{ fontWeight: "600" }}>Hello , I’m</p>
            <Typography variant="h4" component={"h1"} fontWeight={"bold"} fontSize={{
                xs: "30px",
                md: "3rem"
            }}>Kamel Maher</Typography>
            <Typography className="text" fontWeight={"600"} fontSize={{
                xs: "20px",
                md: "1.75rem"
            }}>Frontend Developer</Typography>
        </>
    )
}

export default HeroText
