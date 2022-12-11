import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShadowContainer from './ShadowContainer';
import { fontFamily } from '@mui/system';
import Button from '@mui/material/Button';

function Project(props) {
    return (
        <Container>
            {/* <Container sx={{ zIndex: "0", position: "absolute", top: "20px", left: "70px", width: "450px", height: "350px", backgroundColor: "white", padding: "40px", borderRadius: '10px' }} /> */}
            <Container sx={{ zIndex: "3", position: "relative", width: "400px", height: "600px", backgroundImage: `url(${props.image})`, padding: "40px", borderRadius: '10px' }} >
                {props.subTitle.split("/").map(line => <Typography align={props.align} variant="h5" sx={{ color: "white" }}>{line}</Typography>)}
                {props.name.split("/").map(line => <Typography align={props.align} variant="h5" sx={{ color: "white" }}>{line}</Typography>)}
                <Typography align={props.align} sx={{ color: "white", marginTop: "20px", marginBottom: "20px" }}>
                    {props.description}
                </Typography>
                <Typography align={props.align} sx={{ color: "white" }}>
                    {props.keywords.join(", ")}
                </Typography>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                    <Button href={props.codeLink} sx={{ width: "100px", backgroundColor: "white", color: "black" }} variant="contained">code</Button>
                    <Button href={props.viewLink} sx={{ backgroundColor: "white", color: "black" }} variant="contained">see it in action</Button>
                </Stack>
            </Container >
        </Container >
    )
}

export default Project