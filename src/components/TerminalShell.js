import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
import classNames from 'classnames'
import TerminalHeader from "./TerminalHeader";

const useStyles = makeStyles((theme) => ({
    main: {
        fontFamily: 'Fira Code',
        textAlign: 'left',
        height: 374,
        width: '100%',
        padding: 2,
        background: '#007EA7',
        color: '#003459',

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
    }

}))
const TerminalShell = () => {
    const classes = useStyles();
    return (
        <Box display="flex" align="center" flexDirection="column" className={classes.main}>
            <Box>
                <p className={classes.welcome}>
                    Hello World! Welcome to HadiKhai's CLI! To get started type 'help'
                </p>
            </Box>
            <Box className={classes.shell}>
                <span> root@HadiKhai: </span>
                <span className={classes.directory}> ~</span>
                <span className={classes.variable}>$</span>
                <span contentEditable={true} className="input"></span>
            </Box>
        </Box>
    )
}

export default TerminalShell;
