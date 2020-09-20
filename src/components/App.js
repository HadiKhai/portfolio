import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Terminal from "./terminal/Terminal";
import Box from "@material-ui/core/Container";
import Footer from "./footer/Footer";
const useStyles = makeStyles((theme) => ({
    main: {
        background: '#003459',
        height: '100%',
        width: '100%',
        fontFamily: 'Fira Code',

    },
    elements:{
        marginTop: '5vh',
    },
    terminal: {
        textAlign: "left",
        margin: "auto",
        position: "relative",
        display: "block",
        padding: 0
    },
    footer: {
        marginTop: '15vh'
    }
}))
const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Box container='true' display="flex" align="center" flexdirection="column" className={classes.elements}>
                <Box className={classes.terminal}>
                    <Terminal/>
                </Box>
                <Box className={classes.footer}>
                    <Footer/>
                </Box>
            </Box>
        </div>
    )
}

export default App;
