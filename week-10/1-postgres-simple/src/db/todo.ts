import { client } from "../index"
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    await client.query(`
        INSERT INTO todos (user_id, title, description)
        VALUES ($1, $2, $3)
    `, [userId, title, description]);
    let data = await client.query(`SELECT * FROM todos where title=$1 AND user_id=$2 AND description=$3`,[title,userId,description]);

    
    return data.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    await client.query(`UPDATE todos SET done =true where id=$1`,[todoId]);
    let data = await client.query(`SELECT * FROM todos where id=$1`,[todoId]);
    return data.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    let q= await client.query(`SELECT * FROM todos where user_id=$1`,[userId]);
    return q.rows;
}