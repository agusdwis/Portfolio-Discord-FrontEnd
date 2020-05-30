import React from "react";
import {connect} from "react-redux";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import GifIcon from '@material-ui/icons/Gif';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import BottomNavBar from "../components/BottomNavBar";

import ChannelNavbar from "../components/ChannelBar";
import MemberList from "../components/GroupMember";
import MainNavbar from "../components/MainNavbar";
import TopNavbar from "../components/TopNavBar";
import ChatList from "../components/ChatList";
import ScrollTop from "../utils/ScrollTop";

import {
    changeInputUser,
    doLogin,
    doRegister,
    doSignOut,
    getProfile} from "../stores/action/userAction";
import { memberGuild, messageGuild, changeInputMessage, postMessage } from "../stores/action/messageAction";
import { getGuildByID } from "../stores/action/guildAction";

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
        // height: `calc(100vh - 50px)`,
        maxHeight: `calc(100vh - 50px)`,
        [theme.breakpoints.down('sm')]: {
            overflowY: 'scroll'
        },
    },
    channelSection: {
        display: "flex",
        maxHeight: `calc(100vh - 50px)`,
        flexDirection: "column",
        backgroundColor: '#2F3136',
        [theme.breakpoints.down('sm')]: {
            position: 'sticky'
        }
    },
    chatSection: {
        backgroundColor: '#36393F',
        height: `calc(100vh - 50px)`,
        maxHeight: `calc(100vh - 50px)`,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
            marginBottom: '57px',
            zIndex: 0,
        },
    },
    memberSection: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        maxHeight: `calc(100vh - 50px)`,
        backgroundColor: '#2F3136',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px',
            display: "none"
        },
    },
    myPaper: {
        maxHeight: `calc(100vh - 50px)`,
        overflowY: 'auto',
        backgroundColor: '#2F3136',
    },
    chatPaper : {
        backgroundColor: '#36393F !important',
        height: `calc(100vh - 150px)`,
        // maxHeight: `calc(100vh - 80px)`,
        overflowY: 'auto',
        padding: theme.spacing(2),
        color: '#fff',
    },
    containerForm: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rootInput: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '95%',
        maxWidth: '95%',
        backgroundColor: '#40444B !important',
        color: '#fff',
        borderRadius: 8,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: '#fff',
        fontSize: '14px',
    },
    iconButton: {
        padding: 10,
        color: '#B9BBBE'
    },
    scrollTop : {
        paddingBottom: theme.spacing(5),
        justifyContent: 'flex-end',
        [theme.breakpoints.up('lg')]: {
            paddingBottom: theme.spacing(0),
        },
    },

});

class Group extends React.Component {

    componentDidMount = async () => {
        const channelID = await this.props.match.params.id;
        // list guild current user
        this.props.memberGuild();

        // load message selected guild
        this.props.messageGuild(channelID);

        // load guild infos on mounting phase
        this.props.getGuildByID(channelID);

        // scroll to latest message
        this.scrollToBottom();
    };

    componentDidUpdate = async () => {
        // update message if the data has changed
        const channelID = await this.props.match.params.id;

        if (this.props.update) {
            this.props.messageGuild(channelID);
        }

        // scroll to latest message
        this.scrollToBottom();
    };

    changeRouter = async (channelID) => {
        this.props.history.replace("/channel/"+ channelID);

        //render messages
        this.props.messageGuild(channelID);

        //load guild infos on select
        this.props.getGuildByID(channelID);
    };

    inputMessage = (e) => {
        if(e.keyCode === 13){
            // post message
            const channel = this.props.match.params.id;

            // post message if input not null
            if (e.target.value !== "") {
                this.props.postMessage(channel);
            }

            // reset input form
            document.getElementById("post_message").value="";
        }
    };

    scrollToBottom = () => {
        const messagesContainer = document.getElementById("messagesContainer");
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    };

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div id="back-to-top-anchor" className={classes.root}>
                    <MainNavbar {...this.props}
                        changeRouter={(e) => this.changeRouter(e)}
                    />

                    <main className={classes.content}>
                        <Grid container>
                            <Grid className={classes.chats} item xs={12} lg={12}>

                                {/*Top Fixed Navbar*/}
                                <TopNavbar {...this.props}/>

                                {/*Channel Navbar*/}
                                <Grid container className={classes.container}>
                                    <Grid className={classes.channelSection} item xs={12} lg={2}>

                                        <Paper elevation={0} classes={{root:classes.myPaper}}>
                                            <ChannelNavbar {...this.props}/>
                                        </Paper>

                                        <BottomNavBar {...this.props}/>
                                    </Grid>

                                    <Grid className={classes.chatSection} item xs={12} lg={8}>
                                        <Paper id="messagesContainer" elevation={0} classes={{root:classes.chatPaper}}>

                                            {this.props.message.map((item, index) => (
                                                <div key={index}>
                                                    <ChatList {...this.props}
                                                              name={item.user_id.name}
                                                              avatar={item.user_id.avatar}
                                                              username={item.user_id.username}
                                                              dtime={item.created_at}
                                                              message={item.content}
                                                    />
                                                </div>
                                            ))}

                                        </Paper>

                                        <Grid container className={classes.containerForm}>
                                            <Paper elevation={0} className={classes.rootInput}>
                                                <InputBase
                                                    className={classes.input}
                                                    placeholder={'Message #'+ (this.props.guild_info.name)}
                                                    onKeyDown={this.inputMessage}
                                                    onChange={(e) => this.props.changeMessage(e)}
                                                    name="post_message"
                                                    id="post_message"
                                                    autoComplete="off"
                                                />

                                                <IconButton color="primary" className={classes.iconButton} aria-label="giftcard">
                                                    <CardGiftcardIcon/>
                                                </IconButton>
                                                <IconButton color="primary" className={classes.iconButton} aria-label="gif">
                                                    <GifIcon />
                                                </IconButton>
                                                <IconButton color="primary" className={classes.iconButton} aria-label="emoji">
                                                    <EmojiEmotionsIcon />
                                                </IconButton>

                                            </Paper>
                                        </Grid>

                                    </Grid>

                                    <Grid className={classes.memberSection} item xs={12} lg={2}>
                                        <Paper elevation={0} className={classes.myPaper}>
                                            <MemberList username={'agsdws'}
                                                        fullName={'Agus D Sasongko'}
                                                        status={'happy man'}
                                            />
                                        </Paper>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </main>

                    {/*Scroll To Top*/}
                    <div className={classes.scrollTop}>
                        <ScrollTop {...this.props}>
                            <Fab color="secondary" size="small" aria-label="scroll back to top">
                                <KeyboardArrowUpIcon />
                            </Fab>
                        </ScrollTop>
                    </div>

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

        guild_info: state.guild.oneGuild,

        my_guild: state.members.myGuilds,
        message: state.members.messages,
        update: state.members.updated
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e), doLogin, doRegister, getProfile, doSignOut,

    memberGuild, messageGuild, getGuildByID,

    changeMessage: (e) => changeInputMessage(e), postMessage

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Group));