// import React from 'react';
import { useEffect, useState } from 'react';
import { FieldValues } from "react-hook-form";
import { useAddDonationMutation } from '../Redux/Features/supply/supplyApi';
const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/Page/Redux/Features/hooks';
import { useCurrentUser } from '../Redux/Features/auth/authSlice';

const AddSupply = () => {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState([]);
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    const user:any = useAppSelector(useCurrentUser);
    const email = user?.user?.email;
    const [addSupply] = useAddDonationMutation();
    const {
      register,
      handleSubmit
    } = useForm();
    const navigate = useNavigate();
    
    useEffect(()=>{
      fetch('/category.json')
        .then(res => res.json())
        .then(data => {
          setCategory(data);
      })
    },[])

    const onSubmit = async (data: FieldValues) => {
        setShow(true);
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(imageHostingUrl, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then(async (imgResponse) => {
            if(imgResponse.success){
                const donationDetails = {
                  category: data.category,
                  title: data.title,
                  quantity: parseInt(data.quantity),
                  description: data.description,
                  image: imgResponse.data.display_url,
                  email:email
                };
                const res = await addSupply(donationDetails).unwrap();
                if (res.success == true) {
                    setShow(false)
                    Swal.fire({
                      title: "Donation Added",
                      text: "Successfully Added Your Donation",
                      icon: "success",
                    }).then(result => {
                        if (result.isConfirmed) {
                            navigate('/dashboard')
                        }
                    });
                }
            }
          });
    };

    return (
      <div className="hero min-h-screen font-family">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center">
          <div className="w-auto md:w-[400px] lg:w-[500px]">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-white">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="pb-8 text-black">
                    {/* <input
                      className="p-2 border-2 border-black bg-transparent w-full"
                      type="text"
                      id="category"
                      placeholder="Category"
                      {...register("category", { required: true })}
                      required
                    /> */}
                    <select
                      className="select p-2 border-2 border-black bg-transparent w-full"
                      id="category"
                      {...register("category", { required: true })}
                    >
                      {category?.map(
                        (category: { id: string; title: string }) => (
                          <option value={category.title}>
                            {category.title}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="pb-8">
                    <input
                      className="p-2 border-2 border-black bg-transparent w-full rounded-sm"
                      type="text"
                      id="title"
                      placeholder="Title"
                      {...register("title", { required: true })}
                      required
                    />
                  </div>
                  <div className="pb-8">
                    <input
                      className="rounded-sm p-2 border-2 border-black bg-transparent w-full"
                      type="text"
                      id="quantity"
                      placeholder="Quantity"
                      {...register("quantity", { required: true })}
                      required
                    />
                  </div>
                  <div className="pb-8">
                    <textarea
                      className="p-2 rounded-sm border-2 border-black bg-transparent w-full"
                      rows={4}
                      cols={10}
                      id="description"
                      placeholder="Description"
                      {...register("description", { required: true })}
                      required
                    />
                  </div>
                  <div className="pb-8">
                    <input
                      className="p-2 rounded-sm border-2 border-black bg-transparent w-full"
                      type="file"
                      id="image"
                      placeholder="Image"
                      {...register("image", { required: true })}
                      required
                    />
                  </div>
                  <div>
                    {!show && (
                      <input
                        type="submit"
                        value="Add Supply"
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
    );
};

export default AddSupply;