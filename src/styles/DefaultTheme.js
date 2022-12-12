import { createTheme } from "@mui/material"

const defaultTheme = createTheme({
    pallete: {
        primary: {
            light: "#111111",
            main: "#000000"
        },
        secondary: {
            dark: "#F0EEE9",
            main: "#FFFFFF",
            light: "#B8EB42"
        },
    },
    typography: {
        fontFamily: "inter"
    }

})
export default defaultTheme