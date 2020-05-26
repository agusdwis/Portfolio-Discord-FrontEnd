import React from "react";
import MainNavbar from "../components/MainNavbar";
import {withStyles} from "@material-ui/core";
import SideNavbar from "../components/SideNavbar";
import {connect} from "react-redux";
import {
    changeInputUser,
    doLogin,
    doRegister,
    getProfile,
    doSignOut } from "../stores/action/userAction";

const useStyles = () => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    },
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
                        <SideNavbar {...this.props}
                                doSignOut = {this.props.doSignOut}
                        />
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