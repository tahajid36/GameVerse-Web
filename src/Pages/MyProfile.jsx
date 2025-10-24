import React from "react";
import Container from "../Components/Container";
import { AuthContext } from "../Auth/AuthProvider";

const MyProfile = () => {
   
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center items-center gradient  min-h-screen">
        <div class="avatar mb-6">
            <div class="w-30 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
            <div className="w-80 rounded-2xl border hover:border-amber-300 p-4 ">
           
            <fieldset className="fieldset">
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
                  <button  className="btn btn-neutral mt-4 bg-linear-65 from-purple-500 to-pink-500">
                    Update Profile
                  </button>
                </fieldset>

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
