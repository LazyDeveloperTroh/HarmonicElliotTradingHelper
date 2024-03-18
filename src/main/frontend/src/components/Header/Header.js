import * as React from 'react';
import {Grid} from "@mui/material";
import Avatar from "@mui/material/Avatar";

function Header() {
    return <>
            <Grid item md={2}>
                <div style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}>
                    <img style={{width: "20%"}} src="/logo192.png" ></img>
                    <p style={{width: "40%", fontSize: "1.5rem", fontWeight: "bold" }}>H E T H</p>
                </div>
            </Grid>
            <Grid item md={12}>
                <Avatar>OH</Avatar>
            </Grid>
    </>;
}

export default Header;