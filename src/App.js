// @flow
import React from "react";

import { FlowFunction } from "./types/flow-function";
import { getFlowFunctions } from "./resources/flow-api";
import { normalizeApiErrors } from "./resources/api-error-handler";
// import { FunctionProvider } from "./context";
import { ErrorBoundary } from "./error-boundary";
import { Loader } from "./common/loader";
import { FlowPage } from "./flow-engine";

export type Props = {};
export type State = {
    loading: boolean,
    data: FlowFunction[],
};

export class App extends React.Component<Props, State> {
    state: State = {
        loading: true,
        data: [],
    };

    componentDidMount() {
        this.setState({ loading: true }, () =>
            getFlowFunctions()
                .then(data => {
                    this.setState({ loading: false, data });
                })
                .catch(error => {
                    normalizeApiErrors(error, true);
                    this.setState({ loading: false });
                })
        );
    }

    render() {
        const { data, loading } = this.state;

        return (
            <ErrorBoundary>
                <div className="app">{loading ? <Loader /> : <FlowPage functions={data} />}</div>
            </ErrorBoundary>
        );
    }
}
