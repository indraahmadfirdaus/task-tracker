import { createStore } from 'redux'

const initialState = {
    todos: [],
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case "todos/add":
            return { todos: [...state.todos, payload] }
        case "todos/complete":
            let newVal = [...state.todos].map((t) => {
                if (t.id === payload) {
                  return { ...t, completed: true };
                }
                return t;
            });
            return { todos: newVal }
        case "todos/delete":
            return { todos: [...state.todos.filter((t) => t.id !== payload)] }    
        default:
            return state
    }
}

const store = createStore(reducer)

export default store