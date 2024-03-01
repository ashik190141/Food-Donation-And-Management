// import React from 'react';

import { useGetLeaderBoardDataQuery } from "../Redux/Features/supply/supplyApi";
import { Table } from "antd";

const LeaderBoard = () => {
    const { data: supplyData } = useGetLeaderBoardDataQuery(undefined);
    
    const tableData = supplyData?.data?.map(
      ({ _id, name, category, quantity }:any) => ({
        key: _id,
        name,
        category,
        quantity,
      })
    );
    

    const columns: any = [
      {
        title: "Name",
        key: "name",
        dataIndex: "name",
      },

      {
        title: "Category",
        key: "category",
        dataIndex: "category",
      },
      {
        title: "Quantity",
        key: "quantity",
        dataIndex: "quantity",
      }
    ];

    return (
      <div className="py-20 max-w-[1220px] mx-auto">
        <>
          <div className="py-10">
            <Table
              columns={columns}
              dataSource={tableData}
              pagination={false}
            />
          </div>
          {/* <div className="py-10">
            <Pagination
              current={page}
              onChange={(value) => setPage(value)}
              pageSize={6}
              total={supplyData?.data?.length}
            />
          </div> */}
        </>
      </div>
    );
};

export default LeaderBoard;