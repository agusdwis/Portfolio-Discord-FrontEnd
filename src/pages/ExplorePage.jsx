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
    MoviesTVIcon } from '../utils/CustomIcon';
import GuildPage from "./GuildPage";

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
        background: '#36393F',
        color: '#fff',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        background: '#2F3136',
        color: '#fff',
        minWidth: theme.spacing(30),
        width: theme.spacing(30),
        position: 'sticky'
    },
    title: {
        fontSize: theme.spacing(3),
        fontWeight: 'bold',
        padding: theme.spacing(2)
    },
    icon: {
        paddingRight: theme.spacing(2),
    },

    myRoot: {
        borderRadius: theme.shape.borderRadius,
        height: theme.spacing(6),
        minHeight: theme.spacing(6),
        width: theme.spacing(30),
        minWidth: theme.spacing(30),
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
    },
    myWrapper:{
        paddingLeft: theme.spacing(1),
        marginBottom: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: theme.spacing(6),
        height: theme.spacing(6),
        textTransform: 'none'
    }
}));

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
                    <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} label={<> <ExploreIcon className={classes.icon}/> Home </>} {...a11yProps(0)} />
                    <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} label={<> <GamingIcon className={classes.icon}/> Gaming </>} {...a11yProps(1)} />
                    <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} label={<> <MusicIcon className={classes.icon}/> Music </>} {...a11yProps(2)} />
                    <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} label={<> <EducationIcon className={classes.icon}/> Education </>} {...a11yProps(3)} />
                    <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} label={<> <ScienceIcon className={classes.icon}/> Science & Tech </>} {...a11yProps(4)} />
                    <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} label={<> <ContentIcon className={classes.icon}/> Content Creator </>} {...a11yProps(5)} />
                    <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} label={<> <AnimeMangaIcon className={classes.icon}/> Anime & Manga </>} {...a11yProps(6)} />
                    <Tab classes={{root:classes.myRoot, wrapper:classes.myWrapper}} label={<> <MoviesTVIcon className={classes.icon}/> Movies & TV </>} {...a11yProps(7)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <GuildPage/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <GuildPage/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <GuildPage/>
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