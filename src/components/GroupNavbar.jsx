import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import GuildDiscovery from "./GuildDiscovery";
import BottomNavBar from "./BottomNavigation";
import {
    ExploreIcon,
    GamingIcon,

} from '../utils/CustomIcon';
import IconButton from "@material-ui/core/IconButton";


const myTab = [
    {
        name: 'Home',
        icon: <ExploreIcon/>,
    },
    {
        name: 'Gaming',
        icon: <GamingIcon/>
    },

];


const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     color: '#B9BBBE',
    // },
    // sideBarContainer: {
    //     margin: 0,
    //     padding: 0,
    //     border: 0,
    // },
    // menuContainer: {
    //     position: 'relative'
    // },
    // icon: {
    //     paddingRight: theme.spacing(2),
    //     textDecoration: 'none',
    //     alignItems: 'center'
    // },
    // itemInner: {
    //     marginBottom: theme.spacing(1),
    //     borderRadius: 5,
    //     paddingTop: '5px',
    //     paddingRight: '10px',
    //     paddingBottom: '5px',
    //     paddingLeft: '8px',
    //     alignItems: 'center',
    //     display: 'flex',
    //     '&:active': {
    //         backgroundColor: '#7289da',
    //         outline: 'none',
    //     },
    //     '&:hover': {
    //         backgroundColor: '#36393F',
    //         outline: 'none',
    //     },
    // },
    sideBar: {
        flexDirection: 'column',
        minHeight: 0,
        width: '240px',
        flex: '0 0 auto',
    },
    sideMenuContainer: {
        display: 'flex',

    },
    header : {
        position: 'relative',
        fontWeight: 500,
        padding: '0 16px',
        height: '48px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        zIndex: 3,
        transition: 'background-color .1s linear',
    },
    guildName: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        flex: 1,
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
    const urlImage = "{require('../assets/images/Guid-Home/1-MINECRAFT-banner.jpg')}"
    return (
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}  style={{backgroundColor: '#2F3136'}}>
                    <Grid container spacing={0}>
                        <div className={classes.sideBar}>

                            <nav className={classes.sideMenuContainer}>

                                <header className={classes.header}>
                                    <div className="guildIconContainer">
                                        <div className="flowerStarContainer verified background guildBadge"
                                             style={{width: '16px', height: '16px'}}>
                                            <svg aria-label="Verified" className="flowerStar" aria-hidden="false" width="16" height="16"
                                                 viewBox="0 0 16 15.2">
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
                                    <IconButton className={classes.menuDown} style={{color: '#fff'}} aria-label="show">
                                        <KeyboardArrowDownIcon/>
                                    </IconButton>
                                </header>
                                <div className="animatedContainer" style={{opacity: 1, transform: 'translateY(0px)'}}>
                                    <div className="bannerImage" style={{backgroundImage: "url('https://cdn.discordapp.com/banners/302094807046684672/d0a8bc0fb8b41c3759d0df5dc9a6b467.jpg?size=512')", marginBottom: '100px'}}>
                                    </div>
                                </div>

                            </nav>

                        </div>
                    </Grid>

                    <Grid container>
                        <BottomNavBar/>
                    </Grid>

                </Grid>
                <Grid item xs={12} lg={8}  style={{backgroundColor: '#36393F', position: 'relative'}}>
                    <GuildDiscovery/>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}