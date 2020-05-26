import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import BottomNavBar from "./BottomNavigation";
import IconButton from "@material-ui/core/IconButton";
import '../assets/styles/chatpages.css';
import Chats from "./ChatComponent";


const myTag = [
    {
        name: 'faq',
    },
    {
        name: 'help',
    },
    {
        name: 'announcements',
    },
    {
        name: 'about',
    },

];


const useStyles = makeStyles((theme) => ({
    sideBar: {
        flexDirection: 'column',
        minHeight: 0,
        width: '240px',
        flex: '0 0 auto',
        display: 'flex',
        overflow: 'hidden',
    },
    navContainer: {
        display: 'flex',

    },
    header : {
        position: 'fixed',
        fontWeight: 500,
        padding: '0 16px',
        height: '48px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        zIndex: 3,
        transition: 'background-color .1s linear',
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            marginLeft: '100px'
        },
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
    return (
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}  style={{backgroundColor: '#2F3136'}}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <div className={classes.sideBar}>

                            <nav className={classes.navContainer}>

                                <div className={"container-nav clickable"}>
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
                                </div>

                                <div className={"scrollerWrap"}>
                                    <div className={"scrollerA1"}>
                                        <div id={'channels'} role='lists' aria-label={"Channels"} tabIndex={"0"}>
                                            <div style={{width: '100', height: '84px', visibility: 'hidden'}}/>
                                            <div className="containerDefault" role="listitem" draggable="true">
                                                <div className="iconVisibility wrapper-CU clickable"
                                                     tabIndex="-1" aria-label="Welcome (category)" aria-expanded="true"
                                                     aria-setsize="29" aria-posinset="1" id="channels-0" role="button">
                                                    <svg className="icon-1" width="24" height="24"
                                                         viewBox="0 0 24 24">
                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"/>
                                                    </svg>
                                                    <h2 className="name-3" style={{fontWeight: 'bold'}}>Welcome</h2>
                                                    <div className="children-B"/>
                                                </div>
                                            </div>

                                            <div className="containerDefault-1 selected-3">
                                                <div className="iconVisibility wrapper-1ucjTd modeSelected-1zApJ_" tabIndex="0"
                                                     aria-label="rules (text channel)" aria-setsize="29" aria-posinset="2" id="channels-1" role="button">
                                                    <div className="content-3at_AU">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" className="icon-1">
                                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                                                  d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"/>
                                                        </svg>
                                                        <div className="name-3">general</div>
                                                        <div className="children-B">
                                                            <div className="iconItem-1 iconBase-2" aria-label="Invite to Server">
                                                                <div>
                                                                    <div className="" tabIndex="0" role="button">
                                                                        <svg className="actionIcon-2" aria-hidden="false" width="16" height="16"
                                                                             viewBox="0 0 16 16">
                                                                            <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                                                            <path fill="currentColor"
                                                                                  d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                                                            <path fill="currentColor"
                                                                                  d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {myTag.map((item, index) => (
                                                <div key={index} className="containerDefault-1">
                                                    <div className="iconVisibility wrapper-1ucjTd modeSelected-1zApJ_" tabIndex="0"
                                                         aria-label="rules (text channel)" aria-setsize="29" aria-posinset="2" id="channels-1" role="button">
                                                        <div className="content-3at_AU">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" className="icon-1">
                                                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                                                      d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"/>
                                                            </svg>
                                                            <div className="name-3">{item.name}</div>
                                                            <div className="children-B">
                                                                <div className="iconItem-1 iconBase-2" aria-label="Invite to Server">
                                                                    <div>
                                                                        <div className="" tabIndex="0" role="button">
                                                                            <svg className="actionIcon-2" aria-hidden="false" width="16" height="16"
                                                                                 viewBox="0 0 16 16">
                                                                                <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                                                                <path fill="currentColor"
                                                                                      d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                                                                <path fill="currentColor"
                                                                                      d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </nav>

                        </div>
                        </Grid>
                        <Grid container spacing={0}>
                            <BottomNavBar/>
                        </Grid>
                    </Grid>


                </Grid>
                <Grid item xs={12} lg={10}  style={{backgroundColor: '#36393F', position: 'relative'}}>
                    <Chats/>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}