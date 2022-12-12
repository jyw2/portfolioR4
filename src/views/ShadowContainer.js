import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ShadowContainer(props) {
    return (
        <Container sx={{ position: "relative" }}>
            <Container sx={{ zIndex: "0", position: "absolute", top: "20px", left: "70px", width: "450px", height: "450px", backgroundColor: "white", padding: "40px", borderRadius: '3px' }} />
            <Container sx={{ zIndex: "3", position: "relative", width: "450px", height: "450px", backgroundColor: "black", padding: "20px", borderRadius: '3px' }} >
                <div style={{
                    padding: "20px"
                }}>
                    <Typography align={props.align
                    } variant="h4" sx={{ color: "white", fontFamily: "inter", fontWeight: "bold" }}>
                        {props.name}
                    </Typography>
                    <Typography align={props.align} variant="h5" sx={{ color: "white", fontFamily: "inter", fontWeight: "bold" }}>
                        {props.role}
                    </Typography>
                    <Typography align={props.align} sx={{ color: "white", marginTop: "20px", marginBottom: "20px", fontFamily: "inter" }}>
                        {props.children}
                    </Typography>
                    <Typography align={props.align} sx={{ color: "white", fontFamily: "inter" }}>
                        {props.keywords}
                    </Typography>
                </div>

            </Container >
        </Container >

    )
}

export default ShadowContainer