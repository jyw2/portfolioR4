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
            <div style={{ height: "fit-content", minHeight:"100vh", position: "relative", overflowX: "hidden"}}>
                <section id="background"
                    style={{
                        width: "100%", height: "100%",backgroundColor:"black",
                        zIndex: "-2"
                    }} className="layer" />
                <section id="background"
                    style={{
                        width: "100%", height: "100%", backgroundImage: `url(${bgLink})`,
                        backgroundSize: 'contain', zIndex: "-1"
                    }} className="layer" />
           

                <Stack sx={{ zIndex: "4",paddingBottom:"80px" }} alignItems="center" spacing={10}
                    justifyContent="center" ref={contentRef}>
                    <About />
                    <Projects />
                </Stack>
            </div>
        </ThemeProvider >
    )
}
export default Main