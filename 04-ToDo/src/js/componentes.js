
// Referencias HTML

import { todoList } from "..";
import { Todo } from "../classes";

const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnDelete     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');



export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ todo.completed ? 'completed': ''}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ todo.completed ? 'checked': ''}>
            <label>${ todo.task }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}

txtInput.addEventListener('keyup', ( event ) => {
    if( event.keyCode ==  13 && txtInput.value.trim().length > 0) {
        const newTodo = new Todo( txtInput.value.trim() );
        todoList.newTodo( newTodo );
        crearTodoHtml( newTodo );
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', ( event ) => {

    const nameElement   = event.target.localName;
    const todoElement   = event.target.parentElement.parentElement;
    const todoId        = todoElement.getAttribute('data-id');
    
    if ( nameElement.includes('input')){
        todoList.markCompleted( todoId );
        todoElement.classList.toggle('completed');
    } else if ( nameElement.includes('button')){
        todoList.removeTodo( todoId );
        divTodoList.removeChild( todoElement );
    }

});

btnDelete.addEventListener('click', () => {

    todoList.removeCompleted();

    for(let i = divTodoList.children.length - 1; i >= 0; i--){
        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed'))
            divTodoList.removeChild(elemento);
    }

});

ulFiltros.addEventListener('click', ( event ) => {

    const filtro = event.target.text;
    if( !filtro ){return}
        
        anchorFiltros.forEach( elemt => elemt.classList.remove('selected'));
        event.target.classList.add('selected');

        for( let elemento of divTodoList.children ){
            elemento.classList.remove('hidden');
            const IsCompleted = elemento.classList.contains('completed'); 
            
            switch( filtro ){
                case 'Pendientes':
                    if( IsCompleted ){
                        elemento.classList.add('hidden');
                        
                    }
                    break;
                case 'Completados':
                    if( !IsCompleted ){
                        elemento.classList.add('hidden');
                    }
            }
        }
    
});