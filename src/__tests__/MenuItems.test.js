import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MenuItems from "../components/MenuItems";

configure({ adapter: new Adapter() });

describe("<MenuItems/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MenuItems />);
  });
  it("should render two menu items", () => {
    expect(wrapper.find(".search-field")).toHaveLength(2);
  });
});
