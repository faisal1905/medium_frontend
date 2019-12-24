import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Fouter() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      

      <Grid container className={classes.root} spacing={1} item xs={12} style={{background:"black" , color:"white"}}>
        <Grid style={{marginRight:"100px"}}>
          <paper>
            <h1>
              Discover Medium
            </h1>
            <p>
              Wellcome to place where word matter. On Medium, Smart
            </p>
            <p>
              voice and original ideas take center stage - with no ads in
            </p>
            <p>
              sight. Watch
            </p>
          </paper>
        </Grid>

        <Grid style={{ marginRight: "100px" }}>
          <paper>
            <div>
            <h1>Make Medium yours</h1>
              <p>Follow all the topics you care about, 
                <p>and we’ll deliver the best stories</p>
                 for you to your homepage and inbox. Explore </p>
            </div>
          </paper>
        </Grid>
        <Grid style={{ marginRight: "100px" }}>
          <paper>
            <div>
              <h1>Become a member</h1>
              <p>Get unlimited access to the best stories on Medium - and</p>
              <p>support writers while you're at it. just $5/month. Upgrade</p>
            </div>
          </paper>
        </Grid>
        <Divider/>
        <Grid container  className={classes.root} >
          <div>
            <Grid item xs={12} style={{ flex:1, display:"flex", flexDirection:"row" }}>
            <h1>
              Medium
            </h1>
            </Grid>

            <Grid className={classes.root} align="right" item xs={12} >
              <div>
              About
             
              Help
              
              Legal
              </div>
            </Grid>
          </div>
        </Grid>

      </Grid>
    </Grid>
  );
}