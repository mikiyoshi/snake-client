// console.log('this is client.js ...');
// const { connect } = require('./play');
// const { connect } = require('./client.js');
// const { setupInput } = require('./input.js');
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();

// connect();

// コールバック関数とは
// function a(b) {
//     b();
// }
// function b() {
// }
