import React from "react";

import MainNavbar from "../components/MainNavbar";
import ChannelNavbar from "../components/ChannelBar";
import {GiftedChat} from "react-web-gifted-chat";
import TopNavbar from "../components/TopNavBar";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import '../assets/styles/chatpages.css';

const useStyles = () => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        position: 'relative'
    },
    chats: {
        backgroundColor: '#36393F',
    }
});

class Group extends React.Component {
    state = {
        messages: [],
    };

    componentWillMount() {
        this.setState({
            messages: [
                {
                    id: 1,
                    text: 'My message',
                    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                    user: {
                        id: 2,
                        name: 'React',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                    isAnimated: true
                },
            ],
        });
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div className={classes.root}>
                    <MainNavbar/>
                    <main className={classes.content}>
                        <Grid container>
                            <Grid className={classes.chats} item xs={12} lg={12}>
                                <TopNavbar/>

                                <Grid container>
                                    <Grid style={{backgroundColor: '#2F3136'}} item xs={12} lg={2}>
                                        <ChannelNavbar/>
                                    </Grid>

                                    <Grid item xs={12} lg={8}>
                                        <GiftedChat
                                            messages={this.state.messages}
                                            onSend={(messages) => this.onSend(messages)}
                                            user={{ id: 1,}}
                                        />
                                    </Grid>

                                    <Grid style={{backgroundColor: '#2F3136'}} item xs={12} lg={2}>
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