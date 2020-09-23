import React, {useState} from 'react';
import {TextField, makeStyles, createMuiTheme, Box, ThemeProvider} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import './TerminalShell.css'
import {sendCommand,fetchDirectoryContent} from '../../actions'

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
        marginRight: 0
    },
    cmd: {
        color: "white",
        height: 20,
        flex: '1',

    },
    line: {
        width: '100%',
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
const CommandLine = ({cmdProp}) => {

    const classes = useStyles();
    const [disable, setDisable] = useState(false);
    const dispatch = useDispatch();
    const [command,setCommand] = useState(cmdProp[0]);
    const [directory, setDirectory] = useState(cmdProp[1])
    const status = !cmdProp[2];
    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            setDisable(true);
            dispatch(sendCommand(e.target.value, directory, false));
            dispatch(fetchDirectoryContent('root'))
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
                        value={command}
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
