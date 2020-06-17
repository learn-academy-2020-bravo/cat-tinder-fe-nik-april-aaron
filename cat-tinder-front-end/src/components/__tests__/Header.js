import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Header from "../Header";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
it("renders the header", () => {
  const catheader = shallow(<Header />);
  expect(catheader.find("h1").text()).toEqual("Cat Tindah");
});
