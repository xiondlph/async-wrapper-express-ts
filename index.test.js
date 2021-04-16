const test = require("ava");
const asyncWrapper = require("./index");

test("should wrap provided function and catch any exceptions", t => {
    const error = new Error("Some exception");

    return asyncWrapper(
        async () => {
            throw error
        }
    )({}, {}, (err) => {
        t.is(err, error);
    });
});
