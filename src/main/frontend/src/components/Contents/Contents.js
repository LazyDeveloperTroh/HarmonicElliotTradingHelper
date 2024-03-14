import React from 'react';
import TradingPrinciple from "./TradingPrinciple";
import TradingTips from "./TradingTips";
import {Grid} from "@mui/material";

function Contents() {
    return <main style={{height: "100%"}}>
        <Grid container spacing={2} height={"100%"}>
            <Grid item container md={9}>
                <Grid item md={12} height={"50%"} style={{backgroundColor: "red"}}>
                    11
                </Grid>
                <Grid item md={6} height={"50%"} style={{backgroundColor: "green"}}>
                    22
                </Grid>
                <Grid item md={6} height={"50%"} style={{backgroundColor: "gray"}}>
                    33
                </Grid>
            </Grid>
            <Grid item container md={3}>
                <TradingPrinciple/>
                <TradingTips/>
            </Grid>
        </Grid>
    </main>;
}

export default Contents;