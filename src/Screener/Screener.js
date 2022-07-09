import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import ScreenCapture from "./ScreenCapture";
import "./style.css";

export default class Screener extends Component {
  state = {
    name: "GAMO",
    screenCapture: "",
  };

  handleScreenCapture = (screenCapture) => {
    this.setState({
      screenCapture,
    });
  };

  render() {
    const { screenCapture } = this.state;
    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <Fragment>
            <p>Start editing to see some magic happen :)</p>
            <button onClick={onStartCapture}>Capture</button>
            <br />
            <br />
            <img src={screenCapture} />
          </Fragment>
        )}
      </ScreenCapture>
    );
  }
}
