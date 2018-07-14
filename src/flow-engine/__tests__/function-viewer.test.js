import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { FunctionViewer } from "../function-viewer";
import { getData } from "../../resources/flow-api";

describe("FunctionViewer", () => {
    let defaults;
    beforeAll(() => {
        defaults = {
            functions: getData(),
        };
    });

    it("1 - renders a function's data", () => {
        const component = shallow(<FunctionViewer flowFunction={defaults.functions[0]} passed={true} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it("2 - renders a function's data when no more functions in chain", () => {
        const fn = getData()[1];
        const component = shallow(<FunctionViewer flowFunction={defaults.functions[1]} passed={true} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it("3 - renders pass header properly", () => {
        const fn = getData()[1];
        const component = shallow(<FunctionViewer flowFunction={defaults.functions[1]} passed={true} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it("4 - renders fail header properly", () => {
        const fn = getData()[1];
        const component = shallow(<FunctionViewer flowFunction={defaults.functions[1]} passed={false} />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
