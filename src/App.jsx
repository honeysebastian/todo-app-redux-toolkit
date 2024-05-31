import React from 'react'

function App() {
  return (
    <>
    <div style={{width:"100%",height:'100vh'}} className="todo d-flex justify-content-center align-items-center">
      <div style={{width:'1000px',height:'auto'}} className="todo-app bg-dark shadow rounded">
       <div style={{backgroundColor:'#00b2a7'}} className='text-dark p-3 rounded shadow mb-4'> <h1 className='text-center'><i className="fa-solid fa-list-ul me-4"></i>My Todo List</h1></div>
        <div className="input-todo d-flex justify-content-around align-items-center mb-3">
          <input className='rounded shadow w-75 p-3' type="text" placeholder='Enter todo....' />
          <button style={{backgroundColor:'#00b2a7'}} className='btn btn-success p-3'>Add</button>
        </div>
        <h4 className='text-light ms-5'>Total Completed Items : </h4>
        <div  className="todo-list p-5 shadow">
          <table className='table custom-table-bg'>
            <thead>
              <tr>
                <th>Sl.NO</th>
                <th>Todo</th>
                <th>Completed</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>hai</td>
                <td><button style={{backgroundColor:'#00b2a7'}} className='btn text-light'><i className="fa-solid fa-check"></i></button></td>
                <td><button className='btn btn-danger'><i className="fa-solid fa-trash"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>

    </div>
      
    </>
  )
}

export default App