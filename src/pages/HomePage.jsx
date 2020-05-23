import React from "react";
import MainNavbar from "../components/MainNavbar";
import {withStyles} from "@material-ui/core";
import SideNavbar from "../components/SideNavbar";

import NavigationBar from "../components/NavBar";
import ExplorePage from "./ExplorePage";
import ProfileIndicator from "../components/ProfileIndicator";
import BottomNavBar from "../components/BottomNavigation";

const useStyles = () => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    },
});

class Home extends React.Component {
  render() {
      const { classes } = this.props;
    return(
        <React.Fragment>
            <div className={classes.root}>
                <MainNavbar {...this.props}/>
                {/*<NavigationBar/>*/}
                {/*<ProfileIndicator/>*/}
                {/*<BottomNavBar/>*/}


                <main className={classes.content}>
                    <React.Fragment>
                        <SideNavbar {...this.props}/>
                        {/*<ExplorePage {...this.props}/>*/}
                    </React.Fragment>
                </main>
            </div>
        </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(Home)