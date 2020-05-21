import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MediaCard from "../components/CardComponent";

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
    }
}));

export default function GuildPage () {
        const classes = useStyles();
        return (
            <React.Fragment>
                <Container className={classes.container} maxWidth={'lg'}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} >
                            <img className={classes.paper} src={require('../assets/images/guild-banner.png')} alt="Guild Banner" />

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
                    </Grid>
                </Container>
            </React.Fragment>
        );
}
