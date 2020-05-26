import React from "react";
import { withStyles } from "@material-ui/core";
import MainNavbar from "../components/MainNavbar";
import SideNavbar from "../components/SideNavbar";
import {changeInputUser, doLogin, doRegister, doSignOut, getProfile} from "../stores/action/userAction";
import {connect} from "react-redux";

const useStyles = () => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    },
});

class ExplorePage extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div className={classes.root}>
                    <MainNavbar {...this.props}/>
                    <main className={classes.content}>
                        <React.Fragment>
                            <SideNavbar {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ExplorePage));