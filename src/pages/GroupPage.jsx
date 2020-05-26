import React from "react";

import MainNavbar from "../components/MainNavbar";
import ChannelNavbar from "../components/ChannelBar";
import {GiftedChat} from "react-web-gifted-chat";
import TopNavbar from "../components/TopNavBar";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MemberList from "../components/GroupMember";
import Paper from "@material-ui/core/Paper";

import '../assets/styles/chatpages.css';
import BottomNavBar from "../components/BottomNavBar";

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
    },
    channelSection: {
        backgroundColor: '#2F3136',
        maxHeight: '562px',
    },
    chatSection: {
        backgroundColor: '#36393F',
        maxHeight: '562px',
        minHeight: '562px'
    },
    memberSection: {
        backgroundColor: '#2F3136',
        maxHeight: '562px',
    },
    myPaper: {
        maxHeight: '562px',
        overflowY: 'auto'
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
                                    <Grid className={classes.channelSection} item xs={12} lg={2}>
                                        <Paper className={classes.myPaper}>
                                            <ChannelNavbar/>
                                        </Paper>

                                        <BottomNavBar/>
                                    </Grid>

                                    <Grid className={classes.chatSection} item xs={12} lg={8}>
                                        <GiftedChat
                                            messages={this.state.messages}
                                            onSend={(messages) => this.onSend(messages)}
                                            user={{ id: 1,}}
                                        />
                                    </Grid>

                                    <Grid className={classes.memberSection} item xs={12} lg={2}>
                                        <Paper className={classes.myPaper}>
                                            <MemberList username={'agsdws'}
                                                        fullName={'Agus D Sasongko'}
                                                        status={'happy man'}
                                                        avatar={'...'}
                                            />
                                        </Paper>
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