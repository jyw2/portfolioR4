import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShadowContainer from './ShadowContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import constants from '../constants';
import colors from '../styles/colors';

function History() {

    let stripeOffset = 200
    let spacerWidth = 230

    const small = useMediaQuery(`(max-width: ${constants.smallBreakPoint})`);

    return (
        <Stack alignItems="center" justifyContent="center" spacing={10}
            sx={{ marginTop: small ? "20px !important" : "auto", position: "relative" }}>
            <Container id="blackStripe" maxWidth="false" sx={{
                backgroundColor: colors.secondary,
                height: '750px',
                width: '3000px',
                transform: 'rotate(12deg)',
                position: 'absolute',
                top: `${stripeOffset}px`,
                left: '-600px'
            }}>
            </Container>
            <Container id="blackStripe" maxWidth="false" sx={{
                backgroundColor: colors.primarySemiLight,
                height: '600px',
                width: '3000px',
                transform: 'rotate(12deg)',
                position: 'absolute',
                top: `${stripeOffset + 50}px`,
                left: '-600px'
            }}>
            </Container>

            <Stack direction={small ? 'column' : "row"} alignItems="center" justifyContent="center" spacing={0}>
                <ShadowContainer
                    align='right'
                    name="UNIVERSITY OF ALBERTA"
                    role="BSc Cmptr Eng Software Co-op"
                    keywords="Object oriented, testing, design, languages, operating systems, databases"
                    accentShape='0'
                    link="https://calendar.ualberta.ca/preview_program.php?catoid=34&poid=38764"
                >
                    Cut my teeth on the fundamentals in
                    Alberta’s premier University. Learned the foundations of computers and software development.
                </ShadowContainer>

                {small ? "" : <div
                    style={{ width: `${spacerWidth}px`, height: "auto", zIndex: "2", position: 'relative' }}>
                    <Stack direction="column" sx={{ position: "relative", width: `${spacerWidth}px` }} >
                        <div style={{ height: '10px', background: colors.grey }} />
                        <div style={{ height: '40px' }} />
                        <div style={{ height: '70px', background: colors.grey }} />
                    </Stack>
                    <img src={require('./../assets/zigzagArrow.png')}
                        style={{
                            top: '0px', left: `${spacerWidth * 0.2 / 2}px`,
                            alt: "right arrow", width: `${spacerWidth * 0.8}px`, position: "absolute"
                        }} />
                </div>}

                <ShadowContainer align='left'
                    name="IRONSIGHT"
                    role="Software Developer Intern"
                    keywords="Vue, Flutter, .NET, MySql, Migrations"
                    accentShape='1'
                    link='https://ironsight.app/'
                >
                    Collaborated with experienced
                    developers to develop web apps,
                    mobile components, cloud solutions and perform database migrations.
                </ShadowContainer>
            </Stack>
            {small ? "" : <div style={{ zIndex: "2", position: 'relative' }}>
                <img src={require('./../assets/endArrow.png')} style={{
                    top: '-40px', left: '480px', alt: "right arrow", width: '200px', position: "absolute"
                }} />
                <Typography sx={{ fontFamily: "inter", fontWeight: "bold", fontSize: "40px", color: colors.secondary }}>
                    THE NEXT CHAPTER...
                </Typography>
            </div>}
        </Stack >
    )
}

export default History