import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Popup from "./index";

configure({
  adapter: new Adapter(),
});

describe("<Popup/>", () => {
  it("should hide children when popup status is false", () => {
    const component = shallow(<Popup popupStatus={true} />);
    component.setProps({ popupStatus: false });
    expect(component.hasClass("Hide"));
  });
});
