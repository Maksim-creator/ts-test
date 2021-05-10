import React from 'react'

interface TodoListItemProps {
    item: any
}

const TodoListItem: React.FC<TodoListItemProps> = ({item}) => {
    return (
        <li className="todo">
            <label>
                <input type="checkbox" />
                <span>{item.title}</span>
                <i className="material-icons red-text">delete</i>
            </label>
        </li>
    )
}

export default TodoListItem