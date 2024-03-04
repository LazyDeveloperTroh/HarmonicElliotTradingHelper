import React from 'react';
import MenuList from './menu/MenuList';
import "./sidebar.css"

function Sidebar() {
    return <nav className="sidebar">
        <MenuList />
    </nav>
}

export default Sidebar;