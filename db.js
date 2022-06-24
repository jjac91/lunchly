/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://dennis:nopassword@localhost/lunchly");

db.connect();

module.exports = db;
