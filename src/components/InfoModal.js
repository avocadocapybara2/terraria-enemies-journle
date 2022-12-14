import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function InfoModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen}><InfoIcon color="primary" sx={{width: 48, height: 48}}></InfoIcon></IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} style={{scrollY: "auto"}}>
          <Typography variant="h6" /*component="h2"*/>
            Info
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Welcome to the Terraria Enemies Journle!
            <br/>
            <br/>
            This is a Wordle-like game. It's pretty much the same exact thing as <a href="https://hunters-journle.web.app/game">Hunter's Journle</a> by NerfIrelia73, 
            which inspired this and gives this its name. Big credit to NerfIrelia73 and the original Hunter's Journle!
            <br/>
            <br/>
            Each day, there is a new correct answer. The objective of the game is to guess the correct answer in as few guesses as possible. The game ends in a win if you guess the correct answer within 6 guesses. The game ends in a loss if you guess 6 times without guessing the correct answer. The correct answer changes at midnight local time each day.
            <br/>
            <br/>
            You choose a guess with the search bar on the left and today's history of guesses and each guess's outcome will show up on the right.
            For each category about a guess, the background will be green if that category matches the target and red if it does not.
            For Type and Environment, if the guess does not match the target but shares at least one part separated by commas with the target, the background will be yellow.
            For all other categories, if the category does not match the target, there will be an up or down arrow indicating the direction of the target's category relative to the guess.
            <br/>
            <br/>
            For example, if today's answer is Antlion Charger, the game could look like the following:
          </Typography>
          <img src="images/example_game.png" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}></img>
          <Typography>
            <br/>
            <br/>
            All values are taken from the Terraria Wiki for Classic Mode in the Desktop version of Terraria.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default InfoModal
