import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import GuildDiscovery from "./GuildDiscovery";
import BottomNavBar from "./BottomNavBar";
import {
    ExploreIcon,
    MusicIcon,
    GamingIcon,
    EducationIcon,
    ScienceIcon,
    ContentIcon,
    AnimeMangaIcon,
    MoviesTVIcon,
} from '../utils/CustomIcon';


const myTab = [
    {
        name: 'Home',
        icon: <ExploreIcon/>,
    },
    {
        name: 'Gaming',
        icon: <GamingIcon/>
    },
    {
        name: 'Music',
        icon: <MusicIcon/>
    },
    {
        name: 'Education',
        icon: <EducationIcon/>
    },
    {
        name: 'Science',
        icon: <ScienceIcon/>
    },
    {
        name: 'Content Creator',
        icon: <ContentIcon/>
    },
    {
        name: 'Anime & Manga',
        icon: <AnimeMangaIcon/>
    },
    {
        name: 'Movies & TV',
        icon: <MoviesTVIcon/>
    }

];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: '#B9BBBE',
    },
    sideBarContainer: {
        margin: 0,
        padding: 0,
        border: 0,
    },
    menuContainer: {
        position: 'relative'
    },
    sideBar: {
        backgroundColor: '#2F3136',
        paddingRight: theme.spacing(1),
        position: 'relative',
        overflowX: 'hidden',
        minHeight: 0,
        minWidth: '100%',
        flex: 1
    },
    titleTab: {
        margin: '16px',
        marginRight: theme.spacing(0),
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '30px',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '120px'
        },
    },
    icon: {
        paddingRight: theme.spacing(2),
        textDecoration: 'none',
        alignItems: 'center'
    },
    itemInner: {
        marginBottom: theme.spacing(1),
        borderRadius: 5,
        paddingTop: '5px',
        paddingRight: '10px',
        paddingBottom: '5px',
        paddingLeft: '8px',
        alignItems: 'center',
        display: 'flex',
        '&:active': {
            backgroundColor: '#7289da',
            outline: 'none',
        },
        '&:hover': {
            backgroundColor: '#36393F',
            outline: 'none',
        },
    },
}));

export default function Explore (props) {
        const classes = useStyles();
        return (
            <React.Fragment>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2}  style={{backgroundColor: '#2F3136'}}>
                        <Grid container spacing={0}>
                        <div className={classes.root}>
                            <div className={classes.sideBar}>
                                <div className={classes.menuContainer}>
                                    <h2 className={classes.titleTab}>Discover</h2>
                                    {myTab.map((item, index) => (
                                        <div key={index} className="categoryItem" role="listitem" tabIndex={index}>
                                            <div className={classes.itemInner}>
                                                <div className={classes.icon}>
                                                    {item.icon}
                                                </div>
                                                <div className="content">
                                                    <div className="nameAndDecorators">
                                                        <div className="name">{item.name}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </Grid>

                        <Grid container>
                            <BottomNavBar {...props}
                            doSignOut = {props.doSignOut}
                            />
                        </Grid>

                    </Grid>
                    <Grid item xs={12} lg={10}  style={{backgroundColor: '#36393F', position: 'relative'}}>
                        <GuildDiscovery {...props}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
}