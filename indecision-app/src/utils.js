console.log(' utils is running');

const square = (x) => x*x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

//exports - default export - named export

export { square, add, subtract as default }; // can have 0 or 1 default export