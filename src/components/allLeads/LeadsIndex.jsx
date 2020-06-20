import React, { useState } from "react";
import { Table, Icon, Button, Input } from "antd";
const { Search } = Input;

const LeadsIndex = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
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
      dataIndex: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "5",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "6",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "7",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "8",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "9",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "10",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "11",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
    {
      key: "12",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",

      email: "abc@gmail.com",
      status: "Not Interested",
      type: "digital Marketing",
      phone: "123456789",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div>
      <div style={{ textAlign: "right", marginBottom: "40px" }}>
        <Button
          type="primary"
          //  onClick={() => createNew()}
        >
          <Icon type="plus-circle" /> Add New Lead
        </Button>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Search
          placeholder="Leads search "
          // onChange={onSearch}
          style={{ width: 300 }}
        />
      </div>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default LeadsIndex;
