import Stack from '@mui/material/Stack';
import Project from './Project';
import ProjectModel from '../models/projectModel';
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
            "QUICK LINEART",
            "BLENDER/LINE ART/SCRIPT \\ TOOL",
            '/src/assets/project-backgrounds/lex-lab.png',
            "Blender scripts to add dynamic lineart and export both a transparent line and a render layer.",
            ["Techart", "Blender", "Python"],
            "",
            '',
            ''
        ),
        new ProjectModel(
            "ARRAY CLONE",
            "PHOTOSHOP/ARRAY LAYER/PLUGIN \\ TOOL",
            '/src/assets/project-backgrounds/lex-lab.png',
            "Photoshop plugin to clone a layer in a line along an angled axis.",
            ["Techart", "Photoshop", "JavaScript"],
            "",
            '',
            ''
        ),
        new ProjectModel(
            "IRONSIGHT",
            "OIL TRUCKING/MANAGEMENT/WEB APP",
            '/project_images/ironsight.png',
            "Vue full stack web app for " +
            "managing oil trucking and related industry tasks.",
            ["Web", "Vue", "SQL", ".NET", "Azure", "Integrations", "Team"],
            "",
            'https://www.ironsight.app/',
            ""
        ),
        new ProjectModel(
            "COMBO CENTRAL",
            "STREET FIGHTER/COMBO SHARING/WEB APP",
            '/project_images/combo_central.png',
            "Full stack web app to create and " +
            "share combos featuring accounts and CRUD.",
            ["Web", "React", "Firebase", "MongoDB", "Solo"],
            "",
            "https://sf6.combocentral.com/combo/luke-sullivan/69d06407540ae0e3e736a751",
            ""
        ),
        new ProjectModel(
            "LEXICON LABYRINTH",
            "WEB BASED/MULTIPLAYER/PUZZLE GAME",
            '/project_images/lex_lab.png',
            "React based browser puzzle game " +
            "with online multiplayer and bots.",
            ["Web", "Games", "React", "Networks", "JavaScript", "Team"],
            'https://github.com/ece493/lexicon-labyrinth',
            "https://lexlab.jyuenw.com/",
            ""
        ),
        new ProjectModel(
            "BDO GS",
            "MMORPG/TRACKER/UTILITY",
            '/project_images/gs.png',
            "Angular based web app that " +
            "records and shares your " +
            "gameplay sessions or 'grinds'.",
            ["Web", "Angular", "JavaScript", "UI/UX", "Apache2", "Servers", "FireBase", "Solo"],
            'https://github.com/jyw2/grindSpot',
            "",
            'https://grindspot.jyuenw.com/',
        ),
        new ProjectModel(
            "One + One",
            "GESTURE/DRAWING/TOOL",
            '/project_images/one_plus_one.png',
            `Electron based gesture drawing assistant app created using electron.`,
            ["Web", "Electron", "React", "Solo"],
            'https://github.com/jyw2/onePlusOne',
            "asdasdas",
            "https://www.youtube.com/watch?v=uiyajTV66Rw"
        ),
        new ProjectModel(
            "Creddi.io",
            "CANTEEN/CREDIT/SYSTEM",
            '/project_images/creddi.png',
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
            '/project_images/chain.png',
            `Chain model generating tool for Maya. Allows you to vary length and thickness of the chain.`,
            ["Techart", "Maya", "Python", "3D", "Solo"],
            "https://github.com/jyw2/Maya-Python-Programs",
            "",
            "https://youtu.be/QkdLPGBiFKc"
        ),

    ]

    let navigate = useNavigate();
    const small = useMediaQuery(`(max-width: ${constants.smallBreakPoint})`);
    const [visibleProjects, setVisProjects] = useState([])
    const [show, setShow] = useState(true)

    const filterButtonStyleCommon = {
        width: small ? "90%" : "100%", fontSize: "15px", height: small ? "30px" : "50px",
        textTransform: "unset", fontWeight: small ? "" : "bold", borderRadius: "1px"
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
    useEffect(() => filterProjects(category ? category : "web"), [category])

    return (
        <ThemeProvider theme={theme}>
            <Stack backgroundColor={colors.primarySemiLight} width={"100%"} paddingTop={"10px"} paddingBottom={"10px"}>
                <Stack sx={{
                    backgroundColor: colors.primarySemiLight, width: "100%", justifyContent: "center",
                    alignItems: "center",
                }}>
                    < Stack alignItems="center" justifyContent="center" spacing={3} sx={{
                        postion: "relative", paddingTop: small ? "0px" : "20px", paddingBottom: "20px", paddingRight: "10%", paddingLeft: "10%",
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
                            <Stack direction="row" alignItems="center" justifyContent={small ? "center" : "start"}
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
                                    demoLink={project.demoLink}
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
