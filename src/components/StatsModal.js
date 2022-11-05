import * as React from "react";
import IconButton from "@mui/material/IconButton";
import BarChartIcon from "@mui/icons-material/BarChart";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import StatsModalFirstPartSub from "./StatsModalFirstPartSub";
import DistributionSub from "./DistributionSub";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

function StatsModal({ distribution, streak }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    var numWins = 0;
    for (let i = 0; i < 6; i++) {
        numWins += distribution[i];
    }

    var max = distribution[0];
    for (let i = 1; i < 7; i++) {
        if (distribution[i] > max) {
            max = distribution[i];
        }
    }

    const numLosses = distribution[6];

    const numGamesCompleted = numWins + numLosses;

    const winPercentage = (numWins * 100 / numGamesCompleted).toFixed(1);
     
    return (
        <div>
            <IconButton onClick={handleOpen}><BarChartIcon color="primary" sx={{width: 48, height: 48}}></BarChartIcon></IconButton>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <div style={{display: "flex", width: "100%"}}>
                        <div style={{marginLeft: "auto", marginRight: "auto", textAlign: "center", fontSize: "48px", fontWeight: "500"}}>Stats</div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="flex">
                        <StatsModalFirstPartSub name="Total" value={numGamesCompleted}></StatsModalFirstPartSub>
                        <StatsModalFirstPartSub name="Wins" value={numWins}></StatsModalFirstPartSub>
                        <StatsModalFirstPartSub name="Losses" value={numLosses}></StatsModalFirstPartSub>
                        <StatsModalFirstPartSub name="Win Percentage" value={numGamesCompleted === 0 ? "N/A" : winPercentage+"%"}></StatsModalFirstPartSub>
                        <StatsModalFirstPartSub name="Streak" value={streak}></StatsModalFirstPartSub>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{display: "flex", textAlign: "center", width: "100%"}}>
                        <div style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>Guess Distribution</div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="flex" style={{height: "200px"}}>
                        {distribution.map(x => <DistributionSub value={x} max={max}></DistributionSub>)}
                    </div>
                    <div className="flex">
                        {["1", "2", "3", "4", "5", "6", "❌"].map(x =>
                        <div style={{textAlign: "center", marginLeft: "auto", marginRight: "auto", width: "100%"}}>{x}</div>
                        )}
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default StatsModal