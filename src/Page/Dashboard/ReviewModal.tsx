// import React from 'react';
import { useAppSelector } from '@/Page/Redux/Features/hooks';
import { useCurrentUser } from '../Redux/Features/auth/authSlice';
import { useAddReviewMutation, useGetSupplierInfoQuery } from '../Redux/Features/user/userApi';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ReviewModal = ({ id }: any) => {
    const user:any = useAppSelector(useCurrentUser);
    const email = user?.user?.email;
    const navigate = useNavigate();

    const { data: userInfo } = useGetSupplierInfoQuery({ email: email });
    const [addReview] = useAddReviewMutation();
    
    const [rating, setRating] = useState(0);

    const handleReview = async() => {
        const reviewInfo = {
            name: userInfo?.data.name || 'Unknown',
            email: email,
            review: (document.getElementById('review') as HTMLInputElement)?.value||null,
            rating: rating,
            id: id
        }
        const res = await addReview(reviewInfo).unwrap();
        // console.log(res);
        if (res.success == true) {
          Swal.fire({
            title: "Review Added",
            text: "Successfully Added Your Review",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/dashboard");
            }
          });
        }
    }

    return (
      <div className="card w-52 md:w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" font-semibold text-xl text-center">Add a Review</h2>
          <div>
            {/* 5-star */}
            <div>
              <p className="required font-bold">Your Rating *</p>
              <Rating
                style={{ maxWidth: 250 }}
                value={rating}
                onChange={setRating}
              />
            </div>
            {/* review */}
            <div className="form-control">
              <label className="label flex gap-1">
                <span className="label-text font-bold">Your Review</span>
                <p className="font-bold">*</p>
              </label>
              <textarea
                placeholder=""
                className="textarea textarea-bordered textarea-md w-full"
                required
                id="review"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full pt-5">
              {/* name */}
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input w-[280px]  rounded-none  input-bordered"
                  readOnly
                  defaultValue={userInfo?.data.name}
                  required
                />
              </div>

              {/* email */}
              <div className="form-control">
                <input
                  type="email"
                  defaultValue={email}
                  name="email"
                  readOnly
                  placeholder="example@gmail.com"
                  className="input w-[280px] rounded-none  input-bordered"
                  required
                />
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={handleReview}
                  className="btn bg-[#f29973] rounded-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReviewModal;