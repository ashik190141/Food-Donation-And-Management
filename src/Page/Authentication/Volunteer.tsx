// import React from 'react';
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../../assets/Navbar/authtication.jpg";
import { useAddVolunteerMutation } from "../Redux/Features/user/userApi";

const Volunteer = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [addVolunteer] = useAddVolunteerMutation();

    const onSubmit = async (data: FieldValues) => {
    console.log(data);
    setShow(true);
    const toastId = toast.loading("...creating");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        contact: data.number,
        location: data.location
      };
      const res = await addVolunteer(userInfo).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success("Registered", { id: toastId, duration: 2000 });
        navigate(`/`);
      } else {
        setShow(false);
        toast.error("do not create", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div
      className="hero min-h-screen font-family"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="w-auto md:w-[400px] lg:w-[500px]">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-white">
            <div className="card-body">
              <PHForm onSubmit={onSubmit}>
                <div className="pb-8">
                  <PHInput 
                    type="text" 
                    name="name" 
                    placeHolder="Name"
                    ></PHInput>
                </div>
                <div className="pb-8">
                  <PHInput
                    type="email"
                    name="email"
                    placeHolder="Email"
                  ></PHInput>
                </div>
                <div className="pb-8">
                  <PHInput
                    type="text"
                    name="number"
                    placeHolder="Phone Number"
                  ></PHInput>
                </div>
                <div className="pb-8">
                  <PHInput
                    type="text"
                    name="location"
                    placeHolder="Location"
                  ></PHInput>
                </div>
                <div>
                  {!show && (
                    <input
                      type="submit"
                      value="REGISTER"
                      className="btn text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 w-full"
                    />
                  )}
                  <div
                    className={`text-center ${show ? "block" : "hidden"} mt-3`}
                  >
                    <span className="loading loading-spinner w-[50px] text-warning text-center"></span>
                  </div>
                </div>
              </PHForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
