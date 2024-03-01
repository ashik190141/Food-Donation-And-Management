// import React from 'react';

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { useGetSingleDonationQuery, useUpdateDonationMutation } from "../Redux/Features/supply/supplyApi";
import { useNavigate } from 'react-router-dom';

const UpdateDonation = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: donation } = useGetSingleDonationQuery({ id });
    useEffect(() => {
        if (donation?.success) {
            setShow(false);
        }
    }, [donation]);
    console.log(donation);

    const [show, setShow] = useState(true);
    const [updateSupply] = useUpdateDonationMutation();

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const form = event.target;
        // console.log(data);
        setShow(true);
        const donationDetails = {
            id:id,
            category: form.category.value,
            title: form.title.value,
            quantity: form.quantity.value,
            description: form.description.value,
        };
        const res = await updateSupply(donationDetails).unwrap();
        if (res.success) {
            setShow(false);
            Swal.fire({
            title: "Donation Updated",
            text: res.message,
            icon: "success",
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/dashboard')
                }
            })
        }
    };

    return (
      <div>
        <div className="hero min-h-screen font-family">
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center">
            <div className="w-auto md:w-[400px] lg:w-[500px]">
              <div className="card flex-shrink-0 w-full  shadow-2xl bg-white">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="pb-8">
                      <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        defaultValue={donation?.data?.category}
                        className="p-2 border-2 border-black bg-transparent w-full"
                      />
                    </div>
                    <div className="pb-8">
                      <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        defaultValue={donation?.data?.title}
                        className="p-2 border-2 border-black bg-transparent w-full"
                      />
                    </div>
                    <div className="pb-8">
                      <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        defaultValue={donation?.data?.quantity}
                        className="p-2 border-2 border-black bg-transparent w-full"
                      />
                    </div>
                    <div className="pb-8">
                      <textarea
                        className="p-2 border-2 border-black bg-transparent w-full"
                        rows={4}
                        cols={10}
                        id="description"
                        placeholder="Description"
                        defaultValue={donation?.data?.description}
                      />
                    </div>
                    <div>
                      {!show && (
                        <input
                          type="submit"
                          value="Update Donation"
                          className="btn uppercase text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 w-full"
                        />
                      )}
                      <div
                        className={`text-center ${
                          show ? "block" : "hidden"
                        } mt-3`}
                      >
                        <span className="loading loading-spinner w-[50px] text-warning text-center"></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateDonation;