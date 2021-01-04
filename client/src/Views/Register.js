import React from 'react'

function Register () {
    return (
    <section id="sign-up-page"> 
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="p-5 bg-light shadow" style={{width: "30%", height: '70%', borderRadius: '10px'}}>
                <h2 className="text-center">Sign up here</h2>
                <img className="w-100" src="./assets/undraw_sign_in_e6hj.png" alt="login page" />
                <form className="mt-4" onSubmit="signUp(event)">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" id="sign-up-email" placeholder="your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" id="sign-up-password" placeholder="your password" />
                    </div>
                    <button className="btn btn-block text-white" type="submit" style={{backgroundColor: "#42b0f8"}}> Sign up</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Register