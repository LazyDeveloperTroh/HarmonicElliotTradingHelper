import * as React from 'react';

function Logo() {
    return <div className="logo" style={{flexBasis: "10%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img style={{width: "20%"}} src="/logo192.png" ></img>
        <p style={{width: "40%", fontSize: "1.5rem", fontWeight: "bold" }}>H E T H</p>
    </div>
}
export default Logo