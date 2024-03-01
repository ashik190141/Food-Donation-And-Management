// import React from 'react';
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Summary = () => {
  const ref = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const textBelow = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const inView1 = useInView(text);
  const inView2 = useInView(textBelow);
    return (
      <motion.div className="pb-32 max-w-[1220px] mx-auto pt-[50px] md:pt-[50px] lg:pt-[80px] px-4 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            ref={ref}
            animate={
              inView
                ? { opacity: 1, x: 0, transition: { duration: 0.5 } }
                : { opacity: 0, x: -500 }
            }
          >
            <img
              src="https://kodesolution.com/2022/ecoife/home1/wp-content/uploads/sites/4/2021/10/divider-01.jpg"
              alt=""
              className="rounded-xl"
            />
          </motion.div>
          <div>
            <motion.div
              ref={text}
              animate={
                inView1
                  ? { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  : { opacity: 0, y: -500 }
              }
            >
              <p className="text-orange-400 text-2xl font-bold">
                We Love & Care
              </p>
              <p
                className="text-5xl font-bold pt-5 text-justify pb-7"
                style={{ lineHeight: "60px" }}
              >
                We Love & Care Make An Impact & Give Back To The Nature
              </p>
            </motion.div>

            <p className="pb-5 text-xl text-orange-300">
              That’s how we’d like the world to be
            </p>

            <motion.div
              ref={textBelow}
              animate={
                inView2
                  ? { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  : { opacity: 0, y: 50 }
              }
            >
              <p className="text-xl text-justify pb-10">
                Our platform is dedicated to addressing food insecurity and
                promoting equitable access to nutritious meals for all
                individuals and communities. Our core mission is to streamline
                food distribution and supplies management processes, ensuring
                that no one goes hungry due to lack of resources or support. We
                strive to create a sustainable and efficient ecosystem where
                surplus food is redistributed to those in need, minimizing waste
                and maximizing impact.
              </p>

              <button className="btn btn-outline text-black  border border-orange-500">
                Discover More
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
};

export default Summary;