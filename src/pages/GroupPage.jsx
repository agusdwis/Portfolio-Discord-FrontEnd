import React from "react";
import MainNavbar from "../components/MainNavbar";
import {withStyles} from "@material-ui/core";
import ChannelNavbar from "../components/GroupNavbar";

const useStyles = () => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    },
});

class Group extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div className={classes.root}>
                    <MainNavbar {...this.props}/>
                    <main className={classes.content}>
                        <React.Fragment>
                            <ChannelNavbar {...this.props}/>
                        </React.Fragment>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(Group)