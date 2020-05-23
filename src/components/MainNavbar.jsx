import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/styles/style.css';
import {
    AddServerIcon,
    DownloadIcon,
    ExploreIcon,
    HomeDiscordIcon} from "../utils/CustomIcon";


const drawerWidth = 72;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: 'transparent',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: {
        backgroundColor: 'none'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#202225',
    },
    listRoot: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: theme.spacing(8),
        minWidth: theme.spacing(8),
        padding: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    listGutter:{
        borderRadius: 40,
        backgroundColor: '#36393F',
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginLeft: '4px',
        marginTop: '2px',
        '&:hover': {
            borderRadius: 10,
            backgroundColor: '#7289DB',
        }
    },
    iconRoot: {
        display: 'flex',
        minWidth: theme.spacing(3),
        minHeight: theme.spacing(3),
        color: '#4FB581',
        textDecoration: 'none',
        '&:hover': {
            color: '#fff'
        }
    },
    toolBar: {
        boxShadow: 'none'
    }
}));

const Menu = [
    {
        label: "Home",
        pathname: "/",
        icon: <HomeDiscordIcon/>
    },
    {
        label: "Add Server",
        pathname: "#",
        icon: <AddServerIcon/>
    },
    {
        label: "Explore",
        pathname: "/guild-discovery",
        icon: <ExploreIcon/>
    },
    {
        label: "Download",
        pathname: "#",
        icon: <DownloadIcon/>
    },
];

function MainNavbar(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List style={{padding: '0px'}}>
                {Menu.map((item, index) => (
                    <Link to={item.pathname} key={index}>
                        <ListItem classes={{root: classes.listRoot, gutters: classes.listGutter}}>
                            <ListItemIcon classes={{root: classes.iconRoot}}>{item.icon}</ListItemIcon>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <AppBar position="fixed" classes={{root:classes.appBar, colorPrimary:classes.toolBar}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <HomeDiscordIcon className={'breadcrumb'}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>

                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

MainNavbar.propTypes = {
    window: PropTypes.func,
};

export default MainNavbar;