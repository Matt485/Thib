const sqlite3 = require("sqlite3").verbose();
const filepath = "../bg.db";

export const dbcon = () => {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
  });
  console.log("Connection with SQLite has been established");
  return db;
}
