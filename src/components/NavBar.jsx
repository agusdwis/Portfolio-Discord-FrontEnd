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
        // height: '100%',
        // width: '100%',
        // minWidth: theme.spacing(10),
        // minHeight: theme.spacing(6),

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        background: '#202225',
        color: '#fff',
        minHeight: theme.spacing(80),
    },
    tabRoot: {
        // minWidth: theme.spacing(9),
        // width: theme.spacing(9),
        // minHeight: theme.spacing(6),
        // height: theme.spacing(6),

    },
}));

const MyTab = withStyles(theme => ({
    root: {
        borderRadius: theme.shape.borderRadius,
        height: theme.spacing(9),
        minHeight: theme.spacing(9),
        width: theme.spacing(9),
        minWidth: theme.spacing(9),
    },
    wrapper: {
        padding: theme.spacing(0),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.spacing(4),
        minHeight: theme.spacing(7),
        minWidth: theme.spacing(7),
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    icon : {
        fontSize: 1000
    }
}))(Tab);

export default function NavigationBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // style={{position: "fixed", bottom:"0", width:"100%"}}
    return (
        <div className={classes.root} >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <MyTab icon={<HomeDiscordIcon/> } {...a11yProps(0)} />
                <MyTab icon={<AddServerIcon/> } {...a11yProps(1)} />
                <MyTab icon={<ExploreIcon/> } {...a11yProps(2)} />
                <MyTab icon={<DownloadIcon/> } {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                AA
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