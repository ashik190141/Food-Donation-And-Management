// import React from 'react';

import { Key, useEffect, useState } from "react";
import { useDeleteDonationMutation, useGetAllDonationQuery } from "../Redux/Features/supply/supplyApi";
import Loader from '../../components/layout/Loader';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MessageSquareDiff, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Modal from "react-modal";
import ReviewModal from "./ReviewModal";
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



const AllSupply = () => {
    const [show, setShow] = useState(true);
    const [id, setId] = useState('');
    const [deleteDonation] = useDeleteDonationMutation();
    const { data: allDonation } = useGetAllDonationQuery(undefined);
    useEffect(() => {
        if (allDonation?.success) {
          setShow(false);
        }
    },[allDonation])
    // console.log(allDonation);
  
     let subtitle:any;
     const [modalIsOpen, setIsOpen] = useState(false);

     const openModal = (id:any) => {
       setId(id);
       setIsOpen(true);
     };

     function afterOpenModal() {
       // references are now sync'd and can be accessed.
       subtitle.style.color = "#f00";
     }

     function closeModal() {
       setIsOpen(false);
     }
    
    const handleDelete = async(id: Key) => {
      const deleteInfo = {
        id:id
      }
      const res = await deleteDonation(deleteInfo).unwrap();
      if (res.success == true) {
        setShow(false);
        Swal.fire({
          title: "Donation Deleted",
          text: "Successfully Delete Donation",
          icon: "success",
        })
      }
    }
    return (
      <div className="py-20 px-10 text-black">
        {show && (
          <div className="h-[100vh] flex items-center justify-center">
            <Loader show={show}></Loader>
          </div>
        )}
        {!show && (
          <Table>
            <TableCaption>A list of all Donation.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-center">Review</TableHead>
                <TableHead className="text-center">Update</TableHead>
                <TableHead className="text-center">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allDonation?.data?.map(
                (donation: {
                  _id: Key;
                  title: string;
                  category: string;
                  quantity: number;
                }) => (
                  <TableRow key={donation._id}>
                    <TableCell className="font-medium">
                      {donation.title}
                    </TableCell>
                    <TableCell>{donation.category}</TableCell>
                    <TableCell className="text-center">
                      {donation.quantity}
                    </TableCell>
                    <TableCell className="text-center">
                      <button
                        onClick={() => openModal(donation._id)}
                        className="text-center"
                      >
                        <MessageSquareDiff className="text-yellow-600" />
                      </button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Link to={`/dashboard/updateDonation/${donation._id}`}>
                        <button className="text-center">
                          <Pencil className="text-yellow-600" />
                        </button>
                      </Link>
                    </TableCell>
                    <TableCell className="text-center">
                      <button
                        onClick={() => handleDelete(donation._id)}
                        className="text-center"
                      >
                        <Trash2 className="text-red-500" />
                      </button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        )}
        {!show && (
          <div className="flex items-center justify-center pt-16">
            <Link to="/dashboard/create-supply">
              <button className="btn btn-warning uppercase">ADD SUPPLY</button>
            </Link>
          </div>
        )}
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ReviewModal id={id}></ReviewModal>
            <div className="mt-10 flex justify-end">
              <button className="btn btn-neutral" onClick={closeModal}>
                close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
};

export default AllSupply;