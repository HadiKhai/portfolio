import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
import TerminalHeader from "./TerminalHeader";
import TerminalShell from "./TerminalShell";

const useStyles = makeStyles(() => ({
    header: {
        width: '100%',
        padding: 0,
        position: 'relative'
    },
    shell: {
        width: '100%',
        padding: 0,
        position: 'relative',
    },
}));
const Terminal = () => {
    const classes = useStyles();
    return (

        <Box display="flex" align="center" flexdirection="column" className={classes.terminal}>
            <Box className={classes.header}>
                <TerminalHeader />
            </Box>
            <Box className={classes.shell}>
                <TerminalShell />
            </Box>
        </Box>
    )
};


export default Terminal;
