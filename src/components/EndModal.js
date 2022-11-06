import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { yellowCheck } from "../index";

const style = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

function EndModal({ thisJournleDay, target, won, guesses }) {
    const [open, setOpen] = React.useState(true);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleSnackbarOpen = () => setSnackbarOpen(true);
    const handleSnackbarClose = () => setSnackbarOpen(false);

    function share() {
        var result = "";
        if (won) {
            result += `I solved the Terraria Enemies Journle #${thisJournleDay} in ${guesses.length} guesses!`;
        } else {
            result += `I did not solve the Terraria Enemies Journle #${thisJournleDay}.`
        }
        for (let i = 0; i < guesses.length; i++) {
            result += "\n";

            if (guesses[i].type === target.type) {
                result += "🟩";
            } else if (yellowCheck(guesses[i].type, target.type)) {
                result += "🟨";
            } else {
                result += "🟥";
            }

            if (guesses[i].environment === target.environment) {
                result += "🟩";
            } else if (yellowCheck(guesses[i].environment, target.environment)) {
                result += "🟨";
            } else {
                result += "🟥";
            }

            if (guesses[i].maxLife === target.maxLife) {
                result += "🟩";
            } else if (guesses[i].maxLife > target.maxLife) {
                result += "⬇️";
            } else {
                result += "⬆️";
            }

            if (guesses[i].damage === target.damage) {
                result += "🟩";
            } else if (guesses[i].damage > target.damage) {
                result += "⬇️";
            } else {
                result += "⬆️";
            }

            if (guesses[i].defense === target.defense) {
                result += "🟩";
            } else if (guesses[i].defense > target.defense) {
                result += "⬇️";
            } else {
                result += "⬆️";
            }

            if (guesses[i].kbResist === target.kbResist) {
                result += "🟩";
            } else if (guesses[i].kbResist > target.kbResist) {
                result += "⬇️";
            } else {
                result += "⬆️";
            }

            if (guesses[i].money === target.money) {
                result += "🟩";
            } else if (guesses[i].money > target.money) {
                result += "⬇️";
            } else {
                result += "⬆️";
            }

            result += ` ||${guesses[i].name}||`;
        }
        if (!won) {
            result += `\nAnswer: ||${target.name}||`
        }
        result += "\nhttps://avocadocapybara2.github.io/terraria-enemies-journle/";
        navigator.clipboard.writeText(result);
        handleSnackbarOpen();
    }

    return (
        <div>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <Box sx={style}>
                {won &&
                <Typography variant="h4" component="h4">
                    You found the correct answer!
                </Typography>
                }
                {!won &&
                <Typography variant="h4" component="h4">
                    You did not find the correct answer.
                </Typography>
                }
                {won &&
                <Typography sx={{ mt: 2 }}>
                    You found the correct answer <b>{target.name}</b> in {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}!
                </Typography>
                }
                {!won &&
                <Typography sx={{ mt: 2 }}>
                    The correct answer was <b>{target.name}</b>.
                </Typography>
                }
                <img src={"images/" +target.imageName} ></img>
                <br></br>
                <Button variant="contained" onClick={share}>Share</Button>
            </Box>
      </Modal>
      <Snackbar open={snackbarOpen} autoHideDuration={10000} onClose={handleSnackbarClose} message="Copied to clipboard"></Snackbar>
      </div>
    )
}

export default EndModal