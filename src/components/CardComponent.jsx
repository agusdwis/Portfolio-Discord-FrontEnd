import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        borderRadius: 10,
        border: 'none'
    },
    media: {
        height: 160,
        backgroundColor: '#292B2F',
        border: 'none'

    },
    content: {
        backgroundColor: '#292B2F',
        color: '#fff'
    },
    fontColor: {
        color: '#ababab',
        textTransform:'none',
        fontSize: '12px'
    },
    infos: {
        color: '#949494',
        justifyContent: 'space-between',
        backgroundColor: '#292B2F',
        border: 'none',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '12px',
        color: '#949494',
        height: '10vmin'
    },
    icon1:{
        fontSize: '5px',
        color: '#4FB581',
    },
    icon2:{
        fontSize: '5px',
        color: '#B9BBBE'
    },
    descDetail:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }

});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={require('../assets/images/Guid-Home/1-MINECRAFT.jpg')}
                    title="Minecraft"
                />
                <CardContent className={classes.content}>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        MINECRAFT
                    </Typography>
                    <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        The Official Minecraft Discord!
                    </Typography>
                    <Grid className={classes.infos} item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Grid className={classes.descDetail} container spacing={1}>
                                    <IconButton className={classes.icon1} aria-label="online">
                                        <FiberManualRecordIcon fontSize="small" />
                                    </IconButton>
                                    <Typography className={classes.fontColor}>
                                        157.234 Online
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid className={classes.descDetail} container spacing={1}>
                                    <IconButton className={classes.icon2} aria-label="member">
                                        <FiberManualRecordIcon fontSize="small" />
                                    </IconButton>
                                    <Typography className={classes.fontColor}>
                                        344.345 Members
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
