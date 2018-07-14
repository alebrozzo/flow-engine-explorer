// @flow
import * as React from "react";

import { type FlowFunction } from "../types/flow-function";
import "./function-viewer.css";

type Props = {
    flowFunction: FlowFunction,
    passed: boolean,
};

type State = {
    isOpen: boolean,
};

export class FunctionViewer extends React.PureComponent<Props, State> {
    state: State = {
        isOpen: false,
    };

    toggleView = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const { isOpen } = this.state;
        const { flowFunction, passed } = this.props;

        return (
            <div className="flow_function__container">
                <div
                    className={"flow_function__header flow_function__header-" + (passed ? "pass" : "fail")}
                    onClick={this.toggleView}>
                    <h2>
                        <span className="flow_function__header__id">{flowFunction.id}</span>
                        {flowFunction.title}
                    </h2>
                </div>
                <div className="flow_function__body">
                    {isOpen && (
                        <React.Fragment>
                            <label htmlFor={`flowBody_${flowFunction.id}`}>Rule body</label>
                            <div className="flow_function__body__code" id={`flowBody_${flowFunction.id}`}>
                                {flowFunction.body}
                            </div>
                        </React.Fragment>
                    )}
                    <div className="flow_function__body__next_group">
                        <div className="flow_function__body__next_pass">
                            <label htmlFor={`flowPass_${flowFunction.id}`}>Next if passed</label>
                            <div className="flow_function__body__next" id={`flowPass_${flowFunction.id}`}>
                                {flowFunction.true_id || "End"}
                            </div>
                        </div>
                        <div className="flow_function__body__next_fail">
                            <label htmlFor={`flowPass_${flowFunction.id}`}>Next if failed</label>
                            <div className="flow_function__body__next" id={`flowPass_${flowFunction.id}`}>
                                {flowFunction.false_id || "End"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
