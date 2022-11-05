import * as React from "react";
import styled from "@emotion/styled";
import "./EntrySecondPartSub.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {yellowCheck} from "../index";

function formatMoney(moneyValue) {
    if (moneyValue === 0) {
        return "0";
    }
    var x = moneyValue;
    var platinum = 0;
    var gold = 0;
    var silver = 0;
    var copper = 0;
    if (x >= 1000000) {
        platinum = Math.floor(x / 1000000);
        x %= 1000000;
    }
    if (x >= 10000) {
        gold = Math.floor(x / 10000);
        x %= 10000;
    }
    if (x >= 100) {
        silver = Math.floor(x / 100);
        x %= 100;
    }
    copper = x;
    return (
        <div>
            {platinum > 0 && <div>{platinum}<img src="images/Platinum_Coin.png" ></img></div>}
            {gold > 0 && <div>{gold}<img src="images/Gold_Coin.png" ></img></div>}
            {silver > 0 && <div>{silver}<img src="images/Silver_Coin.png" ></img></div>}
            {copper > 0 && <div>{copper}<img src="images/Copper_Coin.png" ></img></div>}
        </div>
    )
}

function EntrySecondPartSub({ firstSpanContent, value, targetValue}) {
    
    var content;
    if (firstSpanContent === "KB Resist" && value !== "N/A") {
        content = value + "%";
    } else if (firstSpanContent === "Money") {
        content = formatMoney(parseInt(value));
    } else {
        content = value;
    }

    var width = firstSpanContent === "Environment" || firstSpanContent === "Type" ? "200%" : "100%";

    var secondSpan;
    
    var Div;
    
    if (targetValue === undefined) {
        Div = styled.div`
        text-align: center;
        width: ${width};
        height: 100px;
        display: block;
        `;
        secondSpan = <span className="entrySecondPartSubSecondSpan">{content}</span>
    }
    else {
        var color;
        if (value === targetValue) {
            color = "green";
        }
        else if (firstSpanContent !== "Type" && firstSpanContent !== "Environment") {
            color = "red";
        }
        else {
            color = yellowCheck(value, targetValue) ? "yellow" : "red";
        }
        Div = styled.div`
        text-align: center;
        width: ${width};
        height: 100px;
        display: block;
        background-color: ${color};
        `;
        if (firstSpanContent === "Type" || firstSpanContent === "Environment" || value === targetValue) {
            secondSpan = <span className="entrySecondPartSubSecondSpan">{content}</span>;
        }
        else {
            const icon = parseInt(value) < parseInt(targetValue) ? <ArrowUpwardIcon></ArrowUpwardIcon> : <ArrowDownwardIcon></ArrowDownwardIcon>;
            secondSpan = <span className="entrySecondPartSubSecondSpan">{icon}{content}</span>;
        }
    }

    return (
        <Div>
            <span className="entrySecondPartSubFirstSpan">{firstSpanContent}</span>
            <br></br>
            {secondSpan}
        </Div>
    )
}

export default EntrySecondPartSub