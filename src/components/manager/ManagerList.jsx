import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import { getManagerList, getManagerDelete } from "../../actions";
import { useSelector } from "react-redux";
import NotFound from "../NotFound";

const ManagerList = () => {
  const user = useSelector((state) => state.userAuth);
  // console.log(user);
  const [listData, setListData] = useState([]);
  const [loadAgain, setLoadAgain] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callDataApi = async () => {
      if (user.userType === "super_admin") {
        setLoading(true);
        try {
          const response = await getManagerList();
          setListData(response.data.data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      }
    };
    callDataApi();
  }, [loadAgain]);

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
    {
      title: "Actions",
      key: "action",
      render: (record) => (
        <span>
          <span>
            <Popconfirm
              title="Are you sure you want to delete ?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => onDelete(record)}
            >
              <Button
                type="link"
                style={{
                  color: "red",
                  padding: 0,
                  marginRight: "10px",
                }}
              >
                Delete
              </Button>
            </Popconfirm>
          </span>
        </span>
      ),
    },
  ];

  const onDelete = async (data) => {
    let id = data._id;

    if (data._id === user.userId) {
      message.warning("Invalid Operation");
      return;
    }

    try {
      const response = await getManagerDelete(id);
      setLoadAgain(!loadAgain);
      message.success("user deleted successfully");
    } catch (error) {}
  };

  return (
    <div>
      {user.userType === "super_admin" ? (
        <div>
          <h3 style={{ marginBottom: "20px" }}>Manager Details</h3>
          <Table
            dataSource={listData}
            loading={loading}
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
