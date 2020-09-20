import React, {useState} from 'react';
import {TextField,makeStyles,createMuiTheme, Box, ThemeProvider}   from '@material-ui/core';
import { useDispatch } from 'react-redux';
import './TerminalShell.css'
import sendCommand from "../../actions";

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            input:{
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
        width: '100%'

    },
    line: {
        width: '100%',
    },
    user: {
        minWidth: 178,
        width:178
    }
}))
const CommandLine = ({cmdProp}) => {
    console.log(cmdProp)
    const classes = useStyles();
    const [disable,setDisable] = useState(false);
    const dispatch = useDispatch();
    const handleKeyPress = e => {
        if(e.key === 'Enter'){
            setDisable(true);
            dispatch(sendCommand(e.target.value));
        }
    }
    if(cmdProp) {
        return (
            <div>
                <Box display="flex" flexDirection="row">
                    <Box className={classes.user}>
                        <span>root@HadiKhai: </span>
                        <span className={classes.directory}> ~</span>
                        <span className={classes.variable}>$</span>
                    </Box>
                    <Box className={classes.cmd}>
                        <ThemeProvider theme={theme}>
                            <TextField
                                fullWidth
                                id="cmd"
                                autoComplete='off'
                                value={cmdProp}
                                disabled={true}
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
            </div>
        )
    }
    return (
        <div>
            <Box display="flex" flexDirection="row">
                <Box className={classes.user}>
                    <span>root@HadiKhai: </span>
                    <span className={classes.directory}> ~</span>
                    <span className={classes.variable}>$</span>
                </Box>
                <Box className={classes.cmd}>
                    <ThemeProvider theme={theme}>
                        <TextField
                            fullWidth
                            id="cmd"
                            autoComplete='off'
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
        </div>
    )

}

export default CommandLine;
