export const addTodo = (payload) => {
    return { type: 'todos/add', payload }
}

export const toComplete = (id) => {
    return { type: 'todos/complete', payload: id}
}

export const deleteTodo = (id) => {
    return { type: 'todos/delete', payload: id}
}