import logo from './logo.svg';
import './App.css';

function App() {
  function Login () {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="p-5 bg-light shadow" style={{width: '30%', height: '90%', borderRadius: '10px'}}>
          <h2 className="text-center">Welcome to my todo</h2>
          <br />
          <img className="w-100" src="./assets/undraw_To_do_list_re_9nt7.png" alt="login page" />
          <h2 className="text-center">Sign in</h2>
          <div className="alert alert-warning alert-dismissible fade show" role="alert" id="error">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <form className="mt-4" onsubmit="signIn(event)">
              <div className="form-group">
                  <input className="form-control" type="email" placeholder="your email" id="email" />
              </div>
              <div className="form-group">
                  <input className="form-control" type="password" placeholder="your password" id="password" />
              </div>
              <button className="btn btn-block text-white" type="submit" style={{backgroundColor: "#42b0f8"}}>Sign in</button>
            </form>
            <button className="btn btn-block btn-warning text-white mt-3" onclick="showSignUp(event)"> Sign up</button>
            <br />
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
      </div>
    )
  }
  function Register () {
    return (
    <section id="sign-up-page"> 
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="p-5 bg-light shadow" style={{width: "30%", height: '70%', borderRadius: '10px'}}>
                <h2 className="text-center">Sign up here</h2>
                <img className="w-100" src="./assets/undraw_sign_in_e6hj.png" alt="login page" />
                <form className="mt-4" onsubmit="signUp(event)">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input className="form-control" type="email" id="sign-up-email" placeholder="your email" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" id="sign-up-password" placeholder="your password" />
                    </div>
                    <button className="btn btn-block text-white" type="submit" style={{backgroundColor: "#42b0f8"}}> Sign up</button>
                </form>
            </div>
        </div>
    </section>
    )
  }
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
                <form className="form-inline my-2 my-lg-0 mr-2" onsubmit="addTodo(event)">
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">add new todo</button>
                </form>
                <form className="form-inline my-2 my-lg-0" onsubmit="logOut(event)">
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
  function Add () {
    return (
      <section id="add-todo-form"> 
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <div className="p-5 bg-light shadow" style={{width: '30%', height: '80%', borderRadius: '10px'}}>
            <h2 className="text-center">Add new Todo</h2>
            <img className="w-100" src="./assets/undraw_To_do_list_re_9nt7.png" alt="todo-list" />
            <form className="mt-4" onsubmit="addedTodo(event)">
              <div className="form-group">
                <label for="title">Title</label>
                <input className="form-control" type="text" id="title" placeholder="your title" />
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <input className="form-control" type="text" id="description" placeholder="first name" />
              </div>
              <div className="form-group">
                <label for="last_name">Due date</label>
                <input className="form-control" type="date" id="due-date" />
              </div>
              <button className="btn btn-block text-white" type="submit" style={{backgroundColor: "#42b0f8"}}> Add</button>
            </form>
          </div>
        </div>
    </section>
    )
  }
  function Edit () {
    return (
      <section id="edit-todo-form"> 
      <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <div className="p-5 bg-light shadow" style={{width: '30%', height: '80%', borderRadius: '10px'}}>
          <h2 className="text-center">Edit your Todo</h2>
          <img className="w-100" src="./assets/undraw_To_do_list_re_9nt7.png" alt="todo-list" />
          <form className="mt-4" onsubmit="editedTodo(event)">
            <input type="hidden" id="edit-id"></input>
            <div className="form-group">
              <label for="title">Title</label>
              <input className="form-control" type="text" id="title-edit" placeholder="your title" />
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <input className="form-control" type="text" id="description-edit" placeholder="first name" />
            </div>
            <div className="form-group">
              <label for="last_name">Due date</label>
              <input className="form-control" type="date" id="due-date-edit" />
            </div>
            <button className="btn btn-block text-white" type="submit" style={{backgroundColor: "#42b0f8"}}> Edit</button>
          </form>
        </div>
      </div>
    </section>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Login />
      <Register />
      <Home />
      <Add />
      <Edit />
    </div>
  );
}



export default App;
