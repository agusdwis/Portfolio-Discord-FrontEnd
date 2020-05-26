import React from "react";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

import '../assets/styles/loginpage.css';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {changeInputUser, doLogin, doRegister} from "../stores/action/userAction";
import {connect} from "react-redux";

const useStyles = (theme) => ({
    appMount: {
        position: 'absolute',
        textAlign: 'center',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },
    app: {
        position: 'relative',
        flex: '1 1 auto',
        zIndex: 'auto',
    },
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 1,
    },
    cover: {
        width: '1600px',
        height: '900px',
        position: 'fixed',
        bottom: 0,
        right: 0,
        transition: 'opacity .4s ease',
        opacity: 1,
        pointerEvents: 'none',
        zIndex: -1,
    },
    coverImage: {
        opacity: 1,
        textIndent: '-9999px',
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'opacity .2s linear .2s',
    },
    contentWrapper: {
        width: '100%',
        height: '100%',
    },
    content:{
        position: 'relative',
        width: '100vw',
        maxWidth: '1480px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    closeButton:{
        wrapper: {
            height: '10px',
            minWidth: '40px'
        }
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#7289DB',
        '&:hover': {
            backgroundColor: '#839bf1'
        }
    },
    loginLink: {
        color: '#7289DA'
    },
    inputLabel: {
        color: '#83878C'
    },
});

class Register extends React.Component {
    postRegister = async () => {
        await this.props.doRegister();

        console.log(this.props.data.reg_error);

        if(this.props.data.reg_error){
            this.props.history.push('/register');
        } else {
            this.props.history.push("/login")
        }
    };

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Grid container spacing={0}>
                    <Grid id="back-to-top-anchor" item xs={12}>
                        <div className={classes.appMount}>
                            <div className={classes.app}>
                                <div className={classes.wrapper}>
                                    <div className={classes.cover}>
                                        <CardMedia
                                            component="img"
                                            alt="Cover"
                                            image={require('../assets/images/Login/Login.jpg')}
                                            title="Login Cover"
                                            className={classes.coverImage}
                                        />
                                        <CardMedia
                                            component="img"
                                            alt="Cover"
                                            image={require('../assets/images/Login/Black-Background.png')}
                                            title="Login Cover"
                                            className={classes.coverImage}
                                        />
                                    </div>
                                    <div className={classes.content}>
                                        <Link to="/" className="logo11 logo12 logo13"
                                           style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}/>

                                        <div style={{ opacity: 1, transform: 'scale(1) translateY(0px) translateZ(0px)' }} className={classes.contentWrapper}>
                                            <div className="pageContainer">
                                                <Grid container spacing={0}>

                                                    <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                        <div className="theme-dark authBox authBoxExpand">
                                                            <div className="centeringWrap">
                                                                <div className="mainForm">
                                                                    <div className="title">
                                                                        Create an account
                                                                    </div>
                                                                    <div className="formBlock marginTop20">
                                                                        <form className={classes.form} noValidate>
                                                                            <TextField
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                required
                                                                                fullWidth
                                                                                name="name"
                                                                                label="Full Name"
                                                                                type="name"
                                                                                id="name"
                                                                                autoComplete="off"
                                                                                InputLabelProps={{ className: classes.inputLabel }}
                                                                            />
                                                                            <TextField
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                required
                                                                                fullWidth
                                                                                name="username"
                                                                                label="Username"
                                                                                type="username"
                                                                                id="username"
                                                                                autoComplete="off"
                                                                                InputLabelProps={{ className: classes.inputLabel }}
                                                                            />
                                                                            <TextField
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                required
                                                                                fullWidth
                                                                                name="password"
                                                                                label="Password"
                                                                                type="password"
                                                                                id="password"
                                                                                autoComplete="off"
                                                                                InputLabelProps={{ className: classes.inputLabel }}
                                                                            />
                                                                            <TextField
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                required
                                                                                fullWidth
                                                                                id="email"
                                                                                label="Email Address"
                                                                                name="email"
                                                                                autoComplete="off"
                                                                                autoFocus
                                                                                InputLabelProps={{ className: classes.inputLabel }}
                                                                            />
                                                                            <Grid item xs>
                                                                                <Link className={classes.loginLink} to="#" variant="body2">
                                                                                    Forgot your password?
                                                                                </Link>
                                                                            </Grid>
                                                                            <Button
                                                                                type="submit"
                                                                                fullWidth
                                                                                variant="contained"
                                                                                color="primary"
                                                                                className={classes.submit}
                                                                            >
                                                                                Continue
                                                                            </Button>
                                                                            <Grid container>
                                                                                <Grid item xs>
                                                                                    <Link className={classes.loginLink} to="/login" variant="body2">
                                                                                        Already have an account?
                                                                                    </Link>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
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
    changeInput: (e) => changeInputUser(e), doLogin, doRegister

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Register));