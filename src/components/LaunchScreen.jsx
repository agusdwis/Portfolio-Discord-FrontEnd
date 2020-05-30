import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#fff',
    }
}));

export default function LaunchScreen () {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <video width="320" height="240" loop={100} autoPlay>
                    <source src={require('../assets/images/Loading/loading.webm')} type="video/webm"/>
                </video>
                Please Wait...
            </div>
        </React.Fragment>
    )
}


