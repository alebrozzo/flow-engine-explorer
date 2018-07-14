// @flow
import React from "react";

import { type FlowFunction, type ExecutionResult } from "./types";
import { normalizeApiErrors } from "./resources/api-error-handler";
import { ErrorBoundary } from "./error-boundary";
import { getFlowFunctions } from "./resources/flow-api";
import { run } from "./execution/engine";
import { Loader } from "./common/loader";
import { FlowPage } from "./flow-engine/flow-page";

export type Props = {};
export type State = {
    loading: boolean,
    functions: FlowFunction[],
    executionOrder: ExecutionResult[],
};

export class App extends React.Component<Props, State> {
    state: State = {
        loading: true,
        functions: [],
        executionOrder: [],
    };
    componentDidMount() {
        this.setState({ loading: true }, () => {
            let functions;
            getFlowFunctions()
                .then(fns => {
                    functions = fns;
                    return run(fns);
                })
                .then(executionOrder => this.setState({ loading: false, functions, executionOrder }))
                // .then(() => console.log(this.state))
                .catch(error => {
                    normalizeApiErrors(error, true);
                    this.setState({ loading: false });
                });
        });
    }

    render() {
        const { functions, executionOrder, loading } = this.state;

        return (
            <ErrorBoundary>
                <div className="app">
                    {loading ? <Loader /> : <FlowPage functions={functions} executionOrder={executionOrder} />}
                </div>
            </ErrorBoundary>
        );
    }
}
