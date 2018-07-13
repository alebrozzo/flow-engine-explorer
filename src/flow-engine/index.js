import * as React from "react";

import { type FlowFunction } from "../types/flow-function";
import { FunctionViewer } from "./function-viewer";
import "./index.css";

type Props = {
    functions: FlowFunction[],
};

const FlowPage = (props: Props) => (
    <div className="flow_page__container">
        <div className="flow_page__header">
            <h1>Flow Engine</h1>
        </div>
        <div className="flow_page__function_list">
            {(props.functions || []).map(fn => <FunctionViewer key={fn.id} flowFunction={fn} />)}
        </div>
    </div>
);
export { FlowPage };
