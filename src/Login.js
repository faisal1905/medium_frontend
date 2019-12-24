import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import "./App.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link color="primary" onClick={handleClickOpen}>
        sign in
      </Link>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Grid container item spacing={3} style={{ textAlign: "center" }}>
          <Grid item xs={3}>
            {" "}
            <img src="./kiri.png"></img>
          </Grid>
          <Grid item xs={6}>
            <DialogTitle id="form-dialog-title">Sign ih with email</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the email address associated with your account, and we'll
                send a magic link to your inbox.
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Your email"
                type="email"
                fullWidth
              />

              <br></br>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Your password"
                type="email"
                fullWidth
              />
            </DialogContent>

            <br></br>

            <DialogActions style={{ alignItems: "center" }}>
              <div>
                <Button
                  style={{
                    background: "black",
                    color: "white",
                    alignContent: "center"
                  }}
                  onClick={handleClose}
                >
                  Continue
                </Button>
              </div>
            </DialogActions>

            <p style={{ paddingBottom: "10px" }}>
              {" "}
              <Link href="#"> {"< All sign in option"}</Link>
            </p>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <img src="./kanan.png"></img>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
