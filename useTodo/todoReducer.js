export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Update Todo':
            
            return initialState.map( todo => {
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                console.log('llega ' + todo.id +' '+action.payload)
                return todo;
            });




        default:
            return initialState;
    }
}
