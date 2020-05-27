import React from "react";
import { withStyles } from "@material-ui/core";
import MainNavbar from "../components/MainNavbar";
import {changeInputUser, doLogin, doRegister, doSignOut, getProfile} from "../stores/action/userAction";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import GuildDiscovery from "../components/GuildDiscovery";
import Paper from "@material-ui/core/Paper";
import BottomNavBar from "../components/BottomNavBar";
import GuildNavbar from "../components/GuildNavbar";

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        position: 'relative'
    },
    discovery: {
        backgroundColor: '#36393F',
    },
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        height: `calc(100vh)`,
        maxHeight: `calc(100vh)`,
        [theme.breakpoints.down('sm')]: {
            overflowY: 'scroll'
        },
    },
    categorySection: {
        display: "flex",
        maxHeight: `calc(100vh)`,
        flexDirection: "column",
        backgroundColor: '#2F3136',
        [theme.breakpoints.down('sm')]: {
            position: 'sticky'
        },
    },
    guildSection: {
        backgroundColor: '#36393F',
        height: `calc(100vh)`,
        maxHeight: `calc(100vh)`,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        borderWidth: "1px",
        borderColor: "#292929",
        borderRightStyle: "solid",
        borderLeftStyle: "solid",
        [theme.breakpoints.down('sm')]: {
            marginBottom: '57px',
            zIndex: 0,
        },
    },
    myPaper: {
        maxHeight: `calc(100vh)`,
        overflowY: 'auto',
        backgroundColor: '#2F3136 !important',
        color: '#B9BBBE'
    },
    guildPaper : {
        backgroundColor: '#36393F !important',
        height: `calc(100vh)`,
        // maxHeight: `calc(100vh)`,
        overflowY: 'auto',
        padding: theme.spacing(2),
        color: '#fff',
    },
});

class ExplorePage extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div id="back-to-top-anchor" className={classes.root}>
                    <MainNavbar {...this.props}/>
                    <main className={classes.content}>
                        <Grid container>
                            <Grid className={classes.discovery} item xs={12} lg={12}>

                                <Grid container className={classes.container}>
                                    <Grid className={classes.categorySection} item xs={12} lg={2}>
                                        <Paper elevation={0} classes={{root:classes.myPaper}}>
                                            <GuildNavbar {...this.props}/>
                                        </Paper>

                                        <BottomNavBar {...this.props}/>
                                    </Grid>

                                    <Grid className={classes.guildSection} item xs={12} lg={10}>
                                        <Paper elevation={0} classes={{root:classes.guildPaper}}>
                                            <GuildDiscovery {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ExplorePage));