// import React from 'react';
import Banner from './Banner';
import Testimonial from './Testimonial';
import Summary from './Summary';
import UpComingEvent from './UpComingEvent';
import NewsAndArticle from './NewsAndArticle';
import Supply from './Supply';
import Gallery from './Gallery';
import VolunteerHub from './VolunteerHub';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Supply></Supply>
        <Testimonial></Testimonial>
        <Gallery></Gallery>
        <Summary></Summary>
        <UpComingEvent></UpComingEvent>
        <NewsAndArticle></NewsAndArticle>
        <VolunteerHub></VolunteerHub>
      </div>
    );
};

export default Home;