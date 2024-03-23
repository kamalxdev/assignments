"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var pg_1 = require("pg");
var config_1 = require("./config");
exports.client = new pg_1.Client({
    connectionString: config_1.DB_URL
});
// Path: week-10/1-postgres-simple/src/db/setup.ts
