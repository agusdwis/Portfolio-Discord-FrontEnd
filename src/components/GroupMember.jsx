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
        backgroundColor: 'transparent',
        padding: theme.spacing(0)
    },
    inline: {
        display: 'inline',
    },
    myRoot: {
        paddingBottom: '4px',
        paddingTop: '4px'
    }
}));

export default function MemberList(props) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem classes={{root: classes.myRoot}} button alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={props.fullName} src={props.avatar} />
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
                                style={{color: '#ffbcc1'}}
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
