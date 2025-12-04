import React, { use } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUser,setUser } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photourl.value;
    updateUser({ displayName: name , photoURL: photo })
    .then(()=>{
        setUser({...user ,  displayName: name , photoURL: photo} )
    })
    .catch(error => {
        console.log(error.message)
        setUser(user)
    })
  };
  return (
    <>
      
        <title>Update Profile</title>
        <div className="flex flex-col mt-[80px] justify-center w-8/11 mx-auto rounded-3xl bg-black/60 backdrop-blur-md  items-center   min-h-screen">
          <div class="avatar mb-6">
            <div class="w-30 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <div className="min-w-md rounded-2xl border hover:border-amber-300 p-4 ">
            <form onSubmit={handleUpdateProfile} className="fieldset">
            <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                name="photourl"
                type="text"
                className="input w-full"
                placeholder="Photo URL"
              />
              
              <button
                type="submit"
                className="btn btn-neutral mt-4 bg-linear-65 from-purple-500 to-pink-500"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
    
    </>
  );
};

export default UpdateProfile;
