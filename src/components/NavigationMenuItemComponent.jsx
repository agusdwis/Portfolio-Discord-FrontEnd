import React, { forwardRef } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { NavLink } from 'react-router-dom'


const AppMenuItemComponent = (props) => {
    const { className, onClick, link, children } = props;

    if (!link || typeof link !== 'string') {
        return (
            <ListItem
                button
                className={className}
                children={children}
                onClick={onClick}
            />
        )
    }

    // Return a LitItem with a link component
    return (
        <ListItem
            button
            className={className}
            children={children}
            component={forwardRef((props) => <NavLink exact {...props}/>)}
            to={link}
        />
    )
};

export default AppMenuItemComponent
