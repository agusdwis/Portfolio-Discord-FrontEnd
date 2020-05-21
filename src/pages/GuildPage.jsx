import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Icon from "@material-ui/core/Icon";
import MediaCard from "../components/CardComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: theme.spacing(120)
    },
    text: {
        padding: theme.spacing(2),
        fontWeight: 'bold'
    },
    card: {
        padding: theme.spacing(1)
    }
}));

export default function GuildPage () {
        const classes = useStyles();
        return (
            <React.Fragment>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={12} >
                            <img className={classes.paper} src={require('../assets/images/guild-banner.png')} alt="Guild Banner" />

                            <Typography className={classes.text}>Popular Communities</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className={classes.card} container spacing={3}>
                                {[0, 1, 2].map((value) => (
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
