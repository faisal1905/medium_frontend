import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));



export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>
              <img src="simpsons.png"></img>
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap><b>
              Howard Simposns</b></Typography>
            <Grid>
              Dec 11
            </Grid>
            <Grid>
              Doitforstate is a great example of how education (or lack thereof) can efect busness.
            </Grid>            
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <IconButton>
          <Avatar src="https://static.thenounproject.com/png/1085294-200.png" style={{ height: "30px", width: "30px" }}/>
        </IconButton>
        <IconButton align="right">
          <BookmarkBorderIcon/>
        </IconButton>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap><b>
              Wahyu</b></Typography>
              <Grid>
                Dec 11
              </Grid>
              <Grid>
                Thats good article....
              </Grid>
          </Grid>
        </Grid>
        <IconButton >
          <Avatar src="https://static.thenounproject.com/png/1085294-200.png" style={{ height: "30px", width: "30px" }} />
        </IconButton>
        <IconButton align="right">
          <BookmarkBorderIcon />
        </IconButton>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>
          <Grid item xs>
            <Typography><b>Andy</b></Typography>
            <Grid>
              Dec 11
            </Grid>
            <Grid>
              so recomended article...
            </Grid>
          </Grid>
        </Grid>
        <IconButton >
          <Avatar src="https://static.thenounproject.com/png/1085294-200.png" style={{ height: "30px", width: "30px" }} />
        </IconButton>
        <IconButton align="right">
          <BookmarkBorderIcon />
        </IconButton>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>H</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Hang Chi</Typography>
            <Grid>
              Dec 12
            </Grid>
            <Grid>
              Interesting story. I skimmed most of it but the story it self kept me ksimming. And the writing wasn't bad. Thanks for posting.
            </Grid>
          </Grid>
        </Grid>
        <IconButton >
          <Avatar src="https://static.thenounproject.com/png/1085294-200.png" style={{ height: "30px", width: "30px" }} />
        </IconButton>
        <IconButton align="right">
          <BookmarkBorderIcon />
        </IconButton>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>Y</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Yordan A.B</Typography>
            <Grid>
              Dec 12
            </Grid>
            <Grid>
              More than an article, this was like reading a cliffhanger book. sequence of event have been panned down very well.
            </Grid>
          </Grid>
        </Grid>
        <IconButton >
          <Avatar src="https://static.thenounproject.com/png/1085294-200.png" style={{ height: "30px", width: "30px" }} />
        </IconButton>
        <IconButton align="right">
          <BookmarkBorderIcon />
        </IconButton>
      </Paper>
    </div>
  );
}