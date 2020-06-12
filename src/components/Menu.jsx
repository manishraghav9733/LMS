import React, { useState, useEffect } from "react";

import { Layout, Menu, Breadcrumb, Avatar, Badge } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MenuIndex = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const MenuItems = [
    {
      key: "sub2",
      icon: "question-circle",
      label: "Dashboard",
      menuList: [
        {
          key: "/dashboard",
          // onClick: () => history.push("/questions"),
          label: "List",
        },
      ],
    },
    {
      key: "all-leads",
      icon: "question-circle",
      label: "All Leads",
      menuList: [
        {
          key: "/all-leads",
          // onClick: () => history.push("/questions"),
          label: "List",
        },
      ],
    },
    {
      key: "new-leads",
      icon: "question-circle",
      label: "New Leads",
      menuList: [
        {
          key: "/new-leads",
          // onClick: () => history.push("/questions"),
          label: "List",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Menu</h1>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Home </Menu.Item>
            <Menu.Item key="2">Leads</Menu.Item>
            <Menu.Item key="3">New Leads</Menu.Item>
            <Menu.Item key="4">Status</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <div style={{ padding: "15px", textAlign: "center" }}>
                <Avatar size={64} icon={<UserOutlined />} />
                <div style={{ marginTop: "30px" }}>
                  <Badge
                    color="#87d068"
                    text={<span style={{ color: "#fff" }}>Super Admin</span>}
                  />
                </div>
              </div>
              {MenuItems.map((item, i) => (
                <SubMenu
                  key={item.key}
                  icon={<UserOutlined />}
                  title={item.label}
                >
                  {item.menuList.map((subItem, subI) => (
                    <Menu.Item key={subItem.key}>{subItem.label}</Menu.Item>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.Content}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default MenuIndex;;