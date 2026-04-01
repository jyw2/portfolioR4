import Stack from '@mui/material/Stack';
import Project from './Project';
import ProjectModel from '../models/projectModel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react'
import Fade from '@mui/material/Fade';
import useMediaQuery from '@mui/material/useMediaQuery';
import constants from '../constants';
import colors from '../styles/colors';
import Container from '@mui/material/Container';


function Projects() {
    let stripeOffset = 200
    const projects = [
        new ProjectModel(
            "BDO GS",
            "MMORPG/TRACKER/UTILITY",
            "https://i.imgur.com/j4YKlRu.png",
            "Angular based web app that " +
            "records and shares your " +
            "gameplay sessions or 'grinds'.",
            ["Web", "Angular", "JavaScript", "UI/UX", "Apache2", "Servers", "FireBase", "Solo"],
            'https://github.com/jyw2/grindSpot',
            'https://grindspot.jyuenw.com/',
        ),
        new ProjectModel(
            "One + One",
            "GESTURE/DRAWING/TOOL",
            "https://imgur.com/T1GcULm.jpg",
            `Native desktop gesture drawing assistant app created using electron.`,
            ["Native", "Electron", "React", "Solo"],
            'https://github.com/jyw2/onePlusOne',
            'https://www.youtube.com/watch?v=uiyajTV66Rw',
        ),
        new ProjectModel(
            "Creddi.io",
            "CANTEEN/CREDIT/SYSTEM",
            "https://imgur.com/Nx6BIv5.jpg",
            `React based web app for keeping 
            track of the Computer Engineering 
            club's snack tabs.`,
            ["Web", "React", "Team", "SQL"],
            "https://github.com/UAlbertaCompEClub/credit-tracking",
            "https://creddi.compeclub.com/",
        ),
        new ProjectModel(
            "Comm Site",
            "ILLUSTRATION/COMMISSION/SITE",
            "https://imgur.com/r9dHJFp.jpg",
            `Angular based site for my illustration commissions. Features a filtered gallery 
            and price estimator.`,
            ["Web", "Angular", "UI/UX", "MongoDB", "Illustration", "Solo"],
            "https://github.com/jyw2/comSiteRev4",
            "https://comsite.jyuenw.com/",
        ),
        new ProjectModel(
            "Mood Trckr",
            "MOOD/TRACKING/APP",
            "https://imgur.com/wG5zDxG.jpg",
            `Android mood tracking app centered around neural network predictions. 
            Only the phase one data collection app was completed.`,
            ["Native", "Android", "Team"],
            "https://github.com/MoodTrkr/android-volunteer",
            ""
        ),
        new ProjectModel(
            "Portfolio",
            "LEGACY/PORTFOLIO/WEBSITE",
            "https://imgur.com/l6LgiPd.jpg",
            `Old portfolio website from 2020. Built with Angular.
             Features a gallery and in-depth walk-throughs of projects.`,
            ["Web", "Angular", "Solo"],
            "https://github.com/jyw2/portfolio",
            "https://legacyportfolio.jyuenw.com/"
        ),
        new ProjectModel(
            "Chain Gen",
            "CHAIN/MODEL/GENERATOR",
            "https://imgur.com/VewIDOU.jpg",
            `Chain model generating tool for Maya. Allows you to vary length and thickness of the chain. 
            Built with Python.`,
            ["Games", "Maya", "Python", "3D", "Solo"],
            "https://github.com/jyw2/Maya-Python-Programs",
            "https://youtu.be/QkdLPGBiFKc"
        ),

    ]
    const small = useMediaQuery(`(max-width: ${constants.smallBreakPoint})`);
    const [visibleProjects, setVisProjects] = useState(projects)
    const [show, setShow] = useState(true)   
    const filterButtonStyle = {
        width: small ? "200px" : "200px", backgroundColor: colors.primaryLight,
        textTransform: "unset", color:colors.primary, fontWeight:"bold", borderRadius:"1px"
    }

    function filterProjects(filter) {
        setShow(false)
        setTimeout(() => {
            if (filter === "All") {
                setVisProjects(projects)
            } else {
                setVisProjects(projects.filter(project => project.keywords.find(keyword => keyword === filter)))
            }
            setShow(true)
        }, 300)
    }

    return (
        < Stack alignItems="center" justifyContent="center" spacing={1} sx={{ postion: "relative", backgroundColor: colors.primary }} >
            {/* <Container id="blackStripe" maxWidth="false" sx={{
                backgroundColor: colors.secondary,
                height: '750px',
                width: '3000px',
                transform: 'rotate(12deg)',
                position: 'absolute',
                top: `${stripeOffset}px`,
                left: '-600px'
            }}>
            </Container> */}
            {/* <Container id="blackStripe" maxWidth="false" sx={{
                backgroundColor: colors.primarySemiLight,
                height: '600px',
                width: '3000px',
                transform: 'rotate(12deg)',
                position: 'absolute',
                top: `${stripeOffset + 50}px`,
                left: '-600px'
            }}>
            </Container>
      */}
            <Stack spacing={small ? 1 : 1} direction={small ? "column" : "row"} alignItems="center"
                justifyContent="center" sx={{ marginTop: "20px !important" }}>
                <Button onClick={() => filterProjects("Web")}
                    sx={filterButtonStyle} variant="contained">WEB DEV</Button>
                <Button onClick={() => filterProjects("Games")}
                    sx={filterButtonStyle} variant="contained">GAME DEV</Button>
                <Button onClick={() => filterProjects("Techart")}
                    sx={filterButtonStyle} variant="contained">TECH ART</Button>
                <Button onClick={() => filterProjects("Techart")}
                    sx={filterButtonStyle} variant="contained">CONCEPT ART</Button>

            </Stack>
            <Fade in={show} >
                <Stack direction="row" alignItems="center" justifyContent="start"
                    sx={{ maxWidth: "1500px", flexWrap: 'wrap', width: '100%', gap: "20px",  }}>
                    {visibleProjects.map(project => <Project
                        key={project.name}
                        name={project.name}
                        subTitle={project.subTitle}
                        image={project.image}
                        description={project.description}
                        keywords={project.keywords}
                        codeLink={project.codeLink}
                        viewLink={project.viewLink}
                    />)}
                </Stack>
            </Fade>
        </Stack >
    )
}

export default Projects
