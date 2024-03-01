// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGetSupplierInfoQuery } from '../Redux/Features/user/userApi';
import { Captions, CheckCheck, MailMinus, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const RelevantInfo = ({ data, email }: any) => {
    console.log(email);
    const [show, setShow] = useState(true);

    const { data: userInfo } = useGetSupplierInfoQuery({ email: email });
    console.log(userInfo?.data);
    useEffect(() => {
      if (userInfo?.success) {
        setShow(false);
      }
    }, [userInfo]);

    return (
      <div>
        {!show && (
          <div className="w-full p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <p className="text-center font-bold text-xl pb-10">
                  Supplier Information
                </p>
                <div>
                  <div className="flex gap-5 pb-3">
                    <User className="text-orange-500" />
                    <p>{userInfo?.data?.name}</p>
                  </div>
                  <div className="flex gap-5 pb-10">
                    <MailMinus className="text-orange-500" />
                    <p>{userInfo?.data?.email}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-center font-bold text-xl pb-10">
                  Supply Information
                </p>
                <div className="flex gap-5 pb-3">
                  <Captions className="text-orange-500" />
                  <p>{data?.title}</p>
                </div>
                <div className="flex gap-5 pb-10">
                  <CheckCheck className="text-orange-500" />
                  <p>{data?.category}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to='/dashboard'>
                <button className="btn btn-warning">Donate</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
};

export default RelevantInfo;