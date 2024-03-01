// import React from 'react';

import { useGetVolunteerQuery } from "../Redux/Features/user/userApi";

const AboutUs = () => {
    const { data: volunteerData } = useGetVolunteerQuery(undefined);
    console.log(volunteerData);
    return (
      <div className="bg-slate-200 py-32">
        <div className="max-w-[1220px] mx-auto">
          <p className="pt-5 text-justify text-xl">
            The task of a volunteer can vary widely depending on the
            organization, the specific project, and the needs of the community
            or cause being served. However, in general, the task of a volunteer
            revolves around offering one's time, skills, and efforts without
            expecting monetary compensation.
          </p>
          <p className="text-orange-500 py-10 text-center text-3xl uppercase">
            Volunteers
          </p>
          <div className="">
            {volunteerData?.data.map((volunteer: any, index:number) => (
              <div key={volunteer._id}>
                <div className="flex flex-col md:flex-row gap-5">
                    <p className="flex-1">{index+1}.</p>
                    <p className="flex-1">{volunteer.name}</p>
                    <p className="flex-1">{volunteer.email}</p>
                    <p className="flex-1">{volunteer.contact}</p>
                    <p className="flex-1">{volunteer.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default AboutUs;