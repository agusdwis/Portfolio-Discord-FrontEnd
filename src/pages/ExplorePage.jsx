import React from 'react';
import '../assets/styles/style.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
    ExploreIcon,
    MusicIcon,
    GamingIcon,
    EducationIcon,
    ScienceIcon,
    ContentIcon,
    AnimeMangaIcon,
    MoviesTVIcon
} from '../utils/CustomIcon';
import withStyles from "@material-ui/core/styles/withStyles";
import GuildPage from "./GuildPage";
import Icon from "@material-ui/core/Icon";

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: theme.spacing(300),
        width: '100%',
        background: '#36393F',
        color: '#fff',
    },
    tabRoot: {
        width: theme.spacing(30),
        minWidth: theme.spacing(20),
        height: theme.spacing(6),
        background: '#2F3136',
        textTransform: "none",

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        background: '#2F3136',
        color: '#fff',
        minHeight: theme.spacing(80),
        fontSize: theme.spacing(20),

    },
    title: {
        fontSize: theme.spacing(3),
        padding: theme.spacing(2)
    },
    icon: {
        paddingRight: theme.spacing(2),
    },
}));

const MyTab = withStyles(theme => ({
    root: {
        borderRadius: theme.shape.borderRadius,
        height: theme.spacing(5),
        width: 200
    },
    wrapper: {
        marginBottom: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
}))(Tab);

export default function Explore() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div className={classes.root} >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    scrollButtons="auto"
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Typography className={classes.title}>
                        Discover
                    </Typography>
                    <MyTab className={classes.tabRoot} label={<> <ExploreIcon className={classes.icon}/> Home </>} {...a11yProps(0)} />
                    <MyTab className={classes.tabRoot} label={<> <GamingIcon className={classes.icon}/> Gaming </>} {...a11yProps(1)} />
                    <MyTab className={classes.tabRoot} label={<> <MusicIcon className={classes.icon}/> Music </>} {...a11yProps(2)} />
                    <MyTab className={classes.tabRoot} label={<> <EducationIcon className={classes.icon}/> Education </>} {...a11yProps(3)} />
                    <MyTab className={classes.tabRoot} label={<> <ScienceIcon className={classes.icon}/> Science & Tech </>} {...a11yProps(4)} />
                    <MyTab className={classes.tabRoot} label={<> <ContentIcon className={classes.icon}/> Content Creator </>} {...a11yProps(5)} />
                    <MyTab className={classes.tabRoot} label={<> <AnimeMangaIcon className={classes.icon}/> Anime & Manga </>} {...a11yProps(6)} />
                    <MyTab className={classes.tabRoot} label={<> <MoviesTVIcon className={classes.icon}/> Movies & TV </>} {...a11yProps(7)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    AA
                </TabPanel>
                <TabPanel value={value} index={1}>
                    AA
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Gaming
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Music
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Education
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Science & Tech
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Content Creator
                </TabPanel>
                <TabPanel value={value} index={7}>
                    Anime & Manga
                </TabPanel>
                <TabPanel value={value} index={8}>
                    Movies & TV
                </TabPanel>
            </div>
        </React.Fragment>
    );
}