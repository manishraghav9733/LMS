import React, { useState, useEffect } from "react";
import { Table, Icon, Button, Input } from "antd";
import { getManagerList } from "../../actions";
import { useSelector } from "react-redux";
import NotFound from "../NotFound";

const ManagerList = () => {
  const user = useSelector((state) => state.userAuth);
  // console.log(user);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const callDataApi = async () => {
      if (user.userType === "super_admin") {
        try {
          const response = await getManagerList();
          setListData(response.data.data);
        } catch (error) {}
      }
    };
    callDataApi();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "User Type",
      dataIndex: "userType",
      key: "userType",
    },
  ];
  return (
    <div>
      {user.userType === "super_admin" ? (
        <div>
          <h3 style={{ marginBottom: "20px" }}>Manager Details</h3>
          <Table
            dataSource={listData}
            columns={columns}
            pagination={{
              pageSize: 6,
            }}
            rowKey={(row) => row._id}
          />
        </div>
      ) : (
        <div>
          <NotFound subTitle="Access Denied" status="500" title="500" />
        </div>
      )}
    </div>
  );
};

export default ManagerList;
