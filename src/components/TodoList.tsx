import React from 'react'
import TodoListItem from './TodoListItem'

interface TodoListProps {
    data: any[]
}

const TodoList: React.FC<TodoListProps> = ({data}) => {
    const todos = data.map(item => {
        return (
            <TodoListItem key={item.id} item={item}/>
        )
    })
    return (
        <ul>
            {todos}
        </ul>
    )
}

export default TodoList