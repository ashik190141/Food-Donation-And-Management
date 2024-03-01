// import React from 'react';
import img from '../../assets/Navbar/404.gif.mp4'

const ErrorPage = () => {
    return (
      <div className='max-w-[1220px] mx-auto py-32'>
        <video src={img} className='w-full'></video>
      </div>
    );
};

export default ErrorPage;