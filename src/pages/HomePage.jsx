import React from "react";
import MainNavbar from "../components/DrawerComp";
import NavigationBar from "../components/NavBar";

import {withStyles} from "@material-ui/core";
import ExplorePage from "./ExplorePage";

const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1
    },
});

class Home extends React.Component {
  render() {
      const { classes } = this.props;
    return(
        <React.Fragment>
            <div className={classes.root}>
                <MainNavbar/>
                {/*<NavigationBar/>*/}

                <main className={classes.content}>
                    <React.Fragment>
                        {/*<SideNavbar/>*/}
                        <ExplorePage/>
                    </React.Fragment>
                </main>
            </div>


        </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(Home)