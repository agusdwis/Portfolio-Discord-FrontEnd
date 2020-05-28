import React from "react";
import GuildDiscovery from "../components/GuildDiscovery";
import BottomNavBar from "../components/BottomNavBar";
import GuildNavbar from "../components/GuildNavbar";
import MainNavbar from "../components/MainNavbar";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ScrollTop from "../utils/ScrollTop";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import {connect} from "react-redux";
import {changeInputUser, doLogin, doRegister, doSignOut, getProfile} from "../stores/action/userAction";
import {getAllGuild, handleCategory} from "../stores/action/guildAction";

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
    scrollY : {
        paddingBottom: theme.spacing(5),
        justifyContent: 'flex-end',
        [theme.breakpoints.up('lg')]: {
            paddingBottom: theme.spacing(0),
        },
        position: 'fixed',
        zIndex: 1
    },
});

class ExplorePage extends React.Component {
    componentDidMount = async () => {
        this.props.getAllGuild()
    };

    handleCategory = async (category) => {
        this.props.handleCategory(category)
    };

    render() {
        const { classes } = this.props;
        // console.warn('cek', this.props.listGuilds);
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
                                            <GuildNavbar {...this.props}
                                                         handleRouter={(e) => this.handleCategory(e)}
                                            />
                                        </Paper>

                                        <BottomNavBar {...this.props}/>
                                    </Grid>

                                    <Grid className={classes.guildSection} item xs={12} lg={10}>
                                        <Paper elevation={0} classes={{root:classes.guildPaper}}>
                                            <GuildDiscovery {...this.props}/>

                                            <div className={classes.scrollY}>
                                                <ScrollTop {...this.props}>
                                                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                                                        <KeyboardArrowUpIcon />
                                                    </Fab>
                                                </ScrollTop>
                                            </div>
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

        listGuilds: state.guild.listGuilds,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e), doLogin, doRegister, getProfile, doSignOut,

    getAllGuild, handleCategory

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ExplorePage));