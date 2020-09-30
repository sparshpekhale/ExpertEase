import React from 'react';
import './login.js'
import './login.css'


function Login() {
    return (
        <div class='container' id='container'>
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="radio" id="advisor" name="user type" value="advisor" />
                    <label for="advisor">Advisor</label>
                    <input type="radio" id="student" name="user type" value="student" checked="true"/>
                    <label for="student">Student</label>
                    <button>Register</button>
                </form>
            </div>

            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Log in</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Log in</button>
                </form>
            </div>

            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>EXISTING USER?</h1>
                        <p> Login with your personal info </p>
                        <button class="btn" id="signIn">Log in</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>NEW USER?</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="btn" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Login