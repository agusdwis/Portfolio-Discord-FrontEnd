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
import {changeInputUser, doLogin, doRegister, doSignOut, getProfile} from "../stores/action/userAction";
import {connect} from "react-redux";

const useStyles = (theme) => ({
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
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        minHeight: '100vh',
        [theme.breakpoints.down('sm')]: {
            overflowY: 'scroll'
        },
    },
    channelSection: {
        display: "flex",
        // flex: 1,
        flexDirection: "column",
        backgroundColor: '#2F3136'
    },
    chatSection: {
        backgroundColor: '#36393F',
        height: `calc(100vh - 64px)`,
        display: "flex",
        flex: 3,
        flexDirection: "column",
        borderWidth: "1px",
        borderColor: "#292929",
        borderRightStyle: "solid",
        borderLeftStyle: "solid",
        [theme.breakpoints.down('sm')]: {
            marginBottom: '57px',
        },
    },
    memberSection: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#2F3136',
        [theme.breakpoints.down('sm')]: {
            // marginBottom: '57px',
            display: "none"
        },
    },
    myPaper: {
        maxHeight: '100vh',
        overflowY: 'auto'
    },

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
                },
                {
                    id: 4,
                    text: 'Hello',
                    createdAt: new Date(Date.UTC(2017, 5, 11, 17, 20, 0)),
                    user: {
                        id: 5,
                        name: 'Suga',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
                {
                    id: 6,
                    text: 'AAABBBCCC',
                    createdAt: new Date(Date.UTC(2018, 5, 11, 17, 20, 0)),
                    user: {
                        id: 5,
                        name: 'Suga',
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
                    <MainNavbar {...this.props}/>
                    <main className={classes.content}>
                        <Grid container>
                            <Grid className={classes.chats} item xs={12} lg={12}>
                                <TopNavbar {...this.props}/>

                                <Grid container classes={classes.container}>
                                    <Grid className={classes.channelSection} item xs={12} lg={2}>
                                        <Paper elevation={0} className={classes.myPaper}>
                                            <ChannelNavbar {...this.props}/>
                                        </Paper>

                                        <BottomNavBar {...this.props}/>
                                    </Grid>

                                    <Grid className={classes.chatSection} item xs={12} lg={8}>
                                        <GiftedChat
                                            messages={this.state.messages}
                                            onSend={(messages) => this.onSend(messages)}
                                            user={{ id: 1,}}
                                            isAnimated={true}
                                            showUserAvatar={true}
                                        />
                                    </Grid>

                                    <Grid className={classes.memberSection} item xs={12} lg={2}>
                                        <Paper elevation={0} className={classes.myPaper}>
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

const mapStateToProps = (state) => {
    return {
        data: state.user,
        info: state.user.infos,
        login: state.user.is_login,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e), doLogin, doRegister, getProfile, doSignOut

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Group));