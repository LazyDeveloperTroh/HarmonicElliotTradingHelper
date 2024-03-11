import React from 'react';
import TradingPrinciple from "./TradingPrinciple";
import TradingTips from "./TradingTips";

function Contents() {
    return <main style={{width: "90%", backgroundColor: "#f3f4f9", borderRadius: "1.5em", padding: "2rem"}}>
        <div style={{display: "flex", height: "100%", gap: "10px"}}>
            <div style={{flex: "0 0 75%"}}>
                <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
                    <div style={{flex:"0 0 65%", backgroundColor: "red"}}></div>
                    <div style={{flex:"0 0 35%"}}>
                        <div style={{display: "flex", height: "100%"}}>
                            <div style={{flex: "0 0 50%", backgroundColor: "green"}}></div>
                            <div style={{flex: "0 0 50%", backgroundColor: "gray"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{flex: "0 0 25%"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <TradingPrinciple/>
                    <TradingTips/>
                </div>
            </div>
        </div>
    </main>;
}

export default Contents;