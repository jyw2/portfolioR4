import Stack from '@mui/material/Stack';
import Project from './Project';
import ProjectModel from '../models/projectModel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import Fade from '@mui/material/Fade';
import useMediaQuery from '@mui/material/useMediaQuery';
import constants from '../constants';
import colors from '../styles/colors';
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { createTheme, ThemeProvider, } from '@mui/material/styles';

function Projects() {
    let { category } = useParams();
    const theme = createTheme({
        palette: {
            primary: {
                main: '#e0db31'
            }
        }
      });

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
            ["Techart","Games", "Maya", "Python", "3D", "Solo"],
            "https://github.com/jyw2/Maya-Python-Programs",
            "https://youtu.be/QkdLPGBiFKc"
        ),

    ]

    let navigate = useNavigate();
    const small = useMediaQuery(`(max-width: ${constants.smallBreakPoint})`);
    const [visibleProjects, setVisProjects] = useState([])
    const [show, setShow] = useState(true)   

    const filterButtonStyleCommon = {
        width: small ? "200px" : "100%", fontSize:"15px", height:"50px",
        textTransform: "unset", fontWeight:"bold", borderRadius:"1px"
    }
    const filterButtonStyleSelected = {
        ...filterButtonStyleCommon,
    }

    function filterProjects(filter) {
        setShow(false)
        setTimeout(() => {
            if (filter === "All") {
                setVisProjects(projects)
            } else {
                setVisProjects(projects.filter(project => project.keywords.find(keyword => keyword.toLowerCase() === filter.toLowerCase())))
            }
            setShow(true)
        }, 300)
    }
    useEffect(() => filterProjects(category), [category])

    return (
        <ThemeProvider theme={theme}>
            <Stack backgroundColor={colors.primarySemiLight} width={"100%"} paddingTop={"10px"} paddingBottom={"10px"}>
                <Stack sx= {{backgroundColor: colors.primarySemiLight, width:"100%", justifyContent:"center", alignItems:"center"
                }}> 
                    < Stack alignItems="center" justifyContent="center" spacing={3} sx={{
                        postion: "relative",  paddingTop:"20px", paddingBottom:"20px", paddingRight:"10%",paddingLeft:"10%",
                        maxWidth:"1310px", width:"100%"
                    }} >
                        <Stack spacing={0.5} direction={small ? "column" : "row"} alignItems="center"
                            justifyContent="space-between" sx={{ marginTop: "20px !important", width: "100%", marginBottom:"-10px" }}>
                            <Button onClick={() => navigate("/web")}
                                sx={category === "web"? filterButtonStyleSelected: filterButtonStyleCommon} 
                                variant={category === "web"? "contained":"outlined"}>
                                    WEB DEV
                            </Button>
                            <Button onClick={() => navigate("/techart")}
                                sx={category === "techart"? filterButtonStyleSelected: filterButtonStyleCommon} 
                                variant={category === "techart"? "contained":"outlined"}>
                                    TECH ART
                            </Button>
                            <Button onClick={() => navigate("/games")}
                                sx={category === "games"? filterButtonStyleSelected: filterButtonStyleCommon} 
                                variant={category === "games"? "contained":"outlined"}>
                                    GAME DEV
                            </Button>
                            <Button onClick={() =>  window.open("https://www.artstation.com/josh-w-concept/albums/14822509", "_blank")}
                                sx={filterButtonStyleCommon} variant="outlined">CONCEPT ART</Button>

                        </Stack>
                        <Fade in={show} >
                            <Stack direction="row" alignItems="center" justifyContent="start"
                                sx={{ maxWidth: "1500px", flexWrap: 'wrap', width: '100%', gap: "10px",paddingLeft:"0px"  }}>
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
                </Stack>
            </Stack>
</ThemeProvider>

    )
}

export default Projects
