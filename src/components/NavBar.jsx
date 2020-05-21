import React from 'react';
import '../assets/styles/style.css';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


import {
    HomeDiscordIcon,
    AddServerIcon,
    ExploreIcon,
    DownloadIcon} from '../utils/CustomIcon';

import ExplorePage from "../pages/ExplorePage";

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
                <Box p={0}>
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        color: '#fff',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        background: '#202225',
        color: '#fff',
        minHeight: theme.spacing(80),
        minWidth: theme.spacing(9),
        position: 'sticky'
    },
    myRoot: {
        borderRadius: theme.shape.borderRadius,
        height: theme.spacing(9),
        minHeight: theme.spacing(9),
        width: theme.spacing(9),
        minWidth: theme.spacing(9),

    },
    myWrapper:{
        padding: theme.spacing(0),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.spacing(4),
        minHeight: theme.spacing(7),
        minWidth: theme.spacing(7),
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}));

export default function NavigationBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} icon={<HomeDiscordIcon/> } {...a11yProps(0)} />
                <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} icon={<AddServerIcon/> } {...a11yProps(1)} />
                <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} icon={<ExploreIcon/> } {...a11yProps(2)} />
                <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} icon={<DownloadIcon/> } {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <><ExplorePage/></>
            </TabPanel>
            <TabPanel value={value} index={1}>
                BB
            </TabPanel>
            <TabPanel value={value} index={2}>
                CC
            </TabPanel>
            <TabPanel value={value} index={3}>
                DD
            </TabPanel>
        </div>
    );
}