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
        </React.Fragment>
    );
}