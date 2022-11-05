import * as React from "react";
import styled from "@emotion/styled";

function StatsModalFirstPartSub({ name, value }) {

    const width = name === "Completed Games" || name === "Win Percentage" ? "200%" : "100%";

    const Div = styled.div`
    width: ${width};
    text-align: center;
    `;

    const Span = styled.span`
    font-weight: bold;
    font-size: 24px;
    `;

    return (
        <Div>
            <span>{name}</span>
            <br/>
            <br/>
            <br/>
            <Span>{value}</Span>
        </Div>
    )
}

export default StatsModalFirstPartSub