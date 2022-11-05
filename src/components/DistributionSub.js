import * as React from "react";
import styled from "@emotion/styled";

function DistributionSub({ value, max }) {

    const Div = styled.div`
    display: inline-block;
    width: 40px;
    height: ${value === 0 ? "0px" : `calc(${value}% / ${max} * 100)`};
    background-color: gray;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    text-align: center;
    `;

    return (
        <Div>
            {value !== 0 && value}
        </Div>
    )
}

export default DistributionSub