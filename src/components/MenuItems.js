import React from "react";
import "../assets/styles/menu-items.css";

const MenuItems = (props) => {
    return (
        <section className="option-fields">
            <div className="search-field">
                <input type="text" className="input" onChange={props.handleIdSearch} ref={props.searchIdRef} placeholder="Search Shipment ID" />
            </div>
            <label>Sort By:</label>
            <div className="search-field">
                <select className="input" onChange={props.handleSort} ref={props.sortRef} placeholder="Sort By">
                    <option value="id">Shipment Id</option>
                    <option value="name">Shipment Name</option>
                    <option value="mode">Shipment Mode</option>
                    <option value="status">Shipment Status</option>
                </select>
            </div>
        </section>
    )

}

export default MenuItems;