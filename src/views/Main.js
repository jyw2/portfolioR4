import '../styles/main.css'
import About from './About.js'
import History from './History.js'
import Projects from './Projects.js'

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import defaultTheme from '../styles/DefaultTheme.js';

import colors from '../styles/colors';

function Main() {
    const bgLink = "https://imgur.com/eAArZiy.png"
    const theme = useTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container align="center" className="page" maxWidth="false" disableGutters>

                <section id="background"
                    style={{
                        width: "100%", height: "100%", backgroundImage: `url(${bgLink})`, backgroundSize: 'contain', zIndex: "-1"
                    }} className="layer" />

                <div style={{ position: 'relative', backgroundColor: colors.accent, height: '100%', width: '100%' }}>

                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ top: '0px', left: '0px', position: 'absolute', zIndex: '0' }} >
                        <circle cx="70" cy="25" r="20" fill={colors.tertiary} />
                        <circle cx="10" cy="40" r="14" fill={colors.tertiary} />
                        <polygon points="100,0 80,25 150,75 200,0" fill={colors.tertiary} />
                        <rect x="14" y="20" width="100" fill={colors.tertiary} height="40" />
                    </svg>
                    <div id="midground" maxWidth="false" className="layer" style={{ backgroundColor: colors.tertiary, zIndex: "0", width: '100%', position: 'relative' }}>
                    </div>
                </div>


                <Container align="center" id="foreground" maxWidth="false" className="layer">
                    <Stack alignItems="center" spacing={10} justifyContent="center">
                        <About />
                        <History />
                        <Projects />
                    </Stack>
                </Container >

            </Container >
        </ThemeProvider>
    )
}
export default Main