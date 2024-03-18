import React from 'react'
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar'
import {Link} from 'react-router-dom'
import {BASE_ROUTES, ROUTES} from '../../router/constants';

const SideBar = () => {
    return (
        <Sidebar>
            <Menu>
                <MenuItem component={<Link to={ROUTES.dashboard} />}> Home </MenuItem>
                <MenuItem component={<Link to={ROUTES.profile} />}> Profile </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SideBar