import React, { use } from "react";
import Container from "../Components/Container";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router";

const MyProfile = () => {
  const {user} = use(AuthContext)
  console.log(user)

  
   
  return (
    <>
      <Container>
        <title>My Profile</title>
        <div className="flex flex-col justify-center items-center gradient  min-h-screen">
        <div class="avatar mb-6">
            <div class="w-30 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
            <div className="w-90 rounded-2xl border hover:border-amber-300 p-4 ">
              <div className="text-center space-y-5">
                <h1 className="text-4xl dotmatrix text-red-500">{user.displayName}</h1>
                <p>{user.email}</p>
              </div>
           
             
                  <Link to='/updateprofile'  className="btn w-full btn-neutral mt-4 bg-linear-65 from-purple-500 to-pink-500">
                    Update Profile
                  </Link>
                

            </div>
        
         
        </div>
      </Container>
    </>
  );
};

export default MyProfile;


{/* <fieldset className="fieldset">
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Photo URL"
                  />
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                  />
                  <button className="btn btn-neutral mt-4 bg-linear-65 from-purple-500 to-pink-500">
                    Update Profile
                  </button>
                </fieldset> */}
