const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE timer (status TEXT)");
});

module.exports = db;
