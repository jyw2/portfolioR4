import './main.css'
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
            <section id="background" className="layer">
                <h1>
                    Background
                </h1>
            </section>
            <section id="midground" className="layer">
                <h1>
                    MidGround
                </h1>
            </section>
            <section id="foreground" className="layer">
                <Container className="layer" align="center">
                    <Stack sx={{ width: '75%' }} spacing={2} align="center">
                        <Stack>
                            <div>
                                <Typography variant='h1' align="center">
                                    Welcome
                                </Typography>
                                <Typography align="center">
                                    If you’re Web development and game development Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                                <Stack direction="row" spacing={4} align="center" justifyContent="center" >
                                    <Stack direction="row" spacing={1} align="center">
                                        <IconButton>
                                            <EmailIcon />
                                        </IconButton>
                                        <Typography align="center" display='flex' alignItems="center" >
                                            JYUENW@gmail.com
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" spacing={1} align="center">

                                        <IconButton>
                                            <PhoneIcon />
                                        </IconButton>
                                        <Typography align="center" display='flex' alignItems="center" >
                                            (1) 587-989-3765
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" spacing={1} align="center">

                                        <IconButton>
                                            <CodeIcon />
                                        </IconButton>
                                        <Typography align="center" display='flex' alignItems="center" >
                                            https://github.com/jyw2
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </div>

                        </Stack>
                    </Stack>
                </Container>
            </section>

        </Container>
    )
}
export default Main