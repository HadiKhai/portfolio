import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
    main: {
        height: 20,
        background: '#00A8E8',
        width: '100%',
        borderRadius: '8px 8px 0 0',
    },
    exit: {
        background: "#FFFFFF"
    },
    minimize: {
        background:"#003459"
    },
    maximize: {
        background: "#00171F"
    },
    buttons: {
        width: 10,
        height: 10,
        marginTop: 5,
        marginRight: 10,
        display: "inline-block",
        borderRadius: 8
    }
}))
const TerminalHeader = () => {
    const classes = useStyles();
    const btnExit = classNames(classes.buttons,classes.exit)
    const btnMinimize = classNames(classes.buttons,classes.minimize)
    const btnMaximize = classNames(classes.buttons,classes.maximize)

    return (
        <div className={classes.main}>
            <span className={btnExit}></span>
            <span className={btnMinimize}></span>
            <span className={btnMaximize}></span>
        </div>
    )
}

export default TerminalHeader;
