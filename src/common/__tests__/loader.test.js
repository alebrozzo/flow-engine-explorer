import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Loader } from "../loader";

describe("Loader", () => {
    it("renders a loader", () => {
        const component = shallow(<Loader />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
