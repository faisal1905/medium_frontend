import React, { Component } from "react";
import { Grid, Typography, Paper, ButtonBase } from "@material-ui/core";

export default class Popullar extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Paper>
            <div align="left">
              <Grid container spacing={2}>
                <Grid item direction="column">
                  <ButtonBase align="center">
                    <h1>{this.props.id}</h1>
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>{this.props.title}</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {this.props.subTitle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {this.props.infoDate}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
        <hr />
      </div>
    );
  }
}
