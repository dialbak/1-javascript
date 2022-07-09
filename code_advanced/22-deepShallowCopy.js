const originalObj = {
    nested: {
        nestedKey: "nestedValue"
    },
    key: "value"
};

// originalObj points to location 1 in memory
const assignObj = originalObj;

/**
 * assignObj will point to 1 in memory
 * shallowObj points to a new location 2, but references location 1 for the nested object
 */
const shallowObj = {...originalObj};

// deepObj clones all parts of the object to a new memory address
const deepObj = JSON.parse(JSON.stringify(originalObj));

console.log("originalObj: ", originalObj);
console.log("assignObj: ", assignObj);
console.log("shallowObj: ", shallowObj);
console.log("deepObj: ", deepObj);
