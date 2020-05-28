import React from "react";
import MainNavbar from "../components/MainNavbar";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import HomeIcon from '@material-ui/icons/Home';

import {
    changeInputUser,
    doLogin,
    doRegister,
    getProfile,
    doSignOut } from "../stores/action/userAction";
import {Link} from "react-router-dom";

const useStyles = () => ({
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
        // lineHeight: '100vh'
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
    }
});

class Home extends React.Component {
    componentDidMount = async () => {
        this.props.getProfile();
    };

  render() {
      const { classes } = this.props;
    return(
        <React.Fragment>
            <div className={classes.root}>
                <MainNavbar {...this.props}/>
                <main className={classes.content}>
                    <React.Fragment>
                        <div className={classes.appHome}>
                            <Paper elevation={0} classes={{root:classes.appPaper}}>
                                <h1 className={classes.titleHome}>Welcome to Discord! </h1>
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
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e), doLogin, doRegister, getProfile, doSignOut

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Home));