import React from 'react';
import {makeStyles, Box} from '@material-ui/core';
import './TerminalShell.css'
import {CAT, CD, DOWNLOAD, HELP, HISTORY, LS} from "../../types/commands";

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
    pdf: {
        color: '#67e8b2',
        marginRight: 10
    },
    folder: {
        color: '#00A8E8',
        marginRight: 10
    },
    photo:{
        color: '#e8e060',
        marginRight: 10
    }
}))

const CommandResponse = ({responseProps,componentId}) => {
    const classes = useStyles();

    const command = responseProps? responseProps.cmd:'';
    const content = responseProps? responseProps.content:[];
    const error = responseProps? responseProps.error:false;
    const dirOrFile = responseProps? responseProps.dirOrFile:'';
    const Response = () => {
        switch(command) {
            case HELP: {
                const help = [];
                content.forEach( (commandDescription,i) => {
                    if(typeof commandDescription === 'string'){
                        help.push(<li key={`${componentId}-${i}`}>{commandDescription}</li>)
                    }
                    if(typeof commandDescription === 'object'){
                        help.push(<li key={`${componentId}-${i}`}>{commandDescription[0]}</li>)
                        help.push(<ul key={`${componentId}-${i}-ul`}>
                           { [...commandDescription].splice(1).forEach((e,j) =>
                                <li key={`${componentId}-${i}-${j}`}>{e}</li>
                            )}
                        </ul>)
                    }
                })
                return (
                    <ul key={componentId}>
                        {help}
                    </ul>
                )
            }
            case LS:{
                const folderAndFiles = [];
                content.forEach((item,i) => {
                    if(item.endsWith('.txt')){
                        folderAndFiles.push(
                            <span key={`${componentId}-${i}`} className={classes.file}>{item}</span>
                        )
                    }
                    else if(item.endsWith('.pdf')){
                        folderAndFiles.push(
                            <span key={`${componentId}-${i}`} className={classes.pdf}>{item}</span>
                        )
                    }
                    else if(item.endsWith('.jpeg')){
                        folderAndFiles.push(
                            <span  key={`${componentId}-${i}`}className={classes.photo}>{item}</span>
                        )
                    }
                    else{
                        folderAndFiles.push(<span  key={`${componentId}-${i}`} className={classes.folder}>{item}</span>);
                    }

                })
                return (
                    <p key={componentId}>{folderAndFiles}</p>
                )
            }

            case HISTORY:{
                const history = []

                for(let i=0; i<content.length; i++){
                    history.push(<span  key={`${componentId}-${i}`}>{i+1} {content[i]} <br /></span>)
                }
                return (
                    <p key={componentId}>
                        {history}
                    </p>
                )
            }
            case CD:
                if(error){
                    return (
                     <p key={componentId}>{command}: {dirOrFile}: {content}</p>
                    )
                }
                return (
                    <div key={componentId}></div>
                )
            case DOWNLOAD:
                if(error){
                    return (
                        <p key={componentId}>{command}: {dirOrFile}: {content}</p>
                    )
                }
                return (
                    <div key={componentId}></div>
                )
            case CAT:
                if(error){
                    return (
                        <p key={componentId}>{command}: {dirOrFile}: {content}</p>
                    )
                }
                const links = [];

                content.forEach((link,i) =>{
                    links.push(<span key={`${componentId}-${i}`}>{link} <br /> </span>)
                })

                return (
                    <p key={componentId}>{links}</p>
                )
            case '':
                return (
                    <div key={componentId}></div>
                )
            default:
                return <p key={componentId}>{command}: {content}</p>
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
