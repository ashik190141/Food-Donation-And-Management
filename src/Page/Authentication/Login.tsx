// import React from 'react';
import PHForm from '../../components/form/PHForm';
import PHInput from '../../components/form/PHInput';
import { FieldValues } from 'react-hook-form';
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import img from '../../assets/Navbar/authtication.jpg'
import { useLoginMutation } from '../Redux/Features/auth/authApi';
import { useAppDispatch } from '../Redux/Features/hooks';
import { verifyToken } from '../../utils/verifyToken';
import { setUser } from '../Redux/Features/auth/authSlice';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();

    const onSubmit = async (data: FieldValues) => {
      setShow(true);
      const toastId = toast.loading("logging in");
      try {
        const userInfo = {
          email: data.email,
          password: data.password,
        };

        const res = await login(userInfo).unwrap();
        const user = verifyToken(res.token);

        dispatch(setUser({ user: { user }, token: res.token }));

        toast.success("Logged in", { id: toastId, duration: 2000 });
        navigate(from, { replace: true });
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
            <div className="card flex-shrink-0 w-full shadow-2xl bg-white">
              <div className="card-body">
                <PHForm onSubmit={onSubmit}>
                  <div className="pb-8">
                    <PHInput
                      type="text"
                      name="email"
                      placeHolder="Email"
                    ></PHInput>
                  </div>
                  <div className="pb-8">
                    <PHInput
                      type="password"
                      name="password"
                      placeHolder="Password"
                    ></PHInput>
                  </div>
                  <div>
                    {!show && (
                      <input
                        type="submit"
                        value="LOGIN"
                        className="btn text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 w-full"
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
                </PHForm>
                <div className="grid grid-cols-2 mt-5">
                  <p className="text-left text-lg text-black font-normal">
                    New to FEED?
                  </p>
                  <Link to="/register">
                    <p className="text-right text-lg text-black font-normal link link-hover">
                      Go to Register
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;