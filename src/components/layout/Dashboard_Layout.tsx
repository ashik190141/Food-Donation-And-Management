// import React from 'react';
import Sidebar from './Sidebar';
import ProtectedRoute from './ProtectedRoute';

const Dashboard_Layout = () => {
    return (
      <div>
        <ProtectedRoute>
          <Sidebar></Sidebar>
        </ProtectedRoute>
      </div>
    );
};

export default Dashboard_Layout;