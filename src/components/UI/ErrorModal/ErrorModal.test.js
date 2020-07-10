import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ErrorModal from "./ErrorModal";

configure({ adapter: new Adapter() });

describe("<ErrorModal />", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ErrorModal />);
  });

  it("should have a className=Show if props.error=true", () => {
    wrapper.setProps({ error: true });
    expect(wrapper.find("div").first().hasClass("Show")).toEqual(true);
  });

  it("should NOT have a className=Show if props.error=false", () => {
    wrapper.setProps({ error: false });
    expect(wrapper.find("div").first().hasClass("Show")).toEqual(false);
  });
});
