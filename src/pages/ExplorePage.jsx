import React from "react";
import { withStyles } from "@material-ui/core";
import MainNavbar from "../components/MainNavbar";
import SideNavbar from "../components/SideNavbar";

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

export default withStyles(useStyles)(ExplorePage)