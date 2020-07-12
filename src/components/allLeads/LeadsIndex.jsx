import React, { useState, useEffect } from "react";
import {
  Table,
  Icon,
  Button,
  Input,
  message,
  Pagination,
  Popconfirm,
} from "antd";
import { getLeadList, bulkUploadLeads, getLeadDelete } from "../../actions";
import moment from "moment";

const { Search } = Input;

const LeadsIndex = () => {
  const [leadData, setLeadData] = useState([]);
  const [loadAgain, setLoadAgain] = useState(false);
  const [loading, setLoading] = useState(false);
  const [offSet, setOffSet] = useState(0);
  const [count, setCount] = useState(null);
  const limit = 10;

  useEffect(() => {
    const callDataApi = async () => {
      setLoading(true);
      try {
        const response = await getLeadList(limit, offSet);
        // console.log(response.data.data);
        setLeadData(response.data.data);
        setCount(response.data.count);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    callDataApi();
    return () => {};
  }, [loadAgain]);

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
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "date",
      key: "date",
      dataIndex: "date",
      render: (date) => {
        return moment(date).format("YYYY-MM-DD");
      },
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
    // console.log(data);
    let id = data._id;
    try {
      const response = await getLeadDelete(id);
      setLoadAgain(!loadAgain);
      message.success("lead deleted successfully");
    } catch (error) {}
  };

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

  const callSubmitBulkUploadApi = async (csv_file) => {
    try {
      const response = await bulkUploadLeads(csv_file);
      //  setloader(true);
      //  setloadAgain(true);
      if (response.status === 200) {
        message.success("File uploaded successfully");
        setLoadAgain(!loadAgain);
      }

      // setloader(false);
      // setloadAgain(false);
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  const filechangeHandler = (e) => {
    callSubmitBulkUploadApi(e.target.files[0]);
  };

  const clearFileInput = (event) => {
    event.target.value = null;
  };

  const handlePageChange = async (pageNumber) => {
    const temp_offset = pageNumber * limit - limit;
    setOffSet(temp_offset);
    setLoading(true);
    try {
      const response = await getLeadList(limit, temp_offset);
      // console.log(response.data.data);
      setLeadData(response.data.data);
      setCount(response.data.count);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "right", marginBottom: "40px" }}>
        <span>
          <label>
            <Input
              type="file"
              style={{ display: "none" }}
              onChange={filechangeHandler}
              multiple
              id="bulkUploadBtn"
              onClick={clearFileInput}
              accept=".csv"
            />
            <span
              style={{
                background: "#1890ff",
                color: "#fff",
                fontWeight: 400,
                cursor: "pointer",
                fontSize: "14px",
                padding: "6.5px 15px",
                borderRadius: "4px",
                lineHeight: "1.499",
              }}
            >
              <Icon type="upload" style={{ paddingRight: "5px" }} />
              Bulk-Upload
            </span>
          </label>
        </span>
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
        dataSource={leadData}
        pagination={false}
        rowKey={(row) => row._id}
        loading={loading}
      />
      <div style={{ marginTop: "30px", textAlign: "right" }}>
        <Pagination
          current={(offSet + limit) / limit}
          total={count}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default LeadsIndex;
