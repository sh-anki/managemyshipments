import React, { Component } from "react";
import _axios from "../services/api";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    await _axios
      .get("/shipments")
      .then(response => response.data)
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <div id="dashboard">
        <section className="shipments">
          {" "}
          {this.state.data.map((item, index) => {
            return <div key={index}>{item.id}</div>;
          })}
        </section>
      </div>
    );
  }
}

export default Dashboard;
