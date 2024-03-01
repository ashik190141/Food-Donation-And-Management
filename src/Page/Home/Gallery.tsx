// import React from 'react';
import { Key, useState } from "react";
import { useEffect } from "react";
import { useGetAllDonationQuery } from "../Redux/Features/supply/supplyApi";
import Loader from '../../components/layout/Loader';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Gallery = () => {
    const [show, setShow] = useState(true);
    const { data: allDonation } = useGetAllDonationQuery(undefined);
    useEffect(() => {
      if (allDonation?.success) {
        setShow(false);
      }
    }, [allDonation]);
    // console.log(allDonation?.data);
    return (
      <div className="bg-slate-200 pt-20 pb-20">
        <div className="max-w-[1220px] mx-auto">
          {show && (
            <div className="h-[100vh] flex items-center justify-center">
              <Loader show={show}></Loader>
            </div>
          )}
        </div>
        <div className="max-w-[1220px] mx-auto flex items-center justify-center">
          {!show && (
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {allDonation?.data?.map(
                (donation: { image: string; _id: Key; category: string }) => (
                  <SwiperSlide key={donation._id}>
                    <div className="flex items-center justify-center">
                      <div className="group overflow-hidden relative">
                        <img
                          src={donation?.image}
                          alt=""
                          className="w-full h-[400px] transform group-hover:scale-105 transition-all duration-300"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 
                        group-hover:opacity-70 transition-opacity duration-300 bg-white/70"
                        >
                          <p className="text-black font-black text-3xl">
                            {donation?.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          )}
        </div>
      </div>
    );
};

export default Gallery;