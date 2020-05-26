import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {HomeDiscordIcon, MicrophoneIcon, HeadphoneIcon, SettingIcon} from "../utils/CustomIcon";
import {Link} from "react-router-dom";

const status = '#0bff41';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        backgroundColor: '#202225',
        color: '#fff',
        bottom: 0,
        zIndex: 1,
        fontSize: 'small',
        [theme.breakpoints.up('lg')]: {
            // display: 'none',
            width: '15.8%',
            zIndex: 0
        },
    },
    actionRoot: {
        color: '#fff',
        minWidth: '40px',
    },
    selectedRoot: {
        color: '#fff',
        fontSize: 'small',
    },
    wrapperRoot: {
        backgroundColor: '#36393F',
        borderRadius: 20,
        maxHeight: '35px',
        height: '35px',
        maxWidth: '35px',
        width: '35px'
    }
}));

export default function BottomNavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            classes={{root:classes.root}}
        >
            <BottomNavigationAction classes={{root: classes.actionRoot, selected:classes.selectedRoot}} label="agsdws" icon={<HomeDiscordIcon style={{color: status}} />} />
            <BottomNavigationAction classes={{root: classes.actionRoot, wrapper:classes.wrapperRoot, selected:classes.selectedRoot}} label="" icon={<MicrophoneIcon style={{color: '#fff'}} />} />
            <BottomNavigationAction classes={{root: classes.actionRoot, wrapper:classes.wrapperRoot, selected:classes.selectedRoot}} label="" icon={<HeadphoneIcon style={{color: '#fff'}} />} />
            <BottomNavigationAction classes={{root: classes.actionRoot, wrapper:classes.wrapperRoot, selected:classes.selectedRoot}} label="" icon={<Link to={'/login'}><SettingIcon style={{color: '#fff'}} /></Link>} />
        </BottomNavigation>
    );
}
