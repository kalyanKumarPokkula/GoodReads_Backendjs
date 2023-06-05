import * as dotenv from 'dotenv';

dotenv.config();

let PORT = process.env.PORT;
let DB_PASS = process.env.DB_PASS;
let JWT_SECRET = process.env.JWT_SECRET;
let JWT_EXPIRY = process.env.JWT_EXPIRY;
let NODE_ENV = process.env.NODE_ENV;

export {
    PORT,
    DB_PASS,
    JWT_EXPIRY,
    JWT_SECRET,
    NODE_ENV
}

