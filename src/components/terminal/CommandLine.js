import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import './TerminalShell.css'
import sendCommand from "../../actions";

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
const CommandLine = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            dispatch(sendCommand(e.currentTarget.textContent));
        }
    }

    return (
        <div>
            <span> root@HadiKhai: </span>
            <span className={classes.directory}> ~</span>
            <span className={classes.line}>
                <span className={classes.variable}>$</span>
                <span type="text"  onKeyPress={handleKeyPress} contentEditable={true} spellCheck="false" className={classes.cmd}></span>
            </span>
        </div>
    )
}

export default CommandLine;
