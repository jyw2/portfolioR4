import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import { useState } from 'react';
import Fade from '@mui/material/Fade';
import useMediaQuery from '@mui/material/useMediaQuery';

import colors from '../styles/colors';
import constants from '../constants';

function About() {

    const small = useMediaQuery(`(max-width: ${constants.smallBreakPoint})`);
    const iconStyle = {  marginRight:"-10px" }
    
    function handleGitClick() {
        window.open("https://github.com/jyw2")
    }

    function handleLinkedInClick() {
        window.open("https://www.linkedin.com/in/jyw2/")
    }
    const [showWelcome, setShowWelcome] = useState(false)
    const [showDesc, setShowDesc] = useState(false)

    setTimeout(() => {
        setShowWelcome(true)
        setTimeout(() => {
            setShowDesc(true)
        }, 100)
    }, 800)

    return (
        <Stack sx={{
            width: '50%', marginTop: '70px'
        }} spacing={2} alignItems="center" justifyContent="center" >
            <div>
                <Fade in={showWelcome}>
                    <Container sx={{ position: "relative", width: "fit-content", display:"flex" }} >
                        <Typography variant='h1' align="center" sx={
                            {
                                fontSize: small ? "40px" : "120px", color: "white",
                                letterSpacing: small ? '-10px' : '-10px', fontFamily: "inter", fontWeight: "bold", paddingRight:"20px"
                            }}
                        >
                            JOSH
                        </Typography>
                        <Typography variant='h1' align="center" sx={
                            {
                                fontSize: small ? "40px" : "120px", color: '#e0db31', 
                                letterSpacing: small ? '-10px' : '-10px', fontFamily: "inter", fontWeight: "bold"
                            }}
                        >
                            WONG
                        </Typography>
                    </Container>
                </Fade>

                <Fade in={showDesc}>
                    <div>
             
                        <Stack direction="row" spacing={4} align="center" alignItems="center" justifyContent="center" 
                            sx={{border:"1px solid grey", marginLeft:"5%",  marginRight:"5%",}}
                        >
                            {small ? "" : <Stack sx={{ position: "relative" }} direction="row" spacing={1} align="center">
                                <IconButton disabled sx={small ? {}: iconStyle}>
                                    <EmailIcon sx ={{ color: colors.primaryLight }}/>
                                </IconButton>
                                <Typography align="center" display='flex' alignItems="center" color={colors.primaryLight} >
                                    Josh.w.code@gmail.com
                                </Typography>
                            </Stack>}
                                
                            <Stack sx={{ position: "relative" }} direction="row" spacing={1} align="center">

                                <IconButton href="https://github.com/jyw2" target="_blank"  
                                    sx={small ? {}: iconStyle}>
                                    <CodeIcon sx ={{ color: colors.primaryLight }}/>
                                </IconButton>
                                <Typography color={colors.primaryLight} align="center" display='flex' alignItems="center"
                                    style={{ cursor: "pointer" }} onClick={handleGitClick}>
                                    Github
                                </Typography>
                            </Stack>

                            <Stack paddingRight={3} sx={{ position: "relative" }} direction="row" spacing={1} align="center">

                                <IconButton href="https://www.linkedin.com/in/jyw2/" target="_blank"
                                    sx={small ? {}: iconStyle}>
                                    <WorkIcon sx ={{ color: colors.primaryLight }}/>
                                </IconButton>
                                <Typography color={colors.primaryLight} align="center" display='flex' alignItems="center"
                                    style={{ cursor: "pointer" }} onClick={handleLinkedInClick}>
                                    LinkedIn
                                </Typography>
                            </Stack>
                        </Stack >
                    </div>
                </Fade>
            </div >
        </Stack >
    )
}
export default About
