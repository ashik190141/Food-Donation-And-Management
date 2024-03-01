// import React from 'react';
import banner from '../../assets/Navbar/front-view-donation-boxes-bags-with-food.jpg';
import img1 from '../../assets/Navbar/cheerful-female-volunteer-holding-box-with-food-donation.png'
import { motion } from 'framer-motion'
import '../../App.css'
import { Link } from 'react-router-dom';

const Banner = () => {

    const intro = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
          delayChildren: 1,
        },
      },
    };

    const introChildren1 = {
      hidden: { opacity: 0, x:-300 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, type: "spring" },
      },
    };

    const introChildren2 = {
      hidden: { opacity: 0, x: 300 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, type: "spring" },
      },
    };

    return (
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-neutral-content">
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row gap-5 items-center justify-center"
          >
            <motion.div variants={introChildren1}>
              <p
                className="mt-24 md:mt-0 text-3xl md:text-[40px] font-semibold mb-16"
                style={{ lineHeight: "50px" }}
              >
                Join Us in Fighting Hunger{" "}
                <span className="text-orange-600">
                  Donate Food, Change Lives
                </span>
              </p>
              <p className="mb-5 text-justify text-[22px]">
                Food donation is a vital act of kindness that addresses hunger
                and food insecurity in communities worldwide. By donating food
                items, inmotion.dividuals and organizations play a pivotal role
                in ensuring that vulnerable populations have access to
                nutritious meals. Each donation, whether it's a non-perishable
                staple or fresh produce, contributes to alleviating hunger and
                improving the quality of life for those in need.{" "}
              </p>
              <div className="container">
                <Link to="/supplies" className="button type--A">
                  <div className="button__line"></div>
                  <div className="button__line"></div>
                  <span className="button__text text-xl py-3">ENTRY</span>
                  <div className="button__drow1"></div>
                  <div className="button__drow2"></div>
                </Link>
              </div>
            </motion.div>
            <motion.div variants={introChildren2} className="">
              <img
                src={img1}
                alt=""
                className="size-[90%] rounded-xl opacity-90"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
};

export default Banner;