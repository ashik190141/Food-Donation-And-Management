// import React from 'react';

import { useAppSelector } from "@/Page/Redux/Features/hooks";
// import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCurrentToken } from '../../Page/Redux/Features/auth/authSlice';

const ProtectedRoute = ({ children }: any) => {
    const location = useLocation();
    const token = useAppSelector(useCurrentToken);
    if (!token) {
      return (
        <Navigate
          to="/login"
          state={{ from: location }}
          replace={true}
        ></Navigate>
      );
    }
    return children;
};

export default ProtectedRoute;