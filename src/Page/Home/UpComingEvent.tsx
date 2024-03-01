// import React from 'react';
import { Card } from 'antd';
import { MapPin, Timer } from 'lucide-react';
import img from '../../assets/Navbar/upcoming.jpg'

const UpComingEvent = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <div
          className="hero min-screen"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content">
            <div className="py-52 px-10">
              <p className="text-2xl pb-3 font-bold">Latest Event List</p>
              <p
                className="mt-24 md:mt-0 text-3xl md:text-[40px] font-semibold mb-16"
                style={{ lineHeight: "50px" }}
              >
                Upcoming Events of{" "}
                <span className="text-orange-600 uppercase">
                  Feed Forward foundation
                </span>
              </p>
              <p className="mb-5 text-justify text-[22px]">
                Food donation is a vital act of kindness that addresses hunger
                and food insecurity in communities worldwide. By donating food
                items, individuals and organizations play a pivotal role in
                ensuring that vulnerable populations have access to nutritious
                meals. Each donation, whether it's a non-perishable staple or
                fresh produce, contributes to alleviating hunger and improving
                the quality of life for those in need.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] flex flex-col gap-6 items-center justify-center">
          <Card
            className="p-1 md:p-8 lg:p-20 rounded-lg w-full md:w-[50%]"
            title="Saving food in world"
            bordered={false}
            style={{ fontSize: "18px" }}
          >
            <div>
              <div className="flex gap-5 items-center py-2">
                <div>
                  <Timer className="text-orange-500" />
                </div>
                <div>4:30 am - 7:30 am</div>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <MapPin className="text-orange-500" />
                </div>
                <div>Chanchra, Jashore</div>
              </div>
            </div>
          </Card>
          <Card
            className="p-1 md:p-8 lg:p-20 rounded-lg w-full md:w-[50%]"
            title="Donate Food For Hungry People"
            bordered={false}
            style={{fontSize: "18px" }}
          >
            <div>
              <div className="flex gap-5 items-center py-2">
                <div>
                  <Timer className="text-orange-500" />
                </div>
                <div>4:30 am - 7:30 am</div>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <MapPin className="text-orange-500" />
                </div>
                <div>Chanchra, Jashore</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
};

export default UpComingEvent;