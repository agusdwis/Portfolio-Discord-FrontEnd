import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import HomeIcon from '@material-ui/icons/Home';

import MainNavbar from "../components/MainNavbar";
import {
    changeInputUser,
    doLogin,
    doRegister,
    getProfile,
    doSignOut } from "../stores/action/userAction";
import { memberGuild } from "../stores/action/messageAction";

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    },
    appHome: {
        justifyContent: 'center',
        alignItems: 'center',
        width: `calc(100vw - 72px)`,
        height: '100vh'
    },
    appPaper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#36393F !important',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            width: '100vw'
        },

    },
    titleHome: {
        fontWeight: 800,
        fontSize: '5vmax',
        cursor: 'pointer',
    },
    iconHome: {
        fontWeight: 800,
        fontSize: '5vmax',
        cursor: 'pointer',
        '&:hover': {
            color: '#ff0003'
        }
    },
    span: {
        color: '#ff0c19'
    }
});

class Home extends React.Component {
    componentDidMount = async () => {
        // load profile
        this.props.getProfile();

        // list guild current user
        this.props.memberGuild();
    };

    changeRouter = async (channelID) => {
        this.props.history.replace("/channel/"+ channelID);
    };

  render() {
      const { classes } = this.props;

      const userName = this.props.data.infos.username;

      return(
        <React.Fragment>
            <div className={classes.root}>
                    <MainNavbar {...this.props}
                                changeRouter={(e) => this.changeRouter(e)}
                    />
                    <main className={classes.content}>
                        <React.Fragment>
                            <div className={classes.appHome}>
                                <Paper elevation={0} classes={{root: classes.appPaper}}>
                                    <h1 className={classes.titleHome}>Welcome to Discord <span
                                        className={classes.span}>{userName}!</span></h1>
                                    <br/>
                                    <Link to={'/guilds-discovery'}><HomeIcon className={classes.iconHome}/></Link>
                                </Paper>
                            </div>
                        </React.Fragment>
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

        my_guild: state.members.myGuilds
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e), doLogin, doRegister, getProfile, doSignOut,

    memberGuild,

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Home));