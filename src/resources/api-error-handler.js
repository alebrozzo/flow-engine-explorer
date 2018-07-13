// @flow
export function normalizeApiErrors(err: any, logToConsole?: boolean): Array<string> {
    if (logToConsole) {
        console.error("API error:", err);
    }
    let errors: Array<string> = [];
    const statusCode = (err.response && err.response.status) || err.status || -1;
    if (statusCode === 500) {
        errors.push("There was an error accessing the server.");
    } else if (statusCode === 401 || statusCode === 403) {
        errors.push(
            "You do not have permissions to access this feature.\nPlease contact an Administrator for assistance."
        );
    } else if (statusCode === 404) {
        errors.push("The resource was not found.");
    } else if (statusCode === 400 && err.response && err.response.data) {
        Object.keys(err.response.data).forEach(key => {
            errors = errors.concat(err.response.data[key]);
        });
    } else {
        errors.push(err.message || "Unknown error.");
    }
    if (logToConsole) {
        console.error("API error list:", errors);
    }
    return errors;
}
