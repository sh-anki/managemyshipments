
import React, { Component } from 'react';
import _axios from "../services/api";
import "../assets/styles/shipments-details.css";

class ShipmentDetails extends Component {
    constructor() {
        super();
        this.state = {
            shipmentDetails: [],
            showPopup: false,
            newName: ''
        }
    }

    async componentDidMount() {
        await _axios.get("/shipments/" + this.props.match.params.id).then(response => response.data)
            .then((data) => {
                this.setState({ shipmentDetails: data });
            });
    }

  

    render() {
        const { name, id, mode, status, type, origin, destination } = this.state.shipmentDetails;
        return (
            <React.Fragment>
                <div id="main">                    
                    <div>
                        <table className="shipments-table">
                            <caption>Shipment Summary</caption>
                            <tbody>
                                <tr>
                                    <td >Shipment Name</td>
                                    <td >{name}</td>
                                </tr>
                                <tr>
                                    <td >Shipment ID</td>
                                    <td >{id}</td>
                                </tr>
                                <tr>
                                    <td >Shipment Mode</td>
                                    <td >{mode}</td>
                                </tr>
                                <tr>
                                    <td >Port Of Origin</td>
                                    <td >{origin}</td>
                                </tr>
                                <tr>
                                    <td >Shipment Destination</td>
                                    <td >{destination}</td>
                                </tr>

                                <tr>
                                    <td >Shipment Type</td>
                                    <td >{type}</td>
                                </tr>
                                <tr>
                                    <td >Current Status</td>
                                    <td >{status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                    
                </div>
            </React.Fragment>
        );
    }
}

export default ShipmentDetails;

