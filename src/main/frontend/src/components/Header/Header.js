import * as React from 'react';
import Logo from './Logo'
import Profile from "./Profile";

function Header() {
    return <header style={{height: "5%", display: "flex", justifyContent: "start"}}>
        <Logo />
        <Profile/>
    </header>
}

export default Header;