import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ShadowContainer(props) {
    return (
        <Container sx={{ position: "relative" }}>
            {/* <Container sx={{ zIndex: "0", position: "absolute", top: "20px", left: "70px", width: "450px", height: "350px", backgroundColor: "white", padding: "40px", borderRadius: '10px' }} /> */}
            <Container sx={{ zIndex: "3", position: "relative", width: "450px", height: "350px", backgroundColor: "black", padding: "40px", borderRadius: '10px' }} >
                <Typography align={props.align} variant="h4" sx={{ color: "white" }}>
                    {props.name}
                </Typography>
                <Typography align={props.align} variant="h5" sx={{ color: "white" }}>
                    {props.role}
                </Typography>
                <Typography align={props.align} sx={{ color: "white", marginTop: "20px", marginBottom: "20px" }}>
                    {props.children}
                </Typography>
                <Typography align={props.align} sx={{ color: "white" }}>
                    {props.keywords}
                </Typography>
            </Container >
        </Container>

    )
}

export default ShadowContainer