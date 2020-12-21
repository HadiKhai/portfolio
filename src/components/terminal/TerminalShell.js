import React from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
import CommandLine from "./CommandLine";
import CommandResponse from "./CommandResponse";

import './TerminalShell.css';

const useStyles = makeStyles((theme) => ({
    main: {
        textAlign: 'left',
        fontFamily: 'Fira Code',
        overflow: 'auto',
        width: '100%',
        padding: 2,
        background: '#007EA7',
        color: '#00171F',
        borderRadius: '0 0 10px 10px',
        height: '80vh'

    },
    welcome: {
        textAlign: 'center',

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
    help: {
        color: "white"

    },
    line: {
        width: '100%',
    },
    personal:{
        color: '#00A8E8',

    }
}))

const TerminalShell = () => {
    const classes = useStyles();
    const commands = useSelector(state => state.commands);
    const responses = useSelector(state => state.responses);
    const currentDirectory = useSelector(state => state.directory.currentDirectory);
    const CMD = () => {
        const rows = [];
        commands.forEach((command,i)=>{
                if(command.show) {
                    rows.push(
                        <div key={`LineAndResponse-${i}`}>
                            <CommandLine cmdProps={command} key={`Line-${i}`}/>
                            <CommandResponse responseProps={responses[i]} key={`Response-${i}`} componentId={`Response-${i}`}/>
                        </div>
                    )
                }
            }
        )
        return (<div>
            {rows}
        </div>)
    }

    const prompt = () => {
        const conditions = {
            cmd: '',
            args: '',
            dir: currentDirectory,
            status: true,
            shown: true
        }

        return (
            <CommandLine cmdProps={conditions} key={`LineInput`}/>
        )
    }

    return (
        <Box display="flex" align="center" flexdirection="column" className={classes.main}>
            <Box>
                <p className={classes.welcome}>
                    <span>Hello World! Welcome to HadiKhai's CLI! To get started type '<span className={classes.help}>help</span>'<br /></span>
                    <span>Be careful, commands are case-sensitive!</span>
                    <span>Inside the <span className={classes.personal}>personal</span> folder you can find my CV and some other files. Enjoy!</span>

                </p>
            </Box>
            <Box className={classes.shell}>
                {CMD()}
                {prompt()}
            </Box>
        </Box>
    )
}

export default TerminalShell;

