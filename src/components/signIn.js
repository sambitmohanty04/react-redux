import React, {useState} from 'react'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <>
        <div className='container '>
            <div className='loginForm border border-1 w-25 py-5 px-4 rounded d-flex justify-content-center'>
                <form className='' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="" 
                        name="" onChange={handleEmail} value={email} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id=""
                        onChange={handlePassword} value={password} />
                    </div>
                    <button type="submit" class="btn btn-primary w-100 border border-1">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
};

export default SignIn;