import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
import TerminalHeader from "./TerminalHeader";
const useStyles = makeStyles((theme) => ({
    main: {
        background: '#007EA7',
        height: '100%',
        width: '100%',
        padding: 0
    },
    header: {
        height: 24,
        width: '100%',
        padding: 0
    }
}))
const Terminal = () => {
    const classes = useStyles();
    return (
        <Box display="flex" align="center" flexDirection="column" className={classes.main}>
            <Box className={classes.header}>
                <TerminalHeader />
            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export default Terminal;
