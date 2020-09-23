import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
import CommandLine from "./CommandLine";

import './TerminalShell.css';
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    main: {
        textAlign: 'left',
        height: 600,
        width: '100%',
        padding: 2,
        background: '#007EA7',
        color: '#00171F',
        borderRadius: '0 0 10px 10px',

    },
    welcome: {
        padding: '0',
    },
    shell: {
        marginTop: 10
    },
    directory: {
        color: '#00a8e8'
    },
    variable: {
        marginRight: 10
    },
    cmd: {
        color: "white"

    },
    line: {
        width: '100%',
    }
}))

const TerminalShell = () => {
    const command = useSelector(state => state.cmd)
    const CMD = () => {
        const commandHistory= [...command]
        commandHistory.push(['','root',true])
        console.log(commandHistory)
        return (
            commandHistory
                .map(cmd => (
                    <CommandLine cmdProp={cmd}/>
                )
            )
        )

    }

    const classes = useStyles();
    return (
        <Box display="flex" align="center" flexdirection="column" className={classes.main}>
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

