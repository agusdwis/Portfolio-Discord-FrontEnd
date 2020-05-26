import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

// import IconButton from '@material-ui/core/IconButton';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        backgroundColor: 'none'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function MemberList() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                    </Avatar>
                }
                title="agdws"
                subheader="doing THR"
            />
        </Card>
        // <List>
        //     <ListItem button>
        //         <ListItemAvatar>
        //             <Avatar aria-label="recipe" className={classes.avatar}>
        //                 D
        //             </Avatar>
        //         </ListItemAvatar>
        //         <ListItemText style={{color: '#fff'}} secondary="Default" />
        //     </ListItem>
        // </List>
    );
}
