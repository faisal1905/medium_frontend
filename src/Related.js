import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from "@material-ui/core";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function Related() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item style={{margin:"10px"}}>
              
              <Grid >
                <p>More from OneZero</p>
                <img style={{ width: "400px", height: "250px" }} src="https://miro.medium.com/max/1500/1*XqdcvabbiEpyJehoTXxCSg.jpeg"></img>
              </Grid>
              <Grid>
                <div>
                  <h4>Beep Beep : The History od George Laurer and the Barcode</h4>
                </div>
              </Grid>

              <Grid container className={classes.root} >
                <Grid>
                  <div>
                    <Avatar src="simpsons.png" />
                  </div>
                </Grid>

                <br></br>
                <br></br>

                <Grid spacing={4}>
                  <p>Chris Stokel-Walker in OneZone</p>
                  <p>
                    Dec 11 . 11 min read 
                  </p>
                </Grid>

                <Grid container className={classes.root} style={{width:"90px", height:"90px"}}>
                  <IconButton>
                    <Avatar src="https://static.thenounproject.com/png/1085294-200.png" />                    
                  </IconButton>
                  <div>428</div>
                  <BookmarkBorderIcon/>
                </Grid>
              </Grid>


            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

