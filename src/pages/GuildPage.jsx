import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { fade, makeStyles } from '@material-ui/core/styles';
import MediaCard from "../components/CardComponent";
import Link from "@material-ui/core/Link";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 0,
        border: 'none'
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: theme.spacing(121),
        borderRadius: 10,
        paddingLeft: 0,
        position: 'relative'
    },
    text: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        fontWeight: 'bold',
        position: 'relative',
        marginTop: '18vmin'
    },
    card: {
        padding: theme.spacing(0),
        border: 'none',
        backgroundColor: 'none'

    },
    container: {
        padding: theme.spacing(1),
        border: 'none',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(5)
    },
    footerText:{
        paddingTop: theme.spacing(1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgFooter:{
        width: theme.spacing(10)
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    headerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        marginTop: '-35vmin'
    }

}));

export default function GuildPage () {
        const classes = useStyles();
        return (
            <React.Fragment>
                <Container className={classes.container} maxWidth={'lg'}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} >
                            <img id="banner" className={classes.paper} src={require('../assets/images/guild-banner.png')} alt="Guild Banner" />

                            <div className={classes.headerContent}>
                                <h3 className="search-title">
                                    Find your community on Discord
                                </h3>
                                <h5>
                                    From gaming, to music, to learning, there's a place for you.
                                </h5>
                                <br/>
                                <Container>
                                    <div className="search-box">
                                        <div className={classes.search}>
                                            <div className={classes.searchIcon}>
                                                <SearchIcon />
                                            </div>
                                            <InputBase
                                                placeholder="Explore"
                                                classes={{
                                                    root: classes.inputRoot,
                                                    input: classes.inputInput,
                                                }}
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={classes.text}>Popular Communities</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid className={classes.card} container spacing={2}>
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                                    <Grid key={value} item xs={4}>
                                        <MediaCard/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container className={classes.footer} spacing={1}>
                                <img className={classes.imgFooter} src={require('../assets/images/Bottom-Icon.svg')} alt="Go"/>
                            </Grid>
                            <Grid container className={classes.footerText}>
                                <Typography className={classes.footerText}>There are more communities out there!</Typography>
                            </Grid>
                            <Grid container className={classes.footerText}>
                                <Link href="#"><Typography style={{color: '#2DA8EE'}} className={classes.footerText}>Try searching for them.</Typography></Link>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        );
}
