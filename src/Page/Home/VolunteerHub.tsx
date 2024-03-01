// import React from 'react';
import '../../App.css'
import { Link } from "react-router-dom";

const VolunteerHub = () => {
    return (
      <div className="py-20 backGround">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div>
              <button className="bg-purple-700 px-10 py-3 text-xl text-white">
                Distribute Food
              </button>
              <div className="text-5xl uppercase pt-5 font-bold">
                distribute meal to needy people
              </div>
              <div className="py-5 text-justify text-xl">
                Volunteers should be prepared to adapt to different tasks and
                situations based on the evolving needs of the organization or
                community. Flexibility and a willingness to learn new skills are
                important qualities for volunteers to possess.
              </div>
              <div>
               <Link to='/volunteer'><button className='bg-blue-400 px-10 py-4 text-xl text-white hover:scale-110 hover:duration-300 rounded-lg'>Register As Volunteer</button></Link> 
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
};

export default VolunteerHub;