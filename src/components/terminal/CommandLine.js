import React, {useState} from 'react';
import {TextField, makeStyles, createMuiTheme, Box, ThemeProvider} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import './TerminalShell.css'
import {fetchDirectoryContent, sendCommand, sendEmptyCommand,sendCommandNotFound, sendResponse} from '../../actions'
import {CD_HELP, HELP, LS, LS_HELP,HISTORY_HELP,CAT_HELP,CLEAR_HELP} from "../../types/commands";

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            input: {
                fontFamily: 'Fira Code',
                color: 'white',
                width: '100%',
            }
        }
    }
});


const useStyles = makeStyles((theme) => ({
    directory: {
        color: '#00a8e8'
    },
    variable: {
        marginRight: 0
    },
    cmd: {
        color: "white",
        height: 20,
        flex: '1',

    },
    user: {
        flex: '0 1 auto',
        overflow: 'hidden',
        marginRight: 10
    },
    prompt: {
        alignItems: 'flex-start'
    }
}))
const CommandLine = ({cmdProps}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [command,setCommand] = useState(cmdProps.cmd);
    const [args,setArgs] = useState(cmdProps.args);
    const [directory, setDirectory] = useState(cmdProps.dir)
    const status = !cmdProps.status;
    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            setCommand('')
            const line = e.target.value
            const words = line.split(' ');
            const cmd = words[0];
            const arg = line.slice(cmd.length+1);

            dispatch(sendCommand(words[0],arg, directory, false));


            switch(cmd) {
                case HELP:
                    dispatch(sendResponse([LS_HELP,CD_HELP,HISTORY_HELP,CAT_HELP,CLEAR_HELP],HELP))
                    break;
                case LS:
                    dispatch(fetchDirectoryContent(directory))
                    break;
                case '':
                    dispatch(sendEmptyCommand())
                    break;
                default:
                    dispatch(sendCommandNotFound(cmd))
            }
        }
    }

    const handleChange = (event) => {
        setCommand(event.target.value);
    };

    const dir = () => {

        if (directory === 'root') {
            return '';
        }
        return `/${directory}`

    }

    return (
        <Box display="flex" flexdirection="row" className={classes.prompt}>
            <Box className={classes.user}>
                <span>root@HadiKhai: </span>
                <span className={classes.directory}> ~{dir()}</span>
                <span className={classes.variable}>$ </span>
            </Box>
            <Box className={classes.cmd}>
                <ThemeProvider theme={theme}>
                    <TextField
                        fullWidth
                        id="cmd"
                        autoComplete='off'
                        value={status? `${command} ${args}` : command}
                        onChange={handleChange}
                        disabled={status}
                        onKeyUp={handleKeyPress}
                        height={20}
                        className={classes.textField}
                        InputProps={{
                            style: {
                                height: 20,
                                padding: '0 0 0 0',
                            },
                            disableUnderline: true,
                        }}
                    />
                </ThemeProvider>
            </Box>
        </Box>
    )


}

export default CommandLine;
