import './main.css'
import About from './About.js'
import History from './History.js'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';

function Main() {
    return (
        <Container className="page">
            <section id="background" className="layer" sx={{ backgroundColor: 'black' }}>
                <h1>
                    Background
                </h1>
            </section>
            <Container id="midground" className="layer" sx={{ backgroundColor: 'lightYellow' }}>
                <h1>
                    MidGround
                </h1>
            </Container>
            <Container id="midground" sx={{
                backgroundColor: 'darkGrey',
                height: '400px',
                width: '3000px',
                transform: 'rotate(15deg)',
                position: 'absolute',
            }}>
                <h1>
                    MidGround
                </h1>
            </Container>
            <Container align="center" id="foreground" className="layer">
                <Stack alignItems="center" spacing={10} justifyContent="center">
                    <About />
                    <History />
                </Stack>
            </Container >

        </Container >
    )
}
export default Main