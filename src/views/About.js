import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work'

function About() {

    function handleGitClick() {
        window.open("https://github.com/jyw2")
    }

    function handleLinkedInClick() {
        window.open("https://www.linkedin.com/in/jyw2/")
    }

    return (
        <Stack sx={{
            width: '50%', marginTop: '150px'
        }} spacing={2} alignItems="center" justifyContent="center" >
            <div>
                <Container sx={{ position: "relative", width: "fit-content" }} >
                    <Typography fontSize="180px" variant='h1' align="center" sx={{ color: "white", letterSpacing: '-20px', fontFamily: "inter", fontWeight: "bold" }}>
                        WELCOME
                    </Typography>
                    <Typography fontSize="180px" variant='h1' align="center" sx={{ position: 'absolute', left: '20px', top: '-5px', letterSpacing: '-20px', fontFamily: "inter", fontWeight: "bold" }}>
                        WELCOME
                    </Typography>
                </Container>

                <Typography align="center" sx={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    I'm Josh and I love web and game development! I enjoy getting lost in design
                    patterns, architectures, conventions and seeing the amazing open source projects that other developers are working on.
                    I've also got an eye for design and skill in illustration.
                </Typography>
                <Stack direction="row" spacing={4} align="center" justifyContent="center" >
                    <Stack direction="row" spacing={1} align="center">
                        <IconButton disabled>
                            <EmailIcon />
                        </IconButton>
                        <Typography align="center" display='flex' alignItems="center" >
                            JYUENW@gmail.com
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} align="center">

                        <IconButton disabled>
                            <PhoneIcon />
                        </IconButton>
                        <Typography align="center" display='flex' alignItems="center" >
                            (1) 587-989-3765
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} align="center">

                        <IconButton href="https://github.com/jyw2" target="_blank">
                            <CodeIcon />
                        </IconButton>
                        <Typography align="center" display='flex' alignItems="center" style={{ cursor: "pointer" }} onClick={handleGitClick}>
                            github
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} align="center">

                        <IconButton href="https://www.linkedin.com/in/jyw2/" target="_blank">
                            <WorkIcon />
                        </IconButton>
                        <Typography align="center" display='flex' alignItems="center" style={{ cursor: "pointer" }} onClick={handleLinkedInClick}>
                            linkedIn
                        </Typography>
                    </Stack>
                </Stack>
            </div>
        </Stack >
    )
}
export default About