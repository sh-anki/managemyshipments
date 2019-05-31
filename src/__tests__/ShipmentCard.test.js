import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShipmentCard from "../components/ShipmentCard";
import Dashboard from "../components/Dashboard";

configure({ adapter: new Adapter() });

describe("<ShipmentCard/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ShipmentCard
        shipment={{
          name: "Test Name",
          id: 123,
          origin: "",
          destination: "New York",
          mode: "sea"
        }}
      />
    );
  });

  it("should render name of shipment", () => {
    expect(wrapper.find("h4")).toHaveLength(1);
  });

  it("should render other details of shipment", () => {
    expect(wrapper.find("h5")).toHaveLength(4);
  });
});
