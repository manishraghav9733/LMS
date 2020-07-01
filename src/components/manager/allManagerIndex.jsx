import React, { useState } from "react";
import { Table, Icon, Button, Input } from "antd";
const { Search } = Input;

const allManagerIndex = () => {
  const dataSource = [
    {
      key: "1",
      name: "abc",
      Mobile: 6734753475,
      Email: "abc@gmail.com",
      User: "abc-xyz",
      Usert: "marketing",
    },
    {
      key: "2",
      name: "abcd",
      Mobile: 6734753475,
      Email: "abc@gmail.com",
      User: "abc-xyz",
      Usert: "marketing",
    },
    {
      key: "3",
      name: "abcd",
      Mobile: 6734753475,
      Email: "abc@gmail.com",
      User: "abc-xyz",
      Usert: "marketing",
    },
    {
      key: "4",
      name: "abcd",
      Mobile: 6734753475,
      Email: "abc@gmail.com",
      User: "abc-xyz",
      Usert: "marketing",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile Number",
      dataIndex: "Mobile",
      key: "Mobile",
    },
    {
      title: "Email Address",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "User Name",
      dataIndex: "User",
      key: "User",
    },
    {
      title: "User Type",
      dataIndex: "Usert",
      key: "Usert",
    },
  ];
  return (
    <div>
      <h3 style={{ marginBottom: "20px" }}>Manager Details</h3>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 6,
        }}
      />
      ;
    </div>
  );
};

export default allManagerIndex;
