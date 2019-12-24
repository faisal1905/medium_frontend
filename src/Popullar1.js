import React, { Component } from "react";
import { Grid, Typography, Paper, ButtonBase } from "@material-ui/core";

export default class Popullar1 extends Component {
  render() {
    return (
      <div>
        <div margintop="10px">
          <hr />
        </div>
        <Grid>
          <Paper>
            <div align="left">
              <Grid container spacing={2}>
                <Grid item direction="column">
                  <ButtonBase align="center">
                    <img src={this.props.image}></img>
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
