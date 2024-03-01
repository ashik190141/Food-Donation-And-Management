// import React from 'react';

import { BookOpen } from "lucide-react";

const NewsAndArticle = () => {
    const blogsInfo = [
      {
        title: "Exploring the Global Challenge of Food Waste",
        author: "Md. Ahsan Mahmud Ashik",
        img: "https://i.ibb.co/mB7gT8Q/food-Waste.jpg",
      },
      {
        title: "Navigating the Journey of Food Processing",
        author: "Md. Mahmud Ashraf",
        img: "https://i.ibb.co/FqGbzWF/food-Processing.jpg",
      },
      {
        title: "Understanding the Plight of Hunger-Stricken Communities",
        author: "Khalid Mahmud",
        img: "https://i.ibb.co/5RCHzHT/hunger.jpg",
      },
    ];
    return (
      <div className="bg-teal-900">
        <div className="max-w-[1220px] mx-auto pt-32 pb-32">
          <p className="text-center text-2xl font-bold pb-3 text-orange-500">
            From The Blog
          </p>
          <p className="text-5xl font-bold text-white text-center pb-10">
            News & Articles
          </p>
          <div className="flex items-center justify-center">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {blogsInfo.map((blog) => (
                <div
                  className="w-[380px] bg-slate-200 rounded-md p-2 md:p-3 lg:p-7"
                  key={blog.author}
                >
                  <img
                    src={blog.img}
                    alt=""
                    className="rounded-lg object-cover duration-300 hover:scale-110"
                  />
                  <div className="pt-5 flex gap-3 items-center">
                    <BookOpen className="text-orange-400" />
                    <p>{blog.author}</p>
                  </div>
                  <div className="pt-5 font-bold text-xl">{blog.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default NewsAndArticle;