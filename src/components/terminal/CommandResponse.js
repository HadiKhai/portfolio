import React from 'react';
import {makeStyles, Box} from '@material-ui/core';
import './TerminalShell.css'
import {CD, HELP, HISTORY, LS} from "../../types/commands";

const useStyles = makeStyles(() => ({
    prompt: {
        color: "white",
        alignItems: 'flex-start'
    },
    response: {
        color: "white",
        fontFamily: 'Fira Code'
    },
    file: {
        color: 'white',
        marginRight: 10
    },
    folder: {
        color: '#00A8E8',
        marginRight: 10
    }
}))

const CommandResponse = ({responseProps}) => {
    const classes = useStyles();

    const command = responseProps? responseProps.cmd:'';
    const content = responseProps? responseProps.content:[];
    const error = responseProps? responseProps.content:false;
    const dir = responseProps? responseProps.dir:'';
    const Response = () => {
        switch(command) {
            case HELP: {
                const help = [];
                content.forEach( commandDescription => {
                    if(typeof commandDescription === 'string'){
                        help.push(<li>{commandDescription}</li>)
                    }
                    if(typeof commandDescription === 'object'){
                        help.push(<li>{commandDescription[0]}</li>)
                        help.push(<ul>
                           { [...commandDescription].splice(1).map(e =>
                                <li>{e}</li>
                            )}
                        </ul>)
                    }
                })
                return (
                    <ul>
                        {help}
                    </ul>
                )
            }
            case LS:{
                const folderAndFiles = [];
                content.map(item => {
                    if(item.endsWith('.txt')){
                        folderAndFiles.push(
                            <span className={classes.file}>{item}</span>
                        )
                    }
                    else{
                        folderAndFiles.push(<span className={classes.folder}>{item}</span>);
                    }

                })
                return (
                    <p>{folderAndFiles}</p>
                )
            }

            case HISTORY:{
                const history = []

                for(let i=0; i<content.length; i++){
                    history.push(<span>{i+1} {content[i]} <br /></span>)
                }
                return (
                    <span>
                        {history}
                    </span>
                )
            }
            case CD:
                if(error){
                    return (
                     <p>{command}: {dir}: {content}</p>
                    )
                }
                return (
                    <div></div>
                )
            case '':
                return (
                    <div></div>
                )
            default:
                return <p>{command}: {content}</p>
        }
    }

    return (
        <Box display="flex" flexdirection="row" className={classes.prompt}>
            <Box className={classes.cmd}>
                <span>

                    {Response()}

                </span>
            </Box>
        </Box>
    )


}

export default CommandResponse;