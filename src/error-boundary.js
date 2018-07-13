import React from "react";

import { normalizeApiErrors } from "./resources/api-error-handler";

export class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        normalizeApiErrors(error, true);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}
