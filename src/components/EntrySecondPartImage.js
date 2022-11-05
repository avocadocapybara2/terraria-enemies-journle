import * as React from "react";
import "./EntrySecondPartImage.css";

function EntrySecondPartImage({ imageName }) {
    return (
        <div className="entrySecondPartImageDiv">
            <img src={"images/"+imageName}  className="entrySecondPartImageImg"></img>
        </div>
    )
}

export default EntrySecondPartImage