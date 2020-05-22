import React from "react";
import MainNavbar from "../components/DrawerComp";
import NavigationBar from "../components/NavBar";

export default class Home extends React.Component {
  render() {
    return(
        <React.Fragment>
            {/*<MainNavbar/>*/}
            <NavigationBar/>
        </React.Fragment>
    )
  }
}