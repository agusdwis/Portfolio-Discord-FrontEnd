import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    ExploreIcon,
    MusicIcon,
    GamingIcon,
    EducationIcon,
    ScienceIcon,
    ContentIcon,
    AnimeMangaIcon,
    MoviesTVIcon,} from '../utils/CustomIcon';
import {Link} from "react-router-dom";


const myTab = [
    {
        name: 'Home',
        category: '',
        icon: <ExploreIcon/>,
        pathname: '/guilds-discovery'
    },
    {
        name: 'Gaming',
        category: 'Gaming',
        icon: <GamingIcon/>,
        pathname: '/guilds-discovery/gaming'
    },
    {
        name: 'Music',
        category: 'Music',
        icon: <MusicIcon/>,
        pathname: '/guilds-discovery/music'
    },
    {
        name: 'Education',
        category: 'Education',
        icon: <EducationIcon/>,
        pathname: '/guilds-discovery/education'
    },
    {
        name: 'Science',
        category: 'Science',
        icon: <ScienceIcon/>,
        pathname: '/guilds-discovery/science'
    },
    {
        name: 'Content Creator',
        category: 'Content Creator',
        icon: <ContentIcon/>,
        pathname: '/guilds-discovery/content-creator'
    },
    {
        name: 'Anime & Manga',
        category: 'Anime & Manga',
        icon: <AnimeMangaIcon/>,
        pathname: '/guilds-discovery/anime-manga'
    },
    {
        name: 'Movies & TV',
        category: 'Movies & TV',
        icon: <MoviesTVIcon/>,
        pathname: '/guilds-discovery/movies-tv'
    }

];


const useStyles = makeStyles((theme) => ({
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
        cursor: 'pointer',
    },
}));

export default function GuildNavbar (props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h2 className={classes.titleTab}>Discover</h2>
            {myTab.map((item, index) => (
                <Link key={index} to={item.pathname} onClick={() => props.handleRouter(item.category)}>
                    <div className="categoryItem" role="listitem" tabIndex={index}>
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
                </Link>
            ))}
        </React.Fragment>
    );
}