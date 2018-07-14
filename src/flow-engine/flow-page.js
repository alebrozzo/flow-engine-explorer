// @flow
import * as React from "react";

import type { FlowFunction, ExecutionResult } from "../types";
import { FunctionViewer } from "./function-viewer";
import "./flow-page.css";

type FunctionResult = {
    fn: FlowFunction,
    passed: boolean,
};

type Props = {
    functions: FlowFunction[],
    executionOrder: ExecutionResult[],
};

const FlowPage = (props: Props) => {
    const functionsToDisplay: FunctionResult[] = [];
    for (const result of props.executionOrder) {
        // $FlowFixMe
        functionsToDisplay.push({ fn: props.functions.find(fn => fn.id === result.id), passed: result.result });
    }

    return (
        <div className="flow_page__container">
            <div className="flow_page__header">
                <h1>Flow Engine</h1>
            </div>
            <div className="flow_page__function_list">
                {functionsToDisplay.map(func => (
                    <FunctionViewer key={func.fn.id} flowFunction={func.fn} passed={func.passed} />
                ))}
            </div>
        </div>
    );
};
export { FlowPage };
