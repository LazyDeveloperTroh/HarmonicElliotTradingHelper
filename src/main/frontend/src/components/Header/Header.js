import * as React from 'react';
import Button from '@mui/material/Button';

function Header() {
    return <div>
        <header style={{backgroundColor:"red"}}>헤더입니다</header>
        <Button variant="contained">Hello world</Button>
    </div>;
}

export default Header;