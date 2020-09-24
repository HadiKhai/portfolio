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
        marginTop: '5vh',
    }
}))
const App = () => {
    const classes = useStyles();
    return (
            <Box container='true' display="flex" align="center" flexdirection="column" className={classes.main}>
                    <Terminal/>
                    <Footer/>
            </Box>
    )
}

export default App;
