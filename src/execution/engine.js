// @flow
import type { FlowFunction, ExecutionResult } from "../types";

export function run(functions: FlowFunction[]): Promise<ExecutionResult[]> {
    return new Promise((resolve, reject) => {
        try {
            const startUpFunction = functions[0];
            const executionResult = executeNext(functions, startUpFunction.id, []);
            resolve(executionResult);
        } catch (error) {
            reject(error);
        }
    });
}

export function executeNext(
    allFunctions: FlowFunction[] = [],
    id: number,
    executedIds: ExecutionResult[] = []
): ExecutionResult[] {
    const nextFunction: ?FlowFunction = allFunctions.find(f => f.id === id);
    if (!nextFunction) throw new Error(`Function with id ${id} is missing`);
    const executionResult = executeFunction(nextFunction.body);
    const nextId = executionResult ? nextFunction.true_id : nextFunction.false_id;
    let nextExecutedIds = [...executedIds, { id, result: executionResult }];
    if (nextId) {
        nextExecutedIds = executeNext(allFunctions, nextId, nextExecutedIds);
    }
    return nextExecutedIds;
}

export function executeFunction(functionAsString: string): boolean {
    // $FlowFixMe
    return new Function("return " + functionAsString)()();
}
