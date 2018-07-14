import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { getData } from "../../resources/flow-api";
import { FlowPage } from "../flow-page";

describe("FlowPage", () => {
    let defaults;
    beforeAll(() => {
        defaults = {
            functions: getData(),
            executionOrder: [{ id: 1, result: true }, { id: 2, result: false }],
        };
    });

    it("renders the page", () => {
        const component = shallow(<FlowPage functions={defaults.functions} executionOrder={defaults.executionOrder} />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
