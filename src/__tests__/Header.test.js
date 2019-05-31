import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../components/Header";
import { exportAllDeclaration } from "@babel/types";

configure({ adapter: new Adapter() });

describe("<Header/>", () => {
  const wrapper = shallow(<Header />);
  it("Should display logo image", () => {
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("Should display correct title of the app", () => {
    expect(wrapper.find(".title").text()).toEqual("Freight Hub");
  });
});
