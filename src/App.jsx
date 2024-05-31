import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/todoSlice';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <>
      <div style={{ width: "100%", height: '100vh' }} className="todo d-flex justify-content-center align-items-center">
        <div style={{ width: '600px', height: 'auto' }} className="todo-app bg-dark shadow rounded">
          <div style={{ backgroundColor: '#00b2a7' }} className='text-dark p-3 rounded shadow mb-4'> <h1 className='text-center'><i className="fa-solid fa-list-ul me-4"></i>My Todo List</h1></div>
          <div className="input-todo d-flex justify-content-around align-items-center mb-3">
            <input className='rounded shadow w-50 p-2' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Add todo....' />
            <button onClick={handleAddTodo} style={{ backgroundColor: '#00b2a7' }} className='btn btn-success p-2'>Add</button>
          </div>
          <h5 className='text-light ms-5'>Total Completed Items : {completedCount} </h5>
          <div  className="todo-list p-5 shadow">
            {todos?.length > 0 ?
              <table  className='table custom-table-bg'>
                <thead >
                  <tr>
                    <th>Todos</th>
                    <th>Completed</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {todos?.map(item => (
                    <tr key={item.id}>
                      <td style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</td>
                      <td><button onClick={() => dispatch(toggleTodo(item.id))} style={{ backgroundColor: '#00b2a7' }} className='btn text-light'>{item.completed ? 'Undo' : 'Complete'}
                      </button></td>
                      <td><button onClick={() => dispatch(deleteTodo(item.id))} className='btn btn-danger'>Delete</button></td>
                    </tr>


                  ))
                  }
                </tbody>
              </table>
              :
              <div style={{ fontSize: '2rem' }} className="text-center text-danger fw-bolder">
                No todos!!!
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App