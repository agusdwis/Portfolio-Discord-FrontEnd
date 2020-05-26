import React from 'react';
import ChatAppBar from "./ChatAppBar";
import GuildDiscovery from "./GuildDiscovery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function Chats () {
    return(
        <React.Fragment>
            <div className="chat-3">
                <ChatAppBar/>
            </div>

            <Grid container spacing={0}>
                <Grid item xs={12} lg={9}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                Channel
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                Members
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}