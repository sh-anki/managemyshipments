import React, { Component } from "react";
import _axios from "../services/api";
import ShipmentCard from "./ShipmentCard";
import "../assets/styles/shipments.css";

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

  shipmentClickHandler = (item) => {
    this.props.history.push("/" + item.id);
}

  render() {
    return (
      <div id="dashboard">
        <section className="shipments">
          {" "}
          {this.state.data.map((item, index) => {
             return (
                <ShipmentCard shipment={item} key={index} clickHandler={() => this.shipmentClickHandler(item)} />
            )
          })}
        </section>
      </div>
    );
  }
}

export default Dashboard;
