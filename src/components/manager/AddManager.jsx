import React, { useState } from "react";
import { Input, Button, Form, Select, message } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { addUser } from "../../actions";
import history from "../../history";

const AddManager = (props) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields(async (err, formValues) => {
      if (!err) {
        console.log(formValues);
        if (formValues.password.length < 6) {
          message.warning("password length cannot be less than 6 ");
          return;
        }
        //  message.success("im going");

        try {
          const response = await addUser(formValues);
          if (response.status === 201) {
            message.success("User Added successfully");
            history.push("/manager/list");
          }
        } catch (error) {
          if (error) {
            if (error.response.data.data) {
              message.warning(error.response.data.data[0].msg);
            } else {
              message.warning(error.response.data.message);
            }
          }
          // ;

          //  console.log(error);
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <div className="site-input-group-wrapper">
      <h2 style={{ marginBottom: "40px" }}>Add Manager</h2>

      <Form
        {...layout}
        // onSubmit={onSubmit}
      >
        <Form.Item label="UserName">
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "UserName cannot be blank!",
              },
            ],
          })(
            <Input
              allowClear
              prefix={<UserOutlined />}
              placeholder="User Name"
              type="text"
            />
          )}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "Email Address cannot be blank!",
              },
            ],
          })(
            <Input
              allowClear
              prefix={<UserOutlined />}
              placeholder="User Email"
              type="email"
            />
          )}
        </Form.Item>
        <Form.Item label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Password cannot be empty!",
              },
            ],
          })(
            <Input
              allowClear
              prefix={<LockOutlined />}
              placeholder="Password"
              type="password"
            />
          )}
        </Form.Item>
        <Form.Item label="User Type">
          {getFieldDecorator("userType", {
            rules: [
              {
                required: true,
                message: "Select User Type!",
              },
            ],
          })(
            <Select placeholder="Select User Type">
              <Select.Option value="super_admin">Super Admin</Select.Option>
              <Select.Option value="admin">Admin</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button onClick={onSubmit} type="primary">
            Add Manager
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Form.create()(AddManager);
