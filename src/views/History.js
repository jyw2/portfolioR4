import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShadowContainer from './ShadowContainer';
import { fontFamily } from '@mui/system';
import { useState } from 'react'

function History() {

    let stripeOffset = 200
    let spacerWidth = 230



    return (
        <Stack alignItems="center" justifyContent="center" spacing={10} sx={{ position: "relative" }}>
            <Container id="blackStripe" maxWidth="false" sx={{
                backgroundColor: '#F0EEE9',
                height: '750px',
                width: '3000px',
                transform: 'rotate(12deg)',
                position: 'absolute',
                top: `${stripeOffset}px`,
                left: '-300px'
            }}>
            </Container>
            <Container id="blackStripe" maxWidth="false" sx={{
                backgroundColor: '#111111',
                height: '600px',
                width: '3000px',
                transform: 'rotate(12deg)',
                position: 'absolute',
                top: `${stripeOffset + 50}px`,
                left: '-300px'
            }}>
            </Container>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
                <ShadowContainer
                    align='right'
                    name="UNIVERSITY OF ALBERTA"
                    role="BSc Cmptr Eng Software Co-op"
                    keywords="Object oriented, testing, design, languages, operating systems, databases"
                    accentShape='0'
                >
                    Cut my teeth on the fundamentals in
                    Alberta’s premier University. Learned the foundations of computers and software development.
                </ShadowContainer>

                <div style={{ width: `${spacerWidth}px`, zIndex: "2", position: 'relative' }}>
                    <Stack direction="column" sx={{ position: "relative", width: `${spacerWidth}px` }} >
                        <div style={{ height: '10px', background: '#757575' }} />
                        <div style={{ height: '40px' }} />
                        <div style={{ height: '70px', background: '#757575' }} />
                    </Stack>
                    <img src={require('./../assets/zigzagArrow.png')} style={{ top: '0px', left: `${spacerWidth * 0.2 / 2}px`, alt: "right arrow", width: `${spacerWidth * 0.8}px`, position: "absolute" }} />
                </div>

                <ShadowContainer align='left'
                    name="IRONSIGHT"
                    role="Software Developer Intern"
                    keywords="Vue, Flutter, .NET, MySql, Migrations"
                    accentShape='1'
                >
                    Collaborated with experienced
                    developers to develop web apps,
                    mobile components, cloud solutions and perform database migrations.
                </ShadowContainer>
            </Stack>
            <div style={{ zIndex: "2", position: 'relative' }}>
                <img src={require('./../assets/endArrow.png')} style={{ top: '-40px', left: '480px', alt: "right arrow", width: '200px', position: "absolute" }} />
                <Typography sx={{ fontFamily: "inter", fontWeight: "bold", fontSize: "40px", color: "#F0EEE9" }}>
                    THE NEXT CHAPTER...
                </Typography>
            </div>

        </Stack >

    )
}

export default History