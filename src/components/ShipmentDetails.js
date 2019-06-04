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
      })
      .catch(error => console.error(error.message));
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
      .patch("/shipments/" + this.state.shipmentDetails.id,  {        
        name: this.textInput.value
      })
      .then(response => response.data)
      .then(data => {
        this.setState({ shipmentDetails: data });
      })
      .catch(error => console.error(error.message));
  }

  render() {
    const {
      name,
      id,
      mode,
      status,
      type,
      origin,
      destination,
      cargo
    } = this.state.shipmentDetails;
    const _cargo =
      cargo &&
      cargo.map((items, index) => {
        return (
          <React.Fragment key={index}>
            <tr>
              <td rowSpan="4">Cargo {index + 1} Details</td>
            </tr>
            <tr className="cargo-item">
              <td>Type</td>
              <td>{items.type}</td>
            </tr>
            <tr className="cargo-item">
              <td>Details</td>
              <td>{items.description}</td>
            </tr>
            <tr className="cargo-item">
              <td>Volume</td>
              <td>{items.volume}</td>
            </tr>
          </React.Fragment>
        );
      });
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
                  <td colSpan={2}>
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
                  <td colSpan={2}>{id}</td>
                </tr>
                <tr>
                  <td>Shipment Mode</td>
                  <td colSpan={2}>{mode}</td>
                </tr>
                <tr>
                  <td>Port Of Origin</td>
                  <td colSpan={2}>{origin}</td>
                </tr>
                <tr>
                  <td>Shipment Destination</td>
                  <td colSpan={2}>{destination}</td>
                </tr>

                <tr>
                  <td>Shipment Type</td>
                  <td colSpan={2}>{type}</td>
                </tr>
                <tr>
                  <td>Current Status</td>
                  <td colSpan={2}>{status}</td>
                </tr>
                {_cargo}
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
