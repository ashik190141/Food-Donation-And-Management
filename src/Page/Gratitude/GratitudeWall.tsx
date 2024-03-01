// import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useCurrentUser } from '../Redux/Features/auth/authSlice';
import { useAddGratitudeMutation, useGetAllGratitudeQuery } from '../Redux/Features/gratitude/gratitude.api';
import { useAppSelector } from '../Redux/Features/hooks';
import { useEffect } from 'react';
import Loader from '../../components/layout/Loader';
import { Key } from 'react';

const GratitudeWall = () => {
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [addGratitudePost] = useAddGratitudeMutation();

    const user: any = useAppSelector(useCurrentUser);
    const email = user?.user?.email;

    const { data: gratitudePosts } = useGetAllGratitudeQuery(undefined);
    console.log(gratitudePosts);
    useEffect(() => {
      if (gratitudePosts?.success) {
        setShow(false);
      }
    }, [gratitudePosts]);

    const onSubmit = async (data: FieldValues) => {
        setShow1(true);
        const gratitudePost = {
          description: data.description,
          email: email,
        };
        const res = await addGratitudePost(gratitudePost).unwrap();
        if (res.success == true) {
            reset();
            setShow1(false);
            Swal.fire({
                title: "Gratitude Added",
                text: "Successfully Added Your Gratitude Post",
                icon: "success",
            })
        }
    }

    return (
      <div className="">
        <div className="max-w-[1220px] mx-auto py-20">
          {show && (
            <div className="h-[50vh] flex items-center justify-center">
              <Loader show={show}></Loader>
            </div>
          )}
          <div className="pt-10">
            {gratitudePosts?.data.map(
              (post: { name: string; _id: Key; description: string }) => (
                <div key={post._id} className="py-3">
                  <p className="font-bold text-xl py-1">{post.name}</p>
                  <p>{post.description}</p>
                </div>
              )
            )}
          </div>
          <div className="py-10 px-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pb-8">
                <textarea
                  className={`p-2 rounded-sm border-2 border-orange-600 bg-transparent w-full`}
                  rows={4}
                  cols={10}
                  id="description"
                  placeholder="Enter Your Gratitude Here"
                  {...register("description", { required: true })}
                  required
                />
              </div>
              <div>
                {!show1 ? (
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center`}
                  >
                    <div className="w-full col-start-1 md:col-start-2 flex justify-end">
                      <button
                        disabled={!user}
                        className={`px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white font-semibold`}
                        type="submit"
                      >
                        {user ? "Submit" : "Log in First"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`text-center ${show1 ? "block" : "hidden"} mt-3`}
                  >
                    <span className="loading loading-spinner w-[50px] text-warning text-center"></span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default GratitudeWall;