import { getData } from "../../resources/flow-api";
import * as engine from "../engine";

describe("Engine", () => {
    let defaults;
    beforeAll(() => {
        defaults = {
            functions: getData(),
        };
    });

    // it("executes string functions", () => {
    //     const result = engine.executeFunction("1 + 2");
    //     expect(result).toBe(true);
    // });

    it("executes all functions", () => {
        const result = engine.executeNext(defaults.functions, 2, []);
        expect(result).toEqual([{ id: 2, result: true }]);
    });
});
