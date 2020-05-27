import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {HomeDiscordIcon, MicrophoneIcon, HeadphoneIcon, SettingIcon} from "../utils/CustomIcon";
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from '@material-ui/core/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const status = '#0bff41';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        backgroundColor: '#292B2F',
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

export default function BottomNavBar(props, postLogout) {

    postLogout = async () => {
        await props.doSignOut();
    };

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const is_login = localStorage.getItem('is_login');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);

    };

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            classes={{root:classes.root}}
        >
            {props.login || is_login ?
                <BottomNavigationAction onClick={handleClickOpen} classes={{root: classes.actionRoot, selected: classes.selectedRoot}}
                                        label={props.data.username} icon={<HomeDiscordIcon style={{color: status}}/>}/>
                :
                <BottomNavigationAction classes={{root: classes.actionRoot, selected: classes.selectedRoot}}
                                        label="guest" icon={<HomeDiscordIcon style={{color: '#ff150c'}}/>}/>
            }

            <BottomNavigationAction classes={{root: classes.actionRoot, wrapper:classes.wrapperRoot, selected:classes.selectedRoot}} label="" icon={<MicrophoneIcon style={{color: '#fff'}} />} />
            <BottomNavigationAction classes={{root: classes.actionRoot, wrapper:classes.wrapperRoot, selected:classes.selectedRoot}} label="" icon={<HeadphoneIcon style={{color: '#fff'}} />} />
            <BottomNavigationAction onClick={handleClick} classes={{root: classes.actionRoot, wrapper:classes.wrapperRoot, selected:classes.selectedRoot}} label="" icon={<SettingIcon style={{color: '#fff'}} />} />

            {/*Menu Section*/}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to={'#'}><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                {props.login || is_login ?
                    <Link onClick={()=>postLogout()} to={'#'}><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
                    :
                    <Link to={'/login'}><MenuItem onClick={handleClose}>Login</MenuItem></Link>
                }
            </Menu>

            {/*Profile Section*/}
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title"><strong>Profile: {props.data.username}</strong></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Paper elevation={0} style={{padding: '10px', color: 'white'}}>
                        {props.info.name ?
                            <p>Name: {props.info.name}</p>
                            :
                            <p>Name: {props.info.username} </p>
                        }
                        <p>Username: {props.info.username}</p>
                        <p>Email: {props.info.email}</p>
                        </Paper>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </BottomNavigation>
    );
}
