import React from "react";
import MainNavbar from "../components/MainNavbar";
import {withStyles} from "@material-ui/core";
import ChannelNavbar from "../components/ChannelBar";
import Grid from "@material-ui/core/Grid";

import '../assets/styles/chatpages.css';
import ChatAppBar from "../components/ChatAppBar";
import GuildDiscovery from "../components/GuildDiscovery";
import ChatBar2 from "./ChatPage";
import Container from "@material-ui/core/Container";
import {GiftedChat} from "react-web-gifted-chat";

const useStyles = () => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        position: 'static'
    },
    chats: {
        backgroundColor: '#36393F',
        minHeight: '800px',
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
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        id: 2,
                        name: 'React',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
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
                        <Grid container spacing={0}>
                            <Grid item xs={12} lg={2}>
                                <ChannelNavbar/>
                            </Grid>

                            <Grid className={classes.chats} item xs={12} lg={10}>
                                <ChatAppBar/>
                                <Container style={{paddingRight: 0}}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={8} lg={9}>
                                            <GiftedChat
                                                messages={this.state.messages}
                                                onSend={(messages) => this.onSend(messages)}
                                                user={{
                                                    id: 1,
                                                }}
                                            />
                                        </Grid>
                                        <Grid style={{backgroundColor: '#2F3136'}} item xs={4} lg={3}>
                                            Member Lists
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                        </Grid>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(Group)