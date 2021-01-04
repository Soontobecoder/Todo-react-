import React from 'react'

function Add () {
    return (
      <section id="add-todo-form"> 
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <div className="p-5 bg-light shadow" style={{width: '30%', height: '80%', borderRadius: '10px'}}>
            <h2 className="text-center">Add new Todo</h2>
            <img className="w-100" src="./assets/undraw_To_do_list_re_9nt7.png" alt="todo-list" />
            <form className="mt-4" onSubmit="addedTodo(event)">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input className="form-control" type="text" id="title" placeholder="your title" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input className="form-control" type="text" id="description" placeholder="first name" />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Due date</label>
                <input className="form-control" type="date" id="due-date" />
              </div>
              <button className="btn btn-block text-white" type="submit" style={{backgroundColor: "#42b0f8"}}> Add</button>
            </form>
          </div>
        </div>
    </section>
    )
}

export default Add