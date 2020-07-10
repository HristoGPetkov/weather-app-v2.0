import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { NavItems } from "./NavItems";
import NavItem from "./NavItem/NavItem";
import Searchbar from "../../UI/Searchbar/Searchbar";

configure({ adapter: new Adapter() });

describe("<NavItems />", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<NavItems />);
  });

  it("should always render Searchbar", () => {
    expect(wrapper.find(Searchbar).exists()).toEqual(true);
  });

  it("should render two NavItem components if props.city=true && props.country=true", () => {
    wrapper.setProps({ city: "Some city", country: "Some country" });
    expect(wrapper.find(NavItem)).toHaveLength(2);
  });

  it("should NOT render any NavItem components if props.city=false && props.country=false", () => {
    wrapper.setProps({ city: "", country: "" });
    expect(wrapper.find(NavItem)).toHaveLength(0);
  });
});
