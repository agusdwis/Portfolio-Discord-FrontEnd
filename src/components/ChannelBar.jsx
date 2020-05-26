import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import BottomNavBar from "./BottomNavigation";
import ChannelList from "./ChannelBarComp";
import Toolbar from "@material-ui/core/Toolbar";

import '../assets/styles/chatpages.css';


const useStyles = makeStyles((theme) => ({
    sideBar: {
        flexDirection: 'column',
        minHeight: 0,
        width: '100%',
        flex: '0 0 auto',
        display: 'flex',
        overflow: 'hidden',
    },
    navContainer: {
        display: 'flex',

    },
    header : {
        position: 'sticky',
        fontWeight: 500,
        padding: '0 16px',
        height: '48px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        zIndex: 3,
        top: 0,
        transition: 'background-color .1s linear',
    },
    guildName: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        color: '#fff'
    },
    menuDown: {
        position: 'relative',
        opacity: 0.8,
        marginLeft: '3vmin',
    }
}));

export default function ChannelNavbar () {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <div className={classes.sideBar}>
                    <Toolbar style={{justifyContent: 'center', alignItems: 'center'}}>
                        <div className="guildIconContainer">
                            <div className="flowerStarContainer verified background guildBadge"
                                 style={{width: '16px', height: '16px'}}>
                                <svg aria-label="Verified" className="flowerStar" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
                                    <path fill="currentColor" fillRule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"/>
                                </svg>
                                <div className="childContainer">
                                    <svg className="icon" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
                                        <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h1 className={classes.guildName}>MINECRAFT</h1>
                    </Toolbar>
                    <ChannelList/>
                </div>
            </Grid>

            <Grid container spacing={0}>
                <BottomNavBar/>
            </Grid>
        </React.Fragment>
    );
}