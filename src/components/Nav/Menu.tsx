import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { LINKS } from './Links';
const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleChangeMenu = (e: boolean) => setShowMenu(e)
    return (
        <Box
            display={{ xs: "block", md: "none" }}
            position={"relative"}
        >
            {
                !showMenu ?
                    <MenuIcon className='pointer' fontSize="large" onClick={() => handleChangeMenu(true)} />
                    : <>
                        <CloseIcon className='pointer' fontSize='large' onClick={() => handleChangeMenu(false)} />
                        <Stack
                            position={"absolute"}
                            left={"35px"}
                            style={{
                                transform: "translateX(-100%)"
                            }}
                            padding={"10px 15px"}
                            boxShadow={"0 4px 10px rgba(0, 0, 0, 0.1)"}
                            borderRadius={"8px"}
                            bgcolor={"white"}
                        >
                            {
                                LINKS.map(link => <Typography key={link} variant='h6' fontSize={"20px"} className='pointer' margin={"5px 0"}>
                                    <a href={`#${link}`}>{link}</a>
                                </Typography>)
                            }
                        </Stack>
                    </>
            }
        </Box>
    )
}

export default Menu
