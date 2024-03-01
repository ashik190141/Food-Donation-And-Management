// import React from 'react';

import { useGetAllDonationQuery } from "../Redux/Features/supply/supplyApi";
import { Key, useState } from 'react';
import { useEffect } from 'react';
import Loader from '../../components/layout/Loader';
import { Link } from "react-router-dom";

const AllSupplies = () => {
    const [show, setShow] = useState(true);
    const { data: allDonation } = useGetAllDonationQuery(undefined);
    useEffect(() => {
      if (allDonation?.success) {
        setShow(false);
      }
    }, [allDonation]);
    return (
      <div className="bg-slate-200 pt-40 pb-40">
        <div className="max-w-[1220px] mx-auto min-h-screen">
          {show && (
            <div className="h-[100vh] flex items-center justify-center">
              <Loader show={show}></Loader>
            </div>
          )}
          <div className="flex items-center justify-center">
            {!show && (
              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                {allDonation?.data?.map(
                  (donation: {
                    _id: Key;
                    title: string;
                    category: string;
                    quantity: number;
                    image: string;
                  }) => (
                    <div key={donation._id}>
                      <div data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="card card-compact w-full md:w-96 lg:w-96 bg-base-100 shadow-xl">
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
        </div>
      </div>
    );
};

export default AllSupplies;