import Stack from '@mui/material/Stack';
import Project from './Project';
import ProjectModel from '../models/projectModel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShadowContainer from './ShadowContainer';
import { fontFamily } from '@mui/system';
import Button from '@mui/material/Button';

function Projects() {

    let projects = [
        new ProjectModel(
            "Grind Spot",
            "MMORPG/GRIND/TRACKER",
            "https://i.imgur.com/j4YKlRu.png",
            "Angular based web app that " +
            "records and shares your" +
            "gameplay sessions or 'grinds'",
            ["Web", "Angular", "JavaScript", "UI/UX", "Apache2", "Servers", "FireBase"]
        ),
        new ProjectModel(
            "One + One",
            "MMORPG/GRIND/TRACKER",
            "https://i.imgur.com/j4YKlRu.png",
            "Angular based web app that" +
            "records and shares your" +
            "gameplay sessions or 'grinds'",
            ["Web", "Angular", "JavaScript", "UI/UX", "Apache2", "Servers", "FireBase"]
        ),
        new ProjectModel(
            "One + One",
            "MMORPG/GRIND/TRACKER",
            "https://i.imgur.com/j4YKlRu.png",
            "Angular based web app that" +
            "records and shares your" +
            "gameplay sessions or 'grinds'",
            ["Web", "Angular", "JavaScript", "UI/UX", "Apache2", "Servers", "FireBase"]
        ),
        new ProjectModel(
            "Creddi.io",
            "MMORPG/GRIND/TRACKER",
            "https://i.imgur.com/j4YKlRu.png",
            `React based web app for keeping 
            track of the Computer Engineering 
            club's snack tabs.`,
            ["Web", "Angular", "JavaScript", "UI/UX", "Apache2", "Servers", "FireBase"],
            "https://github.com/UAlbertaCompEClub/credit-tracking",
            "https://creddi.compeclub.com/"
        )
    ]
    return (
        < Stack alignItems="center" justifyContent="center" spacing={10} >
            <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                <Button sx={{ width: "100px", backgroundColor: "black" }} variant="contained">web</Button>
                <Button sx={{ width: "100px", backgroundColor: "black" }} variant="contained">games</Button>
                <Button sx={{ width: "100px", backgroundColor: "black" }} variant="contained">native</Button>
                <Button sx={{ width: "100px", backgroundColor: "black" }} variant="contained">all</Button>

            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ flexWrap: 'wrap', width: '100%', gap: "40px" }}>
                {projects.map(project => <Project
                    name={project.name}
                    subTitle={project.subTitle}
                    image={project.image}
                    description={project.description}
                    keywords={project.keywords}
                    codeLink={project.codeLink}
                    viewLink={project.viewLink}
                />)}
            </Stack>

        </Stack >
    )
}

export default Projects