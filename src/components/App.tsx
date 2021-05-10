import React, { useState } from 'react'
import Form from './Form';
import { ITodo } from './interface';
import Navbar from './Navbar';
import TodoList from './TodoList'

const App: React.FC = () => {
    const [state, setState] = useState<ITodo[]>([])

    const onAddHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            done: false
        }
        setState(prevState => {
            return [newTodo, ...prevState]
        })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <Form onAdd = {onAddHandler} />
                <TodoList data={state}/>
            </div>
        </>
    )
}

export default App;