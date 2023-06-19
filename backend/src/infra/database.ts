import sqlite3, { Database } from "sqlite3";

class SQLiteDB {
  private static instance: SQLiteDB;
  private db: Database;

  private constructor() {
    this.db = new sqlite3.Database(
      "./database.sqlite3",
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err: any) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Connected to the SQLite database.");
      }
    );
  }

  public static getInstance(): SQLiteDB {
    if (!SQLiteDB.instance) {
      SQLiteDB.instance = new SQLiteDB();
    }
    return SQLiteDB.instance;
  }

  public getDB(): Database {
    return this.db;
  }
}

export const dbInstance = SQLiteDB.getInstance();
