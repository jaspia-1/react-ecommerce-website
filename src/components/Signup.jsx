import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const title="Register"
const socialTitle="Login with Social Media"
const btnText="Signup Now"
const Signup = () => {
    const [errorMessage,seterrorMessage]=useState("")
    const handleRegister=()=>{

    }
    const handleSignup=(event)=>{

    }
    return (
        <div className='login-section padding-tb section-bg'>
        <div className='container'>
        <div className='account-wrapper'>
        <h3 className='title'>{title}</h3>
        <form className='account-form' onSubmit={handleSignup}>
        <div className='form-group'>
        <input type='text' name='name' id='name' placeholder='Full Name' required/>
        </div>
        <div className='form-group'>
        <input type='email' name='email' id='email' placeholder='Email Address *' required/>
        </div>
        <div className='form-group'>
        <input type='password' name='password' id='password' placeholder='Password *' required/>
        </div>
        <div className='form-group'>
        <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required/>
        </div>
        {/* showing message */}
        <div>
            {
                errorMessage && (
                    <div className='error-message text-danger mb-1'>
                        {errorMessage}
                        </div>
                )
            }
        </div>
        <div className='form-group'>
        <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
            <div className='checkgroup'>
        <input type='checkbox' name='remember' id='remember'/>
        <label htmlFor='remember'>Remember Me</label>
            </div>
            <Link to="/forgetpass">Forget Password</Link>
        </div>
        </div>
        <div className='form-group'>
        <button type='submit' className='d-block lab-btn'>
        <span>{btnText}</span>
        </button>
        </div>
        </form>
        {/* account bottom */}
        <div className='account-bottom'>
        <span className='d-block cate pt-10'>
        Don't Have an Account? <Link to='/sign-up'>Sign Up</Link>
        </span>
        
        </div>
        </div>
        </div>
                   </div>
    );
};

export default Signup;