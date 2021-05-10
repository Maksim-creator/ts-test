import React, { useState } from 'react'
import '../index.css';

interface FormProps {
    onAdd(title: string) : void
}

const Form: React.FC<FormProps> = (props) => {
    const [title, setTitle] = useState<string>('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const keyPressed = (e:React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            props.onAdd(title)   
            setTitle('')
        }        
    }
    return (
        <div className="input-field mt2">
          <input 
            onChange={handleChange}
            onKeyPress={keyPressed}
            id="todo-input" 
            type="text"
            value={title} />
          <label htmlFor="todo-input" className="active">Введите название дела</label>
        </div>
    )
}

export default Form;