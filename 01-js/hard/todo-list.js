/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  Todo(){
    this.todos=[];
  }
  add(todo){
    this.todos=(this.todos)?[...this.todos,todo]:[todo];
  }
  remove(index){
    this.todos.splice(index,1);
  }
  update(index,updatedtodo){
    if(this.todos[index]){
      this.todos[index]=updatedtodo;
    }
  }
  getAll(){
    return this.todos;
  }
  get(index){
    return this.todos[index] || null;
  }
  clear(){
    this.todos=[];
  }
}


module.exports = Todo;
