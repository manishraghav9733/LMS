import React, { useState, useEffect } from "react";
import { Table } from "antd";
import moment from "moment";

const StatusDetalis = (props) => {
  const [leadData, setLeadData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLeadData(props.data.count);
    setSelectedTitle(props.data.name);

    setLoading(false);

    return () => {};
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Lead Type",
      dataIndex: "leadType",
    },
    {
      title: "User Assigned",
      dataIndex: "userAssigned",
    },
    {
      title: "date",
      key: "date",
      dataIndex: "date",
      render: (date) => {
        return moment(date).format("YYYY-MM-DD");
      },
    },
  ];

  return (
    <div>
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 900,
          background: "#52C41A",
          borderRadius: "5px",
          marginBottom: "30px",
        }}
      >
        {selectedTitle}
      </div>
      <Table
        columns={columns}
        dataSource={leadData}
        pagination={true}
        rowKey={(row) => row._id}
        loading={loading}
      />
    </div>
  );
};

export default StatusDetalis;
