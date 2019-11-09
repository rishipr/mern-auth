import React, { Component } from "react";
import { Link } from "react-router-dom";

//fontFamily : monospace

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "40vh" }} className="container valign-wrapper">
          <div className="col s12 center-align">
            <img src="https://static1.squarespace.com/static/53fe0c21e4b070b8a2eac501/t/57097ffa2eeb819034c4c4c4/1542582082356/?format=1500w" width= "70%" id="icon" alt="User Icon" style={{padding: "20px"}} />
        </div>
      </div>
    );
  }
}

export default Landing;
