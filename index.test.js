import test from 'ava';
import asyncWrapper from "./index";

test('should wrap provided function and catch any exceptions', t => {
    const error = new Error('Some exception');

    return asyncWrapper(
        async () => {
            throw error
        }
    )({}, {}, (err) => {
        t.is(err, error);
    });
});