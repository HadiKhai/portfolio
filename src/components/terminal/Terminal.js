import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
import TerminalHeader from "./TerminalHeader";
import TerminalShell from "./TerminalShell";
import {useDispatch} from "react-redux";
import {fetchDirectoryContent} from "../../actions";

const useStyles = makeStyles(() => ({
    main:{
        marginBottom: 50
    }
}));

const Terminal = () => {
    const dispatch = useDispatch();

    useEffect( ()=> {
        dispatch(fetchDirectoryContent())}
    )


    const classes = useStyles();
    return (
        <Box display="flex" align="center" flexdirection="column" className={classes.main}>
                <TerminalHeader />
                <TerminalShell />
        </Box>
    )
};


export default Terminal;
