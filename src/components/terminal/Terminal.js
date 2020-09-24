import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
import TerminalHeader from "./TerminalHeader";
import TerminalShell from "./TerminalShell";

const useStyles = makeStyles(() => ({
    main:{
        marginBottom: 50
    }
}));

const Terminal = () => {
    const classes = useStyles();
    return (
        <Box display="flex" align="center" flexdirection="column" className={classes.main}>
                <TerminalHeader />
                <TerminalShell />
        </Box>
    )
};


export default Terminal;
