import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Container";
import Terminal from "./Terminal";
const useStyles = makeStyles((theme) => ({
    main: {
        background: '#003459',
        height: '100%',
        width: '100%'
    },
    terminal: {
        textAlign: "left",
        width: "90%",
        height: 400,
        margin: "auto",
        position: "relative",
        display: "block",
        top: "25vh",
        padding: 0
    }
}))
const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Grid container>
                <Grid item xs={12} className={classes.terminal}>
                   <Terminal/>
                </Grid>
            </Grid>
        </div>
    )
}

export default App;
