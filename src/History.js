import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShadowContainer from './ShadowContainer';
import { fontFamily } from '@mui/system';

function History() {
    return (
        <Stack alignItems="center" justifyContent="center" spacing={10}>
            <Stack direction="row" alignItems="center" justifyContent="center">
                <ShadowContainer
                    align='right'
                    name="University of Alberta"
                    role="BSc Cmptr Eng Software Co-op"
                    keywords="Object oriented. testing, design, languages, operating systems, databases"
                >
                    Cut my teeth on the fundamentals in
                    Alberta’s premier University.
                </ShadowContainer>

                <Container sx={{ width: "200px" }}></Container>

                <ShadowContainer align='left'
                    name="IronSight"
                    role="Software Developer Intern"
                    keywords="Vue, Flutter, .NET, MySql, Migrations"
                >
                    Rumbled with experienced
                    developers to develop web apps,
                    mobile components, cloud solutions and perform database
                </ShadowContainer>
            </Stack>
            <Typography sx={{ fontFamily: "inter", fontWeight: "bold", fontSize: "40px" }}>
                THE NEXT CHAPTER...
            </Typography>
        </Stack >

    )
}

export default History