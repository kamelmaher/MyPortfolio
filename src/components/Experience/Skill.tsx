import { Box, Stack } from "@mui/material"
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { Skill as skillType } from "../../types/Skill";
type SkillProps = {
    skill: skillType
}
const Skill = ({ skill }: SkillProps) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            width={{
                xs: "100%",
                sm: "calc(100% / 2)"
            }}
            mb={3}
        >
            <VerifiedRoundedIcon />
            <Box>
                <p>{skill.name}</p>
                <p className="text">{skill.level}</p>
            </Box>
        </Stack>
    )
}

export default Skill
