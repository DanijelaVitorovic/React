import React, { Component } from "react";
import style from "./style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashboardTranslation, dashboardTranslation } from "../../translations";
import ParticlesBg from "particles-bg";
import CaseMovementList from "../Containers/CaseMovementList";
import DocumentMovementList from '../Containers/DocumentMovementList';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { findUserByUsername } from "../../actions/userActions";
import { connect } from "react-redux";
import { getEmployeeName } from "../../globals";
import companyLogo from "../../avatar.png";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

class Dashboard extends Component {
   render() {
    return (
      <div className="wrapper">
        <div className="text-center">
          <h1 class="text-center">{DashboardItems.welcomeTitle}</h1>
          <p class="text-center">{DashboardItems.welcomeParagraph}</p>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <CaseMovementList />
            </Paper>
          </Grid>

          <Grid item xs={3} style={{ paddingLeft: 150 }}>
            <Paper>
              <div className="account-page-wrapper">
                <div className="data text-center">
                  <div className="font__p data-item" style={{ paddingTop: 10 }}>
                    <h5 style={{ marginRight: ".4em" }} className="font__bold">
                      {DashboardItems.name}{" "}
                      {employee?.physicalEntity?.firstName}
                    </h5>
                  </div>
                  <div className="font__p data-item">
                    <h6 style={{ marginRight: ".4em" }} className="font__bold">
                      {DashboardItems.surname}
                      {employee?.physicalEntity?.lastName}
                    </h6>{" "}
                    {}
                  </div>

                  <div
                    className="font__p data-item"
                    style={{ paddingBottom: 10 }}
                  >
                    <h6 style={{ marginRight: ".4em" }} className="font__bold">
                      {DashboardItems.username}
                      {employee?.user?.username}
                    </h6>{" "}
                    {}
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <br></br>
        <Grid>
          <Paper>
            <DocumentMovementList />
          </Paper>
        </Grid>
      </div>
    );
  }
}


export default (Dashboard);
