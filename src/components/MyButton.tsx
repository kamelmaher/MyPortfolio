import { Button } from "@mui/material"
type MyButtonProps = {
    contained?: boolean
    value: string
    link?: string
    href?: string
    size?: "small" | "medium" | "large"
}

const MyButton = ({ value, contained, link, size }: MyButtonProps) => {
    return (
        <Button
            className={`button ${contained && "filled"}`}
            variant={contained ? "contained" : "outlined"}
            style={{
                color: contained ? "white" : "black",
                background: contained ? "#353535" : "white",
                border: contained ? "none" : "1px solid black"
            }}
            size={size}
        >
            {
                link ? <a href={link} target="_blank">{value}</a>
                    :
                    value
            }
        </Button>
    )
}

export default MyButton
