import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        color: 'white',
        height: '100%',
        width: '100%',
    },
}))
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <p> Made By HadiKhai</p>
            <p> With React.JS</p>
        </div>
    )
}

export default Footer;
