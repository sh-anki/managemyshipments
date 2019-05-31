import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { create } from "react-test-renderer";
import mockAxios from "../__mocks__/axios";
import { data } from "../__fixtures__/fixtures";
import Dashboard from "../components/Dashboard";

configure({ adapter: new Adapter() });

jest.mock("axios");

describe("<Dashboard/>", () => {
  let wrapper;

  const resp = {
    data: data
  };

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it("Should fetch data from API in componentDidMount", async () => {
    try {
      mockAxios.get.mockResolvedValue(resp);
      const component = create(<Dashboard />);
      const instance = component.getInstance();
      await instance.componentDidMount();
      expect(instance.state.data.length).toEqual(2);
    } catch (e) {
      console.error(e);
    }
  });

  it("should display the correct number of shipments on dashboard", () => {
    wrapper.setState({
      data: resp.data,
      currentPage: 1,
      itemsPerPage: 10
    });
    expect(wrapper.find(".shipments").children().length).toEqual(2);
  });

  it("should display correct number of page count", () => {
    wrapper.setState({
      currentPage: 1,
      itemsPerPage: 1
    });
    expect(wrapper.find(".pagination a").length).toEqual(2);
  });

  it("should display correct number of shipments per page", () => {
    wrapper.setState({
      currentPage: 1,
      itemsPerPage: 1
    });
    expect(wrapper.find(".shipments").children().length).toEqual(1);
  });
});
