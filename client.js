const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    // conn.write('Name: K9R');
    let arr = [
      'Name: K9R',
      'Move: up',
      'Move: up',
      'Move: left',
      'Move: left',
      'Move: up',
      'Move: up',
      'Move: left',
      'Move: left',
      'Move: up',
      'Move: up',
      'Move: left',
      'Move: left',
      'Move: up',
      'Move: up',
      'Move: left',
      'Move: left',
      'Move: down',
      'Move: down',
      'Move: left',
      'Move: left',
      'Move: down',
      'Move: down',
      'Move: left',
      'Move: left',
      'Move: down',
      'Move: down',
      'Move: left',
      'Move: left',
      'Move: down',
      'Move: down',
      'Move: left',
      'Move: left',
      'Move: down',
      'Move: down',
      'Move: left',
      'Move: left',
      'Move: down',
      'Move: down',
      'Move: left',
      'Move: left',
      'Move: down',
      'Move: down',
      'Move: left',
      'Move: left',
    ];
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        conn.write(arr[i]);
      }, i * 100); // <= 1s delay to make it noticeable. Can dial it down later.
    }
  });
  return conn;
};

console.log('Connecting ...');

module.exports = {
  connect,
};
// コールバック関数とは
// function a(b) {
//     b();
// }
// function b() {
// }
