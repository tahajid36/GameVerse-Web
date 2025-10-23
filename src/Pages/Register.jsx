import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from "react-router";

const Register = () => {
  const navigate= useNavigate()
  const {CreateUser, setUser} = use(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        CreateUser(email,password)
        .then(result=>{
          // console.log(result.user)
          const user = result.user
          setUser(user)
          navigate('/auth/login')
        })
        .catch(error=>{
          console.log(error.message)
        })


        

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
         <h2 className='font-semibold text-2xl text-center'>Register</h2>
   <form onSubmit={handleRegister} className="card-body">
     <fieldset className="fieldset">
      {/* email field  */}
       <label className="label">Email</label>
       <input name='email' type="email" className="input" placeholder="Email" required />
      {/* name field  */}
       <label className="label">First Name</label>
       <input name='name' type="text" className="input" placeholder="First Name" required />
       {/* password field  */}
       <label className="label">Password</label>
       <input name='password' type="password" className="input" placeholder="Password" required />
       <div><a className="link link-hover">Forgot password?</a></div>
       
       <button className="btn btn-neutral mt-4">Register</button>
       <p >Already have an account?<Link className='text-secondary' to='/auth/login'> Login</Link> </p>

     </fieldset>
     
   </form>
 </div>
     </div>
    );
};

export default Register;