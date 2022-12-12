import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShadowContainer from './ShadowContainer';
import { fontFamily } from '@mui/system';

function History() {

    return (
        <Stack alignItems="center" justifyContent="center" spacing={10}>
            <Container id="blackStripe" maxWidth="false" sx={{
                backgroundColor: '#F0EEE9',
                height: '600px',
                width: '3000px',
                transform: 'rotate(12deg)',
                position: 'absolute',
                top: '900px',
                left: '-200px'
            }}>
            </Container>
            <Container id="blackStripe" maxWidth="false" sx={{
                backgroundColor: '#111111',
                height: '600px',
                width: '3000px',
                transform: 'rotate(12deg)',
                position: 'absolute',
                top: '950px',
                left: '-200px'
            }}>
            </Container>

            <Stack direction="row" alignItems="center" justifyContent="center">
                <ShadowContainer
                    align='right'
                    name="UNIVERSITY OF ALBERTA"
                    role="BSc Cmptr Eng Software Co-op"
                    keywords="Object oriented. testing, design, languages, operating systems, databases"
                >
                    Cut my teeth on the fundamentals in
                    Alberta’s premier University.
                </ShadowContainer>

                <Container sx={{ width: "300px" }}></Container>

                <ShadowContainer align='left'
                    name="IRONSIGHT"
                    role="Software Developer Intern"
                    keywords="Vue, Flutter, .NET, MySql, Migrations"
                >
                    Rumbled with experienced
                    developers to develop web apps,
                    mobile components, cloud solutions and perform database
                </ShadowContainer>
            </Stack>
            <Typography sx={{ fontFamily: "inter", fontWeight: "bold", fontSize: "40px", color: "#F0EEE9", zIndex: "2" }}>
                THE NEXT CHAPTER...
            </Typography>
        </Stack >

    )
}

export default History