import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MediaCard from "../components/CardComponent";
import Link from "@material-ui/core/Link";

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

    },
    text: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        fontWeight: 'bold'
    },
    card: {
        padding: theme.spacing(0),
        border: 'none',
        backgroundColor: 'none'

    },
    container: {
        padding: theme.spacing(1),
        border: 'none'
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
