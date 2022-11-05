import * as React from "react";
import EntrySecondPart from "./EntrySecondPart";
import "./Entry.css";

function Entry({ enemy, target }) {
    return (
        <div>
            <div className="entryFirstPart"><b>{enemy.name}</b></div>
            <EntrySecondPart enemy={enemy} target={target}></EntrySecondPart>
        </div>
    )
}

export default Entry