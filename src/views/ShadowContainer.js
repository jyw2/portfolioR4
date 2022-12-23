import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import colors from '../styles/colors';

function ShadowContainer(props) {
    return (
        <Container disableGutters sx={{ position: "relative" }}>
            {props.accentShape == 0 ?
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "120px", height: "120px", top: '200px', left: '-80px', position: 'absolute', zIndex: '4' }} >
                    <circle cx="50" cy="50" r="50" fill={colors.accent} />
                </svg> : ''}

            {props.accentShape == 1 ?
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100px", height: "100px", top: '-80px', left: '300px', position: 'absolute', zIndex: '4' }} >
                    <circle cx="50" cy="50" r="50" fill={colors.accent} />
                </svg> : ''
            }


            <Container sx={{ zIndex: "0", position: "absolute", top: "20px", left: "20px", width: "450px", height: "350px", backgroundColor: "white", padding: "40px", borderRadius: '3px' }} />
            <Container sx={{ zIndex: "3", position: "relative", width: "450px", height: "350px", backgroundColor: "black", padding: "20px", borderRadius: '3px' }} >
                <div style={{
                    padding: "20px"
                }}>
                    <Typography align={props.align
                    } variant="h4" sx={{ letterSpacing: '-3px', color: "white", fontFamily: "inter", fontWeight: "bold" }}>
                        {props.name}
                    </Typography>
                    <Typography align={props.align} variant="h5" sx={{ fontSize: "20px", color: "white", fontFamily: "inter", fontWeight: "bold" }}>
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