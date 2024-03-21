import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../Redux/store';

const TodoList = () => {
  const [count,setCount] = useState(0)
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  // if(todos){
  //   setCount(todos.length)
  // }

  const handleAddTodo = () => {
    const todo = prompt('Enter new todo:');
    if (todo) {
      dispatch(addTodo({ id: Date.now(), text: todo }));
    }
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setCount(count=>count + 1);
    } else {
      setCount(count=>count - 1);
    }
  };

  return (
    <div>

      <div className='mt-5 text-center'>
        <button onClick={handleAddTodo} className='btn shadow'>Create New Data <i className="fa-solid fa-plus" /></button>
      </div>
      <div className='container mt-5 d-flex justify-content-between'>
       
          <div className='container'>
            <table  className='table table-striped p-5 border'>
              <thead>
                <tr>
                  <th className='text-primary'>Check</th>
                  <th className='text-primary'>Name</th>
                  <th className='text-primary'>Action</th>
                </tr>
              </thead>
              <tbody>
              {todos.map(todo => (
                <tr key={todo.id}>
                  <td><input type="checkbox" onChange={handleCheckboxChange}/></td>
                  <td>{todo.text}</td>
                  <td><button onClick={() => handleDeleteTodo(todo.id)} className='btn'>Delete</button>
                  </td>
                </tr>
                 ))}
              </tbody>
            </table>

            <h2>Total Completed Items: {count}</h2>
          </div>
       
      </div>
    </div>
  );
};

export default TodoList;
