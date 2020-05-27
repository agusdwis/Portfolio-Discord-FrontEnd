import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: '#2F3136',
        padding: theme.spacing(0),
        border: 'none'
    },
    inline: {
        display: 'inline',
    },
    myRoot: {
        paddingBottom: '4px',
        paddingTop: '4px'
    },
    avatar: {
        backgroundColor: '#184dff',
    },
}));

export default function MemberList(props) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem classes={{root: classes.myRoot}} button alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar classes={{root:classes.avatar}} alt={props.fullName} src={props.avatar} />
                </ListItemAvatar>
                <ListItemText style={{color: '#fff'}}
                    primary={props.username}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textSecondary"
                                style={{color: '#6a6fff'}}
                            >
                                {props.status}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}
