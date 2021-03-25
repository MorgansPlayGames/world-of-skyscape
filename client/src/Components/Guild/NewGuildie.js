import React, { useState } from "react";
import { API } from '../../utils/API';

function NewGuildie(props) {

    const userData = props.userData;
    const [newGuildie, setNewGuildie] = useState(userData);
    function handleChange(e) {
      const { name, value } = e.target;
      setNewGuildie({ ...newGuildie, [name]: value });
    }
  
    function handleNewGuildie(e) {
      e.preventDefault();
      API.createGuildie(newGuildie)
        .then((res) => {
          console.log(newGuildie, " has been created")
        })
        .catch((err) => {
          // probably need a better way to notify on this error
          console.log('err', err);
        });
    }
    
    return (
      <>
        <div
          className={'col-span-12 laptop:border-solid laptop:border-l laptop:border-black laptop:border-opacity-25 h-full pb-12 laptop:col-span-10'}
        >
          <div className="px-4 pt-4">
            <form onSubmit={handleNewGuildie} className="flex flex-col space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">"Welcome to the Guild"</h3>
                <hr />
              </div>
  
              <div className="form-item">
                <label className="text-xl ">New Character Name</label>
                <input
                  required
                  type="text"
                  name="guildieName"
                  onChange={handleChange}
                  defaultValue=""
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                />
              </div>
              <div className="text-lg font-thin text-white   flex mx-auto">
                <div className=" bg-buttonColor rounded-xl shadow-xl text-center  px-3 py-1">
                  <button className="">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
export default NewGuildie;
