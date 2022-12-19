import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShadowContainer from './ShadowContainer';
import { fontFamily } from '@mui/system';
import Button from '@mui/material/Button';

import colors from '../styles/colors';

function Project(props) {
    return (
        <Container>
            {/* <Container sx={{ zIndex: "0", position: "absolute", top: "20px", left: "70px", width: "450px", height: "350px", backgroundColor: "white", padding: "40px", borderRadius: '10px' }} /> */}
            <Container
                sx={{
                    zIndex: "3",
                    position: "relative",
                    width: "400px",
                    height: "600px",
                    backgroundImage: `url(${props.image})`,
                    backgroundColor: "black",
                    padding: "40px", borderRadius: '10px'
                }} >

                {props.subTitle.split("/").map(line =>
                    <Typography align={props.align} variant="h5" sx={{
                        fontFamily: "inter",
                        fontWeight: "bold",
                        color: colors.secondary
                    }}>{line}</Typography>
                )}

                {props.name.split("/").map(line => <Typography align={props.align} variant="h5" sx={{
                    fontSize: '60px',
                    letterSpacing: '-4px',
                    fontFamily: "inter",
                    fontWeight: "bold",
                    color: colors.secondary,
                }}>{line}</Typography>)}

                <Typography align={props.align} sx={{ color: "white", marginTop: "20px", marginBottom: "20px" }}>
                    {props.description}
                </Typography>
                <Typography align={props.align} sx={{ color: "white" }}>
                    {props.keywords.join(", ")}
                </Typography>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center" sx={{}}>
                    <Button disabled={!('codeLink' in props)} target="_blank" href={props.codeLink} sx={{ width: "100px", backgroundColor: "white", color: "black" }} variant="contained">code</Button>
                    <Button disabled={!('viewLink' in props)} target="_blank" href={props.viewLink} sx={{ backgroundColor: "white", color: "black" }} variant="contained">see it in action</Button>
                </Stack>
            </Container >
        </Container >
    )
}

export default Project