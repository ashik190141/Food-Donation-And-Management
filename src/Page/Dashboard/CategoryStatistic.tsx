// import React from 'react';
import { PieChart, Pie } from "recharts";

import { useGetCategoryCountQuery } from "../Redux/Features/user/userApi";
import Loader from '../../components/layout/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

const CategoryStatistic = () => {
  const [show, setShow] = useState(true);
  const { data: categoryCount } = useGetCategoryCountQuery(undefined);

  useEffect(() => {
    if (categoryCount?.length > 0) {
      setShow(false);
    }
  }, [categoryCount]);

  return (
    <div>
      {show && (
        <div className="h-[30vh] flex items-center justify-center">
          <Loader show={show}></Loader>
        </div>
      )}
      <div>
        <h2 className="text-4xl text-center text-black font-bold mt-10">
          Category Statistics
        </h2>
      </div>
      <PieChart
        className="flex items-center justify-center mx-auto"
        width={400}
        height={400}
      >
        <Pie
          data={categoryCount}
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={categoryCount}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default CategoryStatistic;