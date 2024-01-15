const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const Timer = {
  start: function() {
    // Start timer logic here
  },
  pause: function() {
    // Pause timer logic here
  },
  reset: function() {
    // Reset timer logic here
  },
};

module.exports = Timer;
