import React, { useState } from "react";
import TodoList from "./TodoList";
// import { RiCLsoeCircleLine } from 'react-icons/ri';
// import { TiEdit} from 'react-icons/ti';

// props =[ name, todo]

//destructuring
function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  console.log("todo task", props.todo);
  // console.log("name ", props.name);

  return (
    <div>
      {props.todo.map((to, idx) => {
        return (
          <div>
            {to.id}
            {to.text}
          </div>
        );
      })}
    </div>
  );
  // todos.map((todo, index) => (
  //       <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key = {index}>
  {
    /* <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
          </div> */
  }
  {
    /* <div className='icons'>
            <RiCLsoeCircleLine 
            onClick={() => removeTodo(todo.id)}
            className='delete-icon' />
            <TiEdit 
            // onClick={() => setTodo({id: todo.id, value: todo.text})}
            className='edit-icon' />
          </div> */
  }
  //   </div>
  //   ))
}

export default Todo;
