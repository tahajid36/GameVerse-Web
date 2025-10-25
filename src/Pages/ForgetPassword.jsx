import React, { use } from 'react';
import Container from '../Components/Container';
import { AuthContext } from '../Auth/AuthProvider';
import { Link } from 'react-router';

const ForgetPassword = () => {
    const {resetPassword , resetEmail, setEmail} = use(AuthContext)
    const handleReset = (e) => {
        e.preventDefault()
        const email = e.target.email.value 
        console.log(email)
        resetPassword(email)
        .then(() => {
           //verification email sent to reset pass
        })
        .catch(error => {
          console.log(error.message)
        })
        
    }
    return (
        <>
      <Container>
        <title>Reset Password</title>
        <div className="flex flex-col justify-center items-center gradient  min-h-screen">
            <h1 className='text-5xl mb-20 dotmatrix'>Reset Password </h1>
            <div className="w-80 rounded-2xl border hover:border-amber-300 p-4 ">
                
           
            <form onSubmit={handleReset} className="fieldset">
                  <label className="label">Email</label>
                  <input 
                  onChange={(e)=> setEmail(e.target.value)}
                   value={resetEmail}
                    type="email"
                    name='email'
                    className="input bg-base-300 placeholder:text-gray-500 "
                    placeholder="Enter email address" required
                    
                  />
                  <Link to='https://mail.google.com/mail/u/0/'>
                  <button type='submit' className="btn btn-neutral mt-4 bg-linear-65 from-purple-500 to-pink-500">
                    Reset Password
                  </button>
                  </Link>
                  
                </form>

            </div>
        
         
        </div>
      </Container>
    </>
    );
};

export default ForgetPassword;