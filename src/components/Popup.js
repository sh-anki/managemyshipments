import React from "react";
import "../assets/styles/popup.css";

const Popup = props => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <div className="text-input">
          <input
            type="text"
            id="input-name"
            ref={props.inputRef}
            placeholder="Enter new name for Shipment in here!"
          />
        </div>
        <div className="pop-action">
          <div className="popup-close">
            <button id="button-cancel" onClick={props.closePopup}>
              Cancel
            </button>
          </div>
          <div className="popup-close">
            <button id="button-submit" onClick={props.handleNameChange}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
