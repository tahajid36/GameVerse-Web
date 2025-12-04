import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [error , setError] = useState("")

  const { SignIn, setUser, SignOut, googleSignIn, setEmail, resetEmail } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const Regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
   
    // sign in method
    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        if(!Regex.test(password)){
          setError(`Password must've atleast 6 characters and 1 upper and 1 lower case character atleast`)
        }
        else{
          setError(error.message)
        }
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user  = result.user 
      setUser(user)
      navigate(`${location.state ? location.state : '/'}`);
    
    })
    .catch(error=> {
      setError(error.message)
    })

  }

  return (
    <div className="flex justify-center min-h-screen items-center bg-black/60 backdrop-blur-md
    ">
      <title>Login Now</title>
      <div className="card border border-gray-500 w-full min-w-md max-w-sm shrink-0 shadow-2xl py-6">
        <h2 className="font-semibold text-2xl text-center">Login</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
            value={resetEmail}
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <div>
              <Link to='/auth/passwordreset'>
              <a className="link link-hover">Forgot password?</a>
              </Link>
             
            </div>
            <p className="text-red-500">{error}</p>

            

            <button className="btn btn-neutral mt-1">Login</button>
            <button onClick={handleGoogleSignIn} class="btn bg-white mt-4 text-black border-[#e5e5e5]">
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
            <p>
              Don't have an account?
              <Link className="text-secondary" to="/auth/register">
                {" "}
                Register
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
