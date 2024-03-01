// import React from 'react';

import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPHInput = {
  type: string;
  name: string;
  placeHolder?: string;
};

const PHInput = ({ type, name, placeHolder }: TPHInput) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            id={name}
            placeholder={placeHolder}
            className="p-2 border-b-2 border-black bg-transparent w-full"
          />
        )}
      />
    </div>
  );
};

export default PHInput;
