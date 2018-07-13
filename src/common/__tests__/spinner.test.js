import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Spinner } from "../spinner";

describe("Spinner", () => {
    it("renders a spinner", () => {
        const component = shallow(<Spinner />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
