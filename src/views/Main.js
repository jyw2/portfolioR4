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


function Main() {
    const bgLink = "https://imgur.com/eAArZiy.png"
    const theme = useTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container align="center" className="page" maxWidth="false" disableGutters>

                <section id="background"
                    style={{
                        width: "100%", height: "100%", backgroundImage: `url(${bgLink})`, backgroundSize: 'contain'
                    }} className="layer" />
                <Container id="midground" maxWidth="false" className="layer" sx={{ backgroundColor: '#2bb34f', top: "200px" }}>

                </Container>
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