import React from 'react'
// import axios from '../AxiosConfig/axios'

function Login (props) {
    function login () {
      console.log('login terpanggil')
    }
    function changePage() {
      console.log('changing page terpanggil')
    }
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
            <form className="mt-4" onSubmit={login}>
              <div className="form-group">
                  <input className="form-control" type="email" placeholder="your email" id="email" />
              </div>
              <div className="form-group">
                  <input className="form-control" type="password" placeholder="your password" id="password" />
              </div>
              <button className="btn btn-block text-white" type="submit" style={{backgroundColor: "#42b0f8"}}>Sign in</button>
            </form>
            <button className="btn btn-block btn-warning text-white mt-3" onClick={changePage('register')}> Sign up</button>
            <br />
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
      </div>
    )
}

export default Login