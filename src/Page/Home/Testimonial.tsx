// import React from 'react';
import { Key, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Image } from "antd";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("review.json")
        .then((res) => res.json())
          .then((data) => {
              // console.log(data);
              setReviews(data)
          });
    }, []);

    return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="max-w-[1220px] mx-auto pt-[50px] md:pt-[50px] lg:pt-[80px] px-4 md:px-10 lg:px-0">
          <div>
            <p className="text-center font-bold text-3xl mb-5 text-amber-100">
              Our Testimonial
            </p>
            <p className="text-center font-bold text-5xl mb-7">What They Say</p>
            <div className="hidden md:block lg:block">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {reviews.map(
                  (
                    review: {
                      id: Key | null | undefined;
                      rating: number;
                      details: string;
                      name: string;
                      img: string;
                      bg: string;
                    },
                    index
                  ) => (
                    <SwiperSlide key={review.id}>
                      <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className={`my-16 flex flex-col items-center mx-24 p-8 rounded-lg ${
                          (index == 0 && "bg-slate-800") ||
                          (index == 1 && "bg-[#304C62]") ||
                          (index == 2 && "bg-[#2e3034]") ||
                          (index == 3 && "bg-[#0d403a]") ||
                          (index == 4 && "bg-[#5C677D]") ||
                          (index == 5 && "bg-[#033047]")
                        }`}
                      >
                        <Rating
                          style={{ maxWidth: 180 }}
                          value={review.rating}
                          readOnly
                        />
                        <div className="my-8 w-[480px] text-justify text-white">{review.details}</div>
                        <div className="flex gap-6 items-center">
                          <div className="size-14">
                            <Image
                              src={review.img}
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <h3 className="text-2xl text-orange-400">
                            {review.name}
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
            <div className="block md:hidden lg:hidden">
              <div className="flex items-center justify-center">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-[250px] md:max-w-[650px]"
                >
                  <CarouselContent>
                    {reviews.map(
                      (review: {
                        id: Key | null | undefined;
                        rating: number;
                        details: string;
                        name: string;
                        img: string;
                        bg: string;
                      }) => (
                        <CarouselItem
                          key={review.id}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center">
                                <div
                                  className={`my-16 flex flex-col items-center rounded-lg`}
                                >
                                  <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                  />
                                  <div className="my-8 text-justify">
                                    {review.details}
                                  </div>
                                  <div className="flex gap-6 items-center">
                                    <div className="size-14">
                                      <Image
                                        src={review.img}
                                        alt=""
                                        className="rounded-full"
                                      />
                                    </div>
                                    <h3 className="text-2xl text-orange-400">
                                      {review.name}
                                    </h3>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      )
                    )}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;