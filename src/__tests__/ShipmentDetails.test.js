import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Link } from "react-router-dom";
import { create } from "react-test-renderer";
import { shipmentDetails } from "../__fixtures__/fixtures";
import mockAxios from "../__mocks__/axios";

import ShipmentDetails from "../components/ShipmentDetails";

configure({ adapter: new Adapter() });

describe("<ShipmentDetails/>", () => {
  const match = { params: { id: "S1000" } };

  let wrapper = shallow(<ShipmentDetails match={match} />);

  const resp = {
    data: shipmentDetails
  };

  beforeEach(() => {
    wrapper = shallow(<ShipmentDetails />);
  });

  it("Should fetch data of correct shipment id", async () => {
    try {
      mockAxios.get.mockResolvedValue(resp);
      const component = create(<ShipmentDetails match={match} />);
      const instance = component.getInstance();
      await instance.componentDidMount();
      expect(instance.state.shipmentDetails.id).toEqual("S1000");
    } catch (e) {
      console.error(e);
    }
  });

  it("should display shipment details table", () => {
    expect(wrapper.find(".shipments-table").exists()).toBeTruthy();
  });

  it("should display shipment details table with seven rows", () => {
    expect(wrapper.find("table.shipments-table tbody tr").length).toEqual(7);
  });

  it("should display Button with text Home", () => {
    expect(wrapper.find(Link).props().children).toEqual("Home");
  });

  it("should display button with value Update Name to update shipment name", () => {
    expect(wrapper.find(".edit-button").props().value).toEqual("Update Name");
  });

  it("should display name change popup on click of update button ", () => {
    wrapper.find(".edit-button").simulate("click");
    expect(wrapper.find("Popup").length).toEqual(1);
  });
});
