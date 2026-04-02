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
        return (subTitleFlipFlop ? 1 : -1) * 25 * (line.length / 3)
    }

    return (
        <Container
            sx={{ position: "relative", width: "fit-content", margin: '20px', zIndex: "6", marginLeft:"0px", }} disableGutters>
            <Container
                sx={{
                    zIndex: "0", position: "absolute", top: "10px",
                    left: "20px", width: "300px", height: "400px", backgroundColor: colors.primary,
                    padding: "20px",  borderRadius: '1px'
                }} />
            <Container
                className="hoverBump"
                sx={{
                    zIndex: "3",
                    position: "relative",
                    width: "300px",
                    height: "400px",
                    backgroundImage: `url(${props.image})`,
                    backgroundColor: "black",
                    padding: "20px", borderRadius: '1px',
                }} >
                <Container sx={{
                    position:'absolute',
                    top:0,
                    left:0,
                    backgroundColor:'rgba(0, 0, 0, 0.8)',
                    width: "100%",
                    height:"100%",
                    borderRadius: '1px',
                    zIndex:"0",
                    backdropFilter: "blur(5px)"
                }}>
                </Container>
 
                <Stack justifyContent={"space-between"} height={"100%"} zIndex={2} position="relative" >
                    <Stack justifyContent={"flex-start"} >
                        {props.subTitle.split("/").map(line =>
                            <Typography align="left" variant="h5" key={line} sx={{
                                fontSize: "18px",
                                lineHeight: "17px",
                                fontFamily: "inter",
                                fontWeight: "bold",
                                color: colors.secondaryLight
                            }}>{line}</Typography>
                        )}

                        {props.name.split("/").map(line => <Typography align="left" key={line} variant="h5" sx={{
                            fontSize: '45px',
                            letterSpacing: '-2px',
                            fontFamily: "inter",
                            fontWeight: "bold",
                            marginBottom:"14px",
                            marginTop:"15px",
                            lineHeight:"40px",
                            color: colors.secondaryLight,
                        }}>{line}</Typography>)}

                        <Typography align="left" sx={{ color: colors.secondary, marginBottom: "10px" }}>
                            {props.description}
                        </Typography>
                        <Typography align="left" sx={{ color: colors.secondary, marginBottom: "20px"   }}>
                            {props.keywords.join(", ")}
                        </Typography>
                </Stack>
                <Stack spacing={0.5} direction="row" alignItems="center" justifyContent="space-between"
                    sx={{borderRadius:"1px", width:"100%" }}>
                    <Button disabled={(!props.codeLink)} target="_blank" href={props.codeLink}
                        sx={{ textTransform: "unset", backgroundColor: colors.primaryLight, color: "black",borderRadius:"1px", width:"100%" }}
                        variant="contained">code</Button>
                    <Button disabled={(!props.viewLink)} target="_blank" href={props.viewLink}
                        sx={{ textTransform: "unset", backgroundColor: colors.primaryLight, color: "black",borderRadius:"1px", width:"100%" }}
                        variant="contained">site</Button>
                    <Button disabled={(!props.demoLink)} target="_blank" href={props.demoLink}
                        sx={{ textTransform: "unset", backgroundColor: colors.primaryLight, color: "black",borderRadius:"1px", width:"100%" }}
                        variant="contained">demo</Button>
                </Stack>
                </Stack>
                
            </Container >
        </Container >
    )
}

export default Project