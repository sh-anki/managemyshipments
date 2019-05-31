import React, { Component } from "react";
import { Link } from "react-router-dom";
import _axios from "../services/api";
import Popup from "./Popup";
import "../assets/styles/shipments-details.css";

class ShipmentDetails extends Component {
  constructor() {
    super();
    this.state = {
      shipmentDetails: [],
      showPopup: false,
      newName: ""
    };
  }

  async componentDidMount() {
    await _axios
      .get("/shipments/" + this.props.match.params.id)
      .then(response => response.data)
      .then(data => {
        this.setState({ shipmentDetails: data });
      });
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  async handleNameChange() {
    this.setState({
      newName: this.textInput.value,
      showPopup: !this.state.showPopup
    });
    await _axios
      .patch("/shipments/" + this.state.shipmentDetails.id, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        name: this.textInput.value
      })
      .then(response => response.data)
      .then(data => {
        this.setState({ shipmentDetails: data });
      });
  }

  render() {
    const {
      name,
      id,
      mode,
      status,
      type,
      origin,
      destination
    } = this.state.shipmentDetails;
    return (
      <React.Fragment>
        <div id="main">
          <div className="button-wrapper">
            <Link to={"/"} className="back-button">
              Home
            </Link>
          </div>
          <div className="inner">
            <table className="shipments-table">
              <caption>Shipment Summary</caption>
              <tbody>
                <tr>
                  <td>Shipment Name</td>
                  <td>
                    {name}
                    <input
                      type="button"
                      className="edit-button"
                      value="Update Name"
                      title="click to change Shipment name"
                      onClick={this.togglePopup}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Shipment ID</td>
                  <td>{id}</td>
                </tr>
                <tr>
                  <td>Shipment Mode</td>
                  <td>{mode}</td>
                </tr>
                <tr>
                  <td>Port Of Origin</td>
                  <td>{origin}</td>
                </tr>
                <tr>
                  <td>Shipment Destination</td>
                  <td>{destination}</td>
                </tr>

                <tr>
                  <td>Shipment Type</td>
                  <td>{type}</td>
                </tr>
                <tr>
                  <td>Current Status</td>
                  <td>{status}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {this.state.showPopup && (
            <Popup
              closePopup={this.togglePopup}
              inputRef={input => (this.textInput = input)}
              handleNameChange={this.handleNameChange.bind(this)}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ShipmentDetails;
