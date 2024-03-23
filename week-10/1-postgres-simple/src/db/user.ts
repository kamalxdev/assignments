import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    let q= await client.query(`INSERT INTO users (username,password,name) VALUES ($1,$2,$3)`,[username,password,name]);
    return q.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    let q = await client.query(`SELECT * FROM users where id=$1`,[userId]);
    return q.rows[0];
}
