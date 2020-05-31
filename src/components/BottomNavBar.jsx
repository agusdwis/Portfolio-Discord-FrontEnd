import React from 'react';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Transition from "react-transition-group/Transition";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from 'prop-types';
import {
    HomeDiscordIcon,
    MicrophoneIcon,
    HeadphoneIcon,
    SettingIcon} from "../utils/CustomIcon";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const myStyles = makeStyles((theme) => ({
    rootNavBar:{
        width: '100%',
        position: 'fixed',
        backgroundColor: '#292B2F',
        color: '#fff',
        bottom: 0,
        zIndex: 99999999,
        fontSize: 'small',
        [theme.breakpoints.up('lg')]: {
            width: '15.8%',
            zIndex: 9999999
        },
    },
    selectedRoot: {
        color: '#fff',
    },
    actionRoot: {
        color: '#fff',
        minWidth: '40px',
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function BottomNavBar(props, postLogout) {
    // post logout
    postLogout = async () => {
        await props.doSignOut();
    };

    // set state
    const classes = myStyles();
    const [value, setValue] = React.useState(0);
    const [setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    // handle func
    const handleClose = () => {setAnchorEl(null)};
    const handleClickOpen = () => {setOpen(true)};
    const handleClickClose = () => {setOpen(false)};
    const handleChange = (event, newValue) => {setValue(newValue)};

    return (
        <React.Fragment>

            {/*Profile Section*/}
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label="My Account" {...a11yProps(0)} />
                        <Tab label="Privacy and Safety" {...a11yProps(1)} />
                        <Tab label="Authorized Apps" {...a11yProps(2)} />
                        <Tab label="Connections" {...a11yProps(3)} />
                        <Tab label="Billing" {...a11yProps(4)} />
                        <Tab label="Notification" {...a11yProps(5)} />
                        <Tab onClick={()=>postLogout()} label="Log Out" {...a11yProps(6)} />
                        <Tab onClick={handleClickClose} label="Close" {...a11yProps(7)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Paper style={{minWidth: '30vw'}}>*/}
                            <DialogTitle style={{color: '#ff1513'}} id="responsive-dialog-title"><strong><h3>Profile</h3></strong></DialogTitle>
                            <DialogContent>

                                <Paper elevation={0} style={{padding: '10px', color: 'white'}}>
                                    {props.info.name ?
                                        <p>Name: {props.info.name}</p>
                                        :
                                        <p>Name: {props.info.username}</p>
                                    }
                                </Paper>
                                <Paper elevation={0} style={{padding: '10px', color: 'white'}}>
                                    <p>Username: {props.info.username}</p>
                                </Paper>
                                <Paper elevation={0} style={{padding: '10px', color: 'white'}}>
                                    <p>Email: {props.info.email}</p>
                                </Paper>

                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleClickClose} color="secondary" autoFocus>
                                    Close
                                </Button>
                            </DialogActions>
                        </Paper>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </div>
            </Dialog>

            {/*Bottom NavBar*/}
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                classes={{root:classes.rootNavBar}}
            >

                <BottomNavigationAction
                    classes={{root: classes.actionRoot, selected: classes.selectedRoot}}
                    label={props.data.infos.username}
                    icon={<HomeDiscordIcon style={{color: '#0bff41'}}/>}/>
                <BottomNavigationAction
                    classes={{root: classes.actionRoot}}
                    label=""
                    icon={<MicrophoneIcon style={{color: '#fff'}} />} />
                <BottomNavigationAction
                    classes={{root: classes.actionRoot}}
                    label=""
                    icon={<HeadphoneIcon style={{color: '#fff'}} />} />
                <BottomNavigationAction
                    onClick={handleClickOpen}
                    classes={{root: classes.actionRoot}}
                    label=""
                    icon={<SettingIcon style={{color: '#fff'}} />} />

            </BottomNavigation>
        </React.Fragment>
    );
}
