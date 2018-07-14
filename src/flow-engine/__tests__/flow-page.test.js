import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { getData } from "../../resources/flow-api";
import { FlowPage } from "../";

describe("FlowPage", () => {
    it("renders the page", () => {
        const component = shallow(<FlowPage functions={getData()} />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
