import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Login from "./Login";
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        GET STARTED
      </Button>
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
            <DialogTitle id="form-dialog-title">Join medium</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Create an account to receive great stories in your inbox,
                personalize your homepage, and follow authors and topics that
                you love.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Your username"
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

              <br></br>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Your username"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions style={{ justifyContent: "center" }}>
              <div>
                <Button
                  style={{ background: "black", color: "white" }}
                  onClick={handleClose}
                >
                  Registation
                </Button>
              </div>
            </DialogActions>
            <br></br>
            <p style={{ paddingBottom: "10px" }}>
              Already have an account? <Login />
            </p>
            <br></br>
            <DialogContentText>
              To make Medium work, we log user data and share it with service
              providers. Click “Sign Up” above to accept Medium’s Terms of{" "}
              <Link href="#">Service</Link> &{" "}
              <Link href="#">Privacy Policy.</Link>
            </DialogContentText>
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
