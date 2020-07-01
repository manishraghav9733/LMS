import React, { useState } from "react";
import {
  Input,
  Col,
  Button,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const managerIndex = () => {
  return (
    <div className="site-input-group-wrapper">
      <h2 style={{ marginBottom: "40px" }}>Add Manager</h2>
      <Input.Group size="large">
        <Row gutter={24}>
          <Col span={12}>
            <Input placeholder="First Name" />
          </Col>
          <Col span={12}>
            <Input placeholder="Last Name" />
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: "40px" }}>
          <Col span={12}>
            <Input placeholder="Mobile Number" />
          </Col>
          <Col span={12}>
            <Input placeholder="Email Address" />
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: "40px" }}>
          <Col span={12}>
            <Input.Password
              placeholder="input password"
              // iconrender={(visible) =>visible ? <EyeTwoTone /> : <EyeInvisibleOutlined /> }
            />
          </Col>
          <Col span={12}>
            <Input.Password
              placeholder="Confirm password"
              //  iconrender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined /> }
            />
          </Col>
        </Row>
      </Input.Group>
      <div style={{ textAlign: "center" }}>
        <Button
          type="primary"
          size="large"
          style={{ width: "30%", marginTop: "40px" }}
          onClick={() => alert("error")}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default managerIndex;
