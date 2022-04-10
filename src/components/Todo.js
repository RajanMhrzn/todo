import React, {useState} from 'react';
import TodoList from './TodoList';
// import { RiCLsoeCircleLine } from 'react-icons/ri';
// import { TiEdit} from 'react-icons/ti';

function Todo({ text }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    console.log("todo task", text);
    

  return<div>Hello</div>
// todos.map((todo, index) => (
//       <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key = {index}>
          {/* <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
          </div> */}
          {/* <div className='icons'>
            <RiCLsoeCircleLine 
            onClick={() => removeTodo(todo.id)}
            className='delete-icon' />
            <TiEdit 
            // onClick={() => setTodo({id: todo.id, value: todo.text})}
            className='edit-icon' />
          </div> */}
    //   </div>
//   ))
}

export default Todo