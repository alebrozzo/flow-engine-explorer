import * as React from "react";

import { Spinner } from "./spinner";
import "./loader.css";

export const Loader = () => (
    <div className="loader">
        <div className="loaderBackdrop">
            <div className="spinner">
                <Spinner />
            </div>
        </div>
    </div>
);
