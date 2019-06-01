import React from "react";
import "../assets/styles/shipments.css";

const ShipmentCard = props => {
  const { name, id, origin, destination, mode, status } = props.shipment;
  return (
    <div
      className="shipment-card"
      onClick={() => props.clickHandler(props.shipment)}
    >
      <div className="shipment-info">
        <h4 className={name ? "shipment-name" : "shipment-nt"}>
          {name ? name : "Not Available"}
        </h4>
        <h5>
          <strong>Shipment ID: </strong>
          <span className="shipment-name">{id}</span>
        </h5>
        <h5>
          <strong>Origin: </strong>
          <span className={origin ? "shipment-name" : "shipment-nt"}>
            {origin ? origin : "Not Available"}
          </span>
        </h5>
        <h5>
          <strong>Destination: </strong>
          <span className={destination ? "shipment-name" : "shipment-nt"}>
            {destination ? destination : "Not Available"}
          </span>
        </h5>
        <h5>
          <strong>Mode: </strong>
          <span className={mode ? "shipment-name" : "shipment-nt"}>
            {mode ? mode : "Not Available"}
          </span>
        </h5>
        <h5>
          <strong>Status: </strong>
          <span className={mode ? "shipment-name" : "shipment-nt"}>
            {status ? status : "Not Available"}
          </span>
        </h5>
      </div>
      <div className="click-layer">
        <p className="click-description">Click for more details</p>
      </div>
    </div>
  );
};

export default ShipmentCard;
