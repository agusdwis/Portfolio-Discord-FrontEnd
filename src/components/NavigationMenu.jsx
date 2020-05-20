import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'

import AppMenuItem from "./NavigationMenuItem";

const appMenuItems = [
    {
        name: 'Dashboard',
        link: '/',
        Icon: IconDashboard,
    },
    {
        name: 'Orders',
        link: '/orders',
        Icon: IconShoppingCart,
    },
    {
        name: 'Customers',
        link: '/customers',
        Icon: IconPeople,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
];

const AppMenu = () => {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.appMenu} disablePadding>
            {appMenuItems.map((item, index) => (
                <AppMenuItem {...item} key={index} />
            ))}
        </List>
    )
};

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100%',
        },
        navList: {
            width: drawerWidth,
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#97c05c',
        },
    }),
);

export default AppMenu

