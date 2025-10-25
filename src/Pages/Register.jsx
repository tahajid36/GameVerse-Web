import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from 'react-toastify';


const Register = () => {
  

  const navigate= useNavigate()
  const {CreateUser, setUser , googleSignIn, updateUser} = use(AuthContext)
  const [error, setError] = useState('')
    const handleRegister=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photourl.value;
        const name = e.target.name.value;
        const Regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        // console.log(email, password)
        CreateUser(email,password)
        .then(result=>{
          // console.log(result.user)
          const user = result.user
          

          
          
          // setUser(user)


          updateUser({
            displayName: name , photoURL: photo
          }).then(()=> {
            setUser({...user, displayName: name , photoURL: photo})
            toast.success("User Registered Succesfully")
           
          }).catch(error=>{
            console.log(error.message)
            setUser(user)
          })
          navigate('/')




         
        })


        .catch(error=>{
          if(!Regex.test(password)){
            setError("Password must be 6+ characters with upper and lowercase letters.")
          }
          else{
            setError(error.message)
          }
          // console.log(error.message)
        })
    }
    const handleRegisterGoogle = () => {
      googleSignIn()
      .then(result => {
        const user = result.user;
        setUser(user)
        navigate('/')
      })
      .catch(error => {
        console.log(error.message)
      })

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
          <title>Register Now</title>
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
       {/* Photo url field  */}
       <label className="label">Photo URL</label>
       <input name='photourl' type="text" className="input" placeholder="Paste your photo url" required />
       {/* password field  */}
       <label className="label">Password</label>
       <input name='password' type="password" className="input" placeholder="Password" required />
    
       <p className="text-red-500">{error}</p>
       
       
       <button className="btn btn-neutral mt-1">Register</button>
       <button onClick={handleRegisterGoogle} class="btn bg-white mt-4 text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
       <p >Already have an account?<Link className='text-secondary' to='/auth/login'> Login</Link> </p>

     </fieldset>
     
   </form>
 </div>
 <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
     </div>
    );
};

export default Register;