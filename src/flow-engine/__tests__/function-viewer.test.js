import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { FunctionViewer } from "../function-viewer";
import { getData } from "../../resources/flow-api";

describe("FunctionViewer", () => {
    it("renders a function's data", () => {
        const fn = getData()[0];
        const component = shallow(<FunctionViewer flowFunction={fn} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it("renders a function's data when no more functions in chain", () => {
        const fn = getData()[1];
        const component = shallow(<FunctionViewer flowFunction={fn} />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
