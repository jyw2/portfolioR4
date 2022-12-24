import '../styles/main.css'
import About from './About.js'
import History from './History.js'
import Projects from './Projects.js'
import React from 'react'
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material';
import defaultTheme from '../styles/DefaultTheme.js';
import useMediaQuery from '@mui/material/useMediaQuery';

import colors from '../styles/colors';
import constants from '../constants';

function Main() {
    const bgLink = "https://imgur.com/eAArZiy.png"
    const contentRef = React.createRef();
    const small = useMediaQuery(`(max-width: ${constants.smallBreakPoint})`);

    return (
        <ThemeProvider theme={defaultTheme}>
            <div style={{ height: "fit-content", position: "relative", overflowX: "hidden" }}>


                <section id="background"
                    style={{
                        width: "100%", height: "100%", backgroundImage: `url(${bgLink})`,
                        backgroundSize: 'contain', zIndex: "-1"
                    }} className="layer" />

                <div style={{
                    position: 'relative', backgroundColor: colors.accent,
                    height: '100%', width: '100%'
                }}>

                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                        style={{
                            minWidth: "1400px", top: small ? '-200px' : '0px',
                            left: '0px', position: 'absolute', zIndex: '0',
                        }} >
                        <circle cx="70" cy="25" r="20" fill={colors.tertiary} />
                        <circle cx="10" cy="40" r="14" fill={colors.tertiary} />
                        <polygon points="100,0 80,25 150,75 200,0" fill={colors.tertiary} />
                        <rect x="14" y="17" width="100" fill={colors.tertiary} height="40" />
                    </svg>
                    <div id="midground" className="layer"
                        style={{
                            backgroundColor: colors.tertiary, zIndex: "0",
                            width: '100%', position: 'relative'
                        }}>
                    </div>
                </div>

                <Stack sx={{ zIndex: "4", }} alignItems="center" spacing={10}
                    justifyContent="center" ref={contentRef}>
                    <About />
                    <History />
                    <Projects />
                </Stack>
            </div>
        </ThemeProvider >
    )
}
export default Main