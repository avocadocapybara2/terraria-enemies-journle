import * as React from "react";
import EntrySecondPartImage from "./EntrySecondPartImage";
import EntrySecondPartSub from "./EntrySecondPartSub";

function EntrySecondPart({ enemy, target }) {

    var typeSub;
    var environmentSub;
    var maxLifeSub;
    var damageSub;
    var defenseSub;
    var kbResistSub;
    var moneySub;

    if (target === undefined) {
        typeSub = <EntrySecondPartSub firstSpanContent="Type" value={enemy.type}></EntrySecondPartSub>;
        environmentSub = <EntrySecondPartSub firstSpanContent="Environment" value={enemy.environment}></EntrySecondPartSub>;
        maxLifeSub = <EntrySecondPartSub firstSpanContent="Max Life" value={enemy.maxLife}></EntrySecondPartSub>;
        damageSub = <EntrySecondPartSub firstSpanContent="Damage" value={enemy.damage}></EntrySecondPartSub>;
        defenseSub = <EntrySecondPartSub firstSpanContent="Defense" value={enemy.defense}></EntrySecondPartSub>;
        kbResistSub = <EntrySecondPartSub firstSpanContent="KB Resist" value={enemy.kbResist}></EntrySecondPartSub>;
        moneySub = <EntrySecondPartSub firstSpanContent="Money" value={enemy.money}></EntrySecondPartSub>;
    }
    else {
        typeSub = <EntrySecondPartSub firstSpanContent="Type" value={enemy.type} targetValue={target.type}></EntrySecondPartSub>;
        environmentSub = <EntrySecondPartSub firstSpanContent="Environment" value={enemy.environment} targetValue={target.environment}></EntrySecondPartSub>;
        maxLifeSub = <EntrySecondPartSub firstSpanContent="Max Life" value={enemy.maxLife} targetValue={target.maxLife}></EntrySecondPartSub>;
        damageSub = <EntrySecondPartSub firstSpanContent="Damage" value={enemy.damage} targetValue={target.damage}></EntrySecondPartSub>;
        defenseSub = <EntrySecondPartSub firstSpanContent="Defense" value={enemy.defense} targetValue={target.defense}></EntrySecondPartSub>;
        kbResistSub = <EntrySecondPartSub firstSpanContent="KB Resist" value={enemy.kbResist} targetValue={target.kbResist}></EntrySecondPartSub>;
        moneySub = <EntrySecondPartSub firstSpanContent="Money" value={enemy.money} targetValue={target.money}></EntrySecondPartSub>;
    }

    return (
        <div className="flex">
            <EntrySecondPartImage imageName={enemy.imageName}></EntrySecondPartImage>
            {typeSub}
            {environmentSub}
            {maxLifeSub}
            {damageSub}
            {defenseSub}
            {kbResistSub}
            {moneySub}
        </div>
    )
}

export default EntrySecondPart