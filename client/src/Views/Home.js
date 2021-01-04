import React from 'react'

function Home () {
    return (
        <section id="home-page" className="bg-light" style={{height: '100vh', overflowY: 'auto'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand">My Fancy Todo</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <p className="nav-link">Home <span className="sr-only">(current)</span></p>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 mr-2" onSubmit="addTodo(event)">
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">add new todo</button>
                    </form>
                    <form className="form-inline my-2 my-lg-0" onSubmit="logOut(event)">
                        <button className="btn btn-danger my-2 my-sm-0" type="submit">Sign out</button>
                    </form> 
                </div>
            </nav>
            <div id="weather" className="row">
            <div className="card mx-auto mt-5" style={{width: "25rem"}}>
                <div className="card-body">
                <h5 className="card-title ml-2 display-4">Good day</h5>
                <img className="ml-5" src="assets/weather.png" alt="home" />
                <div className="mx-auto" style={{display: 'block', width: '200px'}}><h4>the weather today</h4></div>
                <div className="row mt-2">
                    <h6 className="ml-2 mt-3" style={{display: 'block', width: '150px'}}><div className="p-1 border bg-light">Min temperature</div> </h6>
                    <h6 id="min-temperature">Test</h6>
                </div>
                <div className="row">
                    <h6 className="ml-2 mt-3" style={{display: 'block', width: '150px'}}><div className="p-1 border bg-light">Max temperature</div> </h6>
                    <h6 id="max-temperature">Test</h6>
                </div>
                <div className="row">
                    <h6 className="ml-2 mt-3" style={{display: 'block', width: '150px'}}><div className="p-1 border bg-light">Weather state</div> </h6>
                    <h6 id="weather-state">Test</h6>
                </div>
                </div>
            </div>
            </div>
            <div className="container d-flex justify-content-center pt-5 flex-wrap" id="list-todo">
                {/* <!-- <div className="card mx-4 mt-4 shadow" style= "width: 25%;">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">
                            Example text
                        </p>
                        <button className="btn btn-primary">Edit Todo</button>
                        <button className="btn btn-primary">Update Todo</button>
                        <button className="btn btn-danger">Delete Todo</button>
                    </div>
                </div> --> */}
            </div>
        </section>
    )
}

export default Home