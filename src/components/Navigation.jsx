import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import AppMenu from "./NavigationMenu";

const PageDashboard = () => <Typography variant="h3" component="h1">Dashboard Page</Typography>;
const PageOrders = () => <Typography variant="h3" component="h1">Orders Page</Typography>;
const PageCustomers = () => <Typography variant="h3" component="h1">Customers Page</Typography>;
const PageReports = () => <Typography variant="h3" component="h1">Reports Page</Typography>;

const App = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <AppMenu />
                </Drawer>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>

                        <Switch>
                            <Route exact path="/" component={PageDashboard} />
                            <Route exact path="/orders" component={PageOrders} />
                            <Route exact path="/customers" component={PageCustomers} />
                            <Route exact path="/reports" component={PageReports} />
                        </Switch>

                    </Container>
                </main>
            </div>
        </BrowserRouter>
    )
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#535454',
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default App
