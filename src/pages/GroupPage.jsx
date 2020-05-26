import React from "react";
import MainNavbar from "../components/MainNavbar";
import {withStyles} from "@material-ui/core";
import ChannelNavbar from "../components/ChannelBar";
import Grid from "@material-ui/core/Grid";

import '../assets/styles/chatpages.css';
import ChatAppBar from "../components/ChatAppBar";

const useStyles = () => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    },
    chats: {
        backgroundColor: '#36393F',
        minHeight: '800px'
    }
});

class Group extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div className={classes.root}>
                    <MainNavbar/>
                    <main className={classes.content}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} lg={2}>
                                <ChannelNavbar/>
                            </Grid>

                            <Grid className={classes.chats} item xs={12} lg={10}>
                                <ChatAppBar/>

                                <Grid container spacing={0}>
                                    <Grid item xs={8} lg={9}>
                                        Chats
                                    </Grid>
                                    <Grid item xs={4} lg={3}>
                                        Member Lists
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(Group)