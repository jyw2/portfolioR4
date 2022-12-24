import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import { useState } from 'react';
import Fade from '@mui/material/Fade';
import useMediaQuery from '@mui/material/useMediaQuery';

import colors from '../styles/colors';
import constants from '../constants';

function About() {

    const small = useMediaQuery(`(max-width: ${constants.smallBreakPoint})`);

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
            width: '50%', marginTop: '150px'
        }} spacing={2} alignItems="center" justifyContent="center" >
            <div>
                <Fade in={showWelcome}>
                    <Container sx={{ position: "relative", width: "fit-content" }} >
                        <Typography variant='h1' align="center" sx={
                            {
                                fontSize: small ? "80px" : "180px", color: "white",
                                letterSpacing: small ? '-10px' : '-20px', fontFamily: "inter", fontWeight: "bold"
                            }}
                        >
                            WELCOME
                        </Typography>
                        <Typography variant='h1' align="center"
                            sx={{
                                color: colors.primaryLight, fontSize: small ? "80px" : "180px",
                                position: 'absolute', left: '20px', top: '-5px',
                                letterSpacing: small ? '-10px' : '-20px', fontFamily: "inter", fontWeight: "bold"
                            }}>
                            WELCOME
                        </Typography>
                    </Container>
                </Fade>

                <Fade in={showDesc}>
                    <div>
                        <Typography align="center" sx={{
                            fontSize: small ? "15px" : "18px",
                            position: "relative", paddingLeft: small ? '30px' : '100px',
                            paddingRight: small ? '30px' : '100px', paddingBottom: '20px'
                        }}>
                            If you're looking for a developer who loves web and game development,
                            enjoys learning new architectures and design
                            patterns and has an eye for design and skill in illustration, you've come to the right place!
                        </Typography>
                        <Stack direction="row" spacing={4} align="center" alignItems="center" justifyContent="center" >
                            {small ? "" : <Stack sx={{ position: "relative" }} direction="row" spacing={1} align="center">
                                <IconButton disabled sx={small ? { width: '10px', height: '10px' } : {}}>
                                    <EmailIcon />
                                </IconButton>
                                <Typography align="center" display='flex' alignItems="center" color={colors.primaryLight} >
                                    JYUENW@gmail.com
                                </Typography>
                            </Stack>}

                            {small ? "" : <Stack sx={{ position: "relative" }} direction="row" spacing={1} align="center">

                                <IconButton disabled sx={small ? { width: '10px', height: '10px' } : {}}>
                                    <PhoneIcon />
                                </IconButton>
                                <Typography align="center" display='flex' alignItems="center" color={colors.primaryLight} >
                                    (1) 587-989-3765
                                </Typography>
                            </Stack>}

                            <Stack sx={{ position: "relative" }} direction="row" spacing={1} align="center">

                                <IconButton href="https://github.com/jyw2" target="_blank"
                                    sx={small ? { width: '10px', height: '10px' } : {}}>
                                    <CodeIcon />
                                </IconButton>
                                <Typography color={colors.primaryLight} align="center" display='flex' alignItems="center"
                                    style={{ cursor: "pointer" }} onClick={handleGitClick}>
                                    github
                                </Typography>
                            </Stack>

                            <Stack sx={{ position: "relative" }} direction="row" spacing={1} align="center">

                                <IconButton href="https://www.linkedin.com/in/jyw2/" target="_blank"
                                    sx={small ? { width: '10px', height: '10px' } : {}}>
                                    <WorkIcon />
                                </IconButton>
                                <Typography color={colors.primaryLight} align="center" display='flex' alignItems="center"
                                    style={{ cursor: "pointer" }} onClick={handleLinkedInClick}>
                                    linkedIn
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