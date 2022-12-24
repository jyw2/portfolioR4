import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../styles/hoverBump.css';
import colors from '../styles/colors';

function Project(props) {
    let subTitleFlipFlop = true
    function getSubTitleLineShift(line) {
        subTitleFlipFlop = !subTitleFlipFlop
        return (subTitleFlipFlop ? 1 : -1) * 30 * (line.length / 3)
    }

    return (
        <Container
            sx={{ position: "relative", width: "fit-content", margin: '20px', zIndex: "6" }} disableGutters>
            <Container
                sx={{
                    zIndex: "0", position: "absolute", top: "10px",
                    left: "20px", width: "400px", height: "550px", backgroundColor: colors.secondary,
                    padding: "40px", borderRadius: '10px'
                }} />
            <Container
                className="hoverBump"
                sx={{
                    zIndex: "3",
                    position: "relative",
                    width: "400px",
                    height: "550px",
                    backgroundImage: `url(${props.image})`,
                    backgroundColor: "black",
                    padding: "40px", borderRadius: '10px'
                }} >

                {props.subTitle.split("/").map(line =>
                    <Typography align="center" variant="h5" key={line} sx={{
                        fontSize: "30px",
                        lineHeight: "24px",
                        fontFamily: "inter",
                        fontWeight: "bold",
                        marginLeft: `${getSubTitleLineShift(line)}px`,
                        color: colors.secondaryLight
                    }}>{line}</Typography>
                )}

                {props.name.split("/").map(line => <Typography align="center" key={line} variant="h5" sx={{
                    fontSize: '60px',
                    letterSpacing: '-4px',
                    fontFamily: "inter",
                    fontWeight: "bold",
                    color: colors.secondaryLight,
                }}>{line}</Typography>)}

                <Typography align="left" sx={{ color: colors.secondary, padding: "40px 40px 10px 40px" }}>
                    {props.description}
                </Typography>
                <Typography align="left" sx={{ color: colors.secondary, padding: "10px 40px 0px 40px", }}>
                    {props.keywords.join(", ")}
                </Typography>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center"
                    sx={{ position: "absolute", top: "430px", left: "79px" }}>
                    <Button disabled={(props.codeLink == "")} target="_blank" href={props.codeLink}
                        sx={{ textTransform: "unset", width: "100px", backgroundColor: "white", color: "black" }}
                        variant="contained">code</Button>
                    <Button disabled={(props.viewLink == "")} target="_blank" href={props.viewLink}
                        sx={{ textTransform: "unset", backgroundColor: "white", color: "black" }}
                        variant="contained">see it in action</Button>
                </Stack>
            </Container >
        </Container >
    )
}

export default Project