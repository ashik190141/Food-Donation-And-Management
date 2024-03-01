// import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleDonationQuery } from '../Redux/Features/supply/supplyApi';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../../components/layout/Loader';
import Modal from "react-modal";
import RelevantInfo from './RelevantInfo';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SupplyDetails = () => {
    const { id } = useParams();
  const [show, setShow] = useState(true);
  
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    const { data: donation } = useGetSingleDonationQuery({ id });
    console.log(donation?.data?.email);
    useEffect(() => {
      if (donation?.success) {
        setShow(false);
      }
    }, [donation]);
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
              <div>
                <div className="">
                  <div>
                    <figure>
                      <img
                        src={donation?.data?.image}
                        alt="Shoes"
                        className="rounded-lg w-[70%]"
                      />
                    </figure>
                  </div>
                  <div className="pt-16">
                    <h2 className="font-bold text-3xl">
                      {donation.data.title}
                    </h2>
                    <p className="pt-3 text-2xl">{donation?.data?.category}</p>
                    <p className="pt-3 text-xl">{donation?.data?.quantity}</p>
                    <p className="pt-3 text-xl text-justify">
                      {donation?.data?.description}
                    </p>
                    <div className="pt-16 flex justify-end">
                      <button
                        onClick={openModal}
                        className="btn btn-primary text-xl"
                      >
                        Donate Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <RelevantInfo
            data={donation?.data}
            email={donation?.data?.email}
          ></RelevantInfo>
        </Modal>
      </div>
    );
};

export default SupplyDetails;