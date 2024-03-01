// import React from 'react';
import { Key, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAllDonationQuery } from "../Redux/Features/supply/supplyApi";
import Loader from '../../components/layout/Loader';

const Supply = () => {
    const [show, setShow] = useState(true);
    const [showVal, setShowVal] = useState(6);
    const { data: allDonation } = useGetAllDonationQuery(undefined);
    useEffect(() => {
      if (allDonation?.success) {
        setShow(false);
      }
    }, [allDonation]);
    // console.log(allDonation?.data?.slice(0,showVal));

    const handleShowMore = () => {
        // console.log(allDonation?.data?.length);
        setShowVal(allDonation?.data?.length)
    }

    return (
      <div className="bg-slate-200 pt-20 pb-20">
        <div className="max-w-[1220px] mx-auto min-h-screen">
          {show && (
            <div className="flex items-center justify-center">
              <Loader show={show}></Loader>
            </div>
          )}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="flex items-center justify-center"
          >
            {!show && (
              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                {allDonation?.data
                  ?.slice(0, showVal)
                  .map(
                    (donation: {
                      _id: Key;
                      title: string;
                      category: string;
                      quantity: number;
                      image: string;
                    }) => (
                      <div key={donation._id}>
                        <div className="card card-compact w-full md:w-96 lg:w-96 bg-base-100 shadow-xl">
                          <figure>
                            <img src={donation.image} alt="Shoes" />
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title">{donation.title}</h2>
                            <p className="font-medium text-[18px]">
                              {donation.category}
                            </p>
                            <p className="font-medium text-[18px]">
                              {donation.quantity}
                            </p>
                            <div className="card-actions justify-end">
                              <Link
                                to={`/supplies/${donation._id}`}
                                className="btn btn-primary"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            )}
          </div>
          {showVal == 6 && (
            <div className="flex items-center justify-center pt-10">
              <button
                onClick={handleShowMore}
                className="btn btn-warning text-xl"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    );
};

export default Supply;