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
            },
            action: {
                disabledBackground: '#404040',
                disabled: '#292929'
            }
        }
    });

    const projects = [
        new ProjectModel(
            "QUICK EXPORT",
            "BLENDER/CONCEPT ART/EXPORT SCRIPT",
            '/src/assets/project-backgrounds/lex-lab.png',
            "Blender script to export both a transparent lineart and a render layer for a 3D model.",
            ["Techart", "Blender", "Python"],
            null,
            'https://grindspot.jyuenw.com/',
            'https://www.ironsight.app/'
        ),
        new ProjectModel(
            "QUICK LINEART",
            "BLENDER/LINE ART/SCRIPT",
            '/src/assets/project-backgrounds/lex-lab.png',
            "Blender script to apply variable weight lineart to a 3D model.",
            ["Techart", "Blender", "Python"],
            null,
            'https://grindspot.jyuenw.com/',
            'https://www.ironsight.app/'
        ),
        new ProjectModel(
            "ARRAY CLONE",
            "PHOTOSHOP/ARRAY LAYER/PLUGIN",
            '/src/assets/project-backgrounds/lex-lab.png',
            "Photoshop plugin to clone a layer in a line along an angled axis.",
            ["Techart", "Photoshop", "JavaScript"],
            null,
            'https://grindspot.jyuenw.com/',
            'https://www.ironsight.app/'
        ),
        new ProjectModel(
            "IRONSIGHT",
            "OIL TRUCKING/MANAGEMENT/WEB APP",
            '/src/assets/project-backgrounds/lex-lab.png',
            "Vue full stack web app for " +
            "managing oil trucking and related " + "industry tasks.",
            ["Web", "Vue", "SQL", ".NET", "Azure", "Integrations", "Team"],
            null,
            'https://grindspot.jyuenw.com/',
            'https://www.ironsight.app/'
        ),
        new ProjectModel(
            "COMBO CENTRAL",
            "STREET FIGHTER/COMBO SHARING/WEBSITE",
            '/src/assets/project-backgrounds/lex-lab.png',
            "Full stack web app to create and " +
            "share combos featuring accounts " + "and CRUD.",
            ["Web", "React", "Firebase", "MongoDB", "Solo"],
            'https://github.com/ece493/lexicon-labyrinth',
            'https://grindspot.jyuenw.com/',
        ),
        new ProjectModel(
            "LEXICON LABYRINTH",
            "WEB BASED/MULTIPLAYER/PUZZLE GAME",
            '/src/assets/project-backgrounds/lex-lab.png',
            "React based browser puzzle game " +
            "with online multiplayer and bots.",
            ["Web", "Games", "React", "Networks", "JavaScript", "Team"],
            'https://github.com/ece493/lexicon-labyrinth',
            'https://grindspot.jyuenw.com/',
        ),
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
            `Electron based gesture drawing assistant app created using electron.`,
            ["Web", "Electron", "React", "Solo"],
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
            "Chain Gen",
            "CHAIN/MODEL/GENERATOR",
            "https://imgur.com/VewIDOU.jpg",
            `Chain model generating tool for Maya. Allows you to vary length and thickness of the chain.`,
            ["Techart", "Maya", "Python", "3D", "Solo"],
            "https://github.com/jyw2/Maya-Python-Programs",
            "https://youtu.be/QkdLPGBiFKc"
        ),

    ]

    let navigate = useNavigate();
    const small = useMediaQuery(`(max-width: ${constants.smallBreakPoint})`);
    const [visibleProjects, setVisProjects] = useState([])
    const [show, setShow] = useState(true)

    const filterButtonStyleCommon = {
        width: small ? "200px" : "100%", fontSize: "15px", height: "50px",
        textTransform: "unset", fontWeight: "bold", borderRadius: "1px"
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
                <Stack sx={{
                    backgroundColor: colors.primarySemiLight, width: "100%", justifyContent: "center", alignItems: "center"
                }}>
                    < Stack alignItems="center" justifyContent="center" spacing={3} sx={{
                        postion: "relative", paddingTop: "20px", paddingBottom: "20px", paddingRight: "10%", paddingLeft: "10%",
                        maxWidth: "1310px", width: "100%"
                    }} >
                        <Stack spacing={0.5} direction={small ? "column" : "row"} alignItems="center"
                            justifyContent="space-between" sx={{ marginTop: "20px !important", width: "100%", marginBottom: "-10px" }}>
                            <Button onClick={() => navigate("/web")}
                                sx={category === "web" ? filterButtonStyleSelected : filterButtonStyleCommon}
                                variant={category === "web" ? "contained" : "outlined"}>
                                WEB DEV
                            </Button>
                            <Button onClick={() => navigate("/techart")}
                                sx={category === "techart" ? filterButtonStyleSelected : filterButtonStyleCommon}
                                variant={category === "techart" ? "contained" : "outlined"}>
                                TECH ART
                            </Button>
                            <Button onClick={() => navigate("/games")}
                                sx={category === "games" ? filterButtonStyleSelected : filterButtonStyleCommon}
                                variant={category === "games" ? "contained" : "outlined"}>
                                GAME DEV
                            </Button>
                            <Button onClick={() => window.open("https://www.artstation.com/josh-w-concept/albums/14822509", "_blank")}
                                sx={filterButtonStyleCommon} variant="outlined">CONCEPT ART</Button>

                        </Stack>
                        <Fade in={show} >
                            <Stack direction="row" alignItems="center" justifyContent="start"
                                sx={{ maxWidth: "1500px", flexWrap: 'wrap', width: '100%', gap: "10px", paddingLeft: "0px" }}>
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
