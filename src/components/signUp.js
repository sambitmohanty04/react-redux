import React, { useState } from 'react'
import '../assets/signUp.css'

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');

  const [submitMsg, setSubmitMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitMsg(false);
    console.log(setSubmitMsg);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitMsg(false);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitMsg(false);
  }
  const handleConfirmPassword = (e) => {
    setConformPassword(e.target.value);
    setSubmitMsg(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == '' || email == '' || password == '' || conformPassword == '') {
        console.log('message submitted succesfully');
        setErrorMsg(true);
    } else if (password !== conformPassword) {
        alert('password and conformPassword should be same');

        setErrorMsg(true)
    } else {
        console.log('please fill up form');
        setSubmitMsg(true);
        setErrorMsg(false)
    }
  }

  const successMsg = () => {
    return (
        <div className='success' style={{display:submitMsg ? '' : 'none'}}>
            <p className='text-primary'>User <span className='text-white fw-bold'>{name}</span> have submitted successfully</p>
        </div>
    )
  }
  const errorMsgText = () => {
    return (
        <div className='error' style={{display:errorMsg ? '' : 'none'}}>
            <p className='text-danger'>Please Enter All Fields</p>
        </div>
    )
  }

  return (
    <div>
        <div className='text-center'>
            <div className="box">
                <h4 className='text-white'>Sign Up</h4>
                <div class="user">
                    <form>
                        <input type="text" name="username" id="username" 
                        placeholder="Full Name" value={name} onChange={handleName} />
                        <input type="text" name="email" id="email" 
                        value={email} placeholder="Email Address" onChange={handleEmail} />
                        <input type="password" name="password" id="password" 
                        value={password} placeholder="Password" onChange={handlePassword} />
                        <input type="password" name="confirm-password" id="confirm-password" 
                        value={conformPassword} placeholder="Confirm Password" onChange={handleConfirmPassword} />
                        <div class="login-btn">
                            <button class="btn" type='submit' onClick={handleSubmit}> <a href="succes.html"> Submit</a></button>
                            <p class="signup text-warning">Already have an account ? <a href="#"><span>Log In</span> </a></p>
                        </div>
                    </form>
                    <p>
                        {successMsg()}
                        {errorMsgText()}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp