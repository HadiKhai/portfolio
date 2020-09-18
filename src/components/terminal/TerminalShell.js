import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
import CommandLine from "./CommandLine";

import './TerminalShell.css';

const useStyles = makeStyles((theme) => ({
    main: {
        textAlign: 'left',
        height: 600,
        width: '100%',
        padding: 2,
        background: '#007EA7',
        color: '#003459',
        borderRadius: '0 0 10px 10px',

    },
    welcome:{
        padding: '0',
    },
    shell:{
        marginTop: 10
    },
    directory:{
        color: '#00a8e8'
    },
    variable:{
        marginRight: 10
    },
    cmd:{
        color:"white"

    },
    line: {
        width: '100%',
    }
}))
const TerminalShell = () => {

    const CMD = () => {
        return(
            <CommandLine />
        )
    }

    const classes = useStyles();

    return (
        <Box display="flex" align="center" flexDirection="column" className={classes.main}>
            <Box>
                <p className={classes.welcome}>
                    Hello World! Welcome to HadiKhai's CLI! To get started type 'help'
                </p>
            </Box>
            <Box className={classes.shell}>
               {CMD()}
            </Box>
        </Box>
    )
}

export default TerminalShell;
