import { useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [

    //     {
    //     id: new Date().getTime(),
    //     description: 'Recolectar piedra del tiempo',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 100,
    //     description: 'Recolectar piedra del alma',
    //     done: false,
    // }

];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = () => {



    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: id
        }

        dispatch(action);
    }

    const handleUpdateTodo = (id) => {

        const action = {
            type: '[TODO] Update Todo',
            payload: id
        }
        dispatch(action);
    }

    const todoCount = () => {
      return todos.length
    }

    const todosPending = () => {
        return  todos.filter(todo => !todo.done).length
      }
    
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleUpdateTodo,
        todoCount,
        todosPending
    }
}


