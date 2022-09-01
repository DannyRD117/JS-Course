import {Todo} from "../classes/index";

export class TodoList{

    constructor() {
        // this.todos = [];
        this.loadLocalStorage();
    }

    newTodo( todo ) {
        this.todos.push( todo );
        this.saveLocalStorage();
    }

    removeTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id);
        this.saveLocalStorage();
    }

    removeCompleted() {
        this.todos = this.todos.filter( todo => !todo.completed );
        this.saveLocalStorage();
    }

    markCompleted( id ) {
        for (const todo of this.todos) {
            if( todo.id == id){
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    saveLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos) );
    }

    loadLocalStorage(){
        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];

        this.todos = this.todos.map( Todo.fromJSON );
    }
}