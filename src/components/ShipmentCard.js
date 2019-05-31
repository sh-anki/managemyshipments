import React from "react";
import "../assets/styles/shipments.css";

const ShipmentCard = props => {
  const { name, id, origin, destination, mode } = props.shipment;
  return (
    <div
      className="shipment-card"
      onClick={() => props.clickHandler(props.shipment)}
    >
      <div className="shipment-info">
        <h4 className="shipment-name">{name ? name : "Not Available"}</h4>
        <h5>
          <strong>Shipment ID: </strong>
          {id ? id : "Not Available"}
        </h5>
        <h5>
          <strong>Origin: </strong>
          {origin ? origin : "Not Available"}
        </h5>
        <h5>
          <strong>Destination: </strong>
          {destination ? destination : "Not Available"}
        </h5>
        <h5>
          <strong>Mode: </strong>
          {mode ? mode : "Not Available"}
        </h5>
      </div>
      <div className="click-layer">
        <p className="click-description">Click for more details</p>
      </div>
    </div>
  );
};

export default ShipmentCard;
