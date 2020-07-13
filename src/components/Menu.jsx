import React, { useState, useEffect } from "react";
import { Layout, Menu, Popconfirm, Avatar, Badge, Button, Icon } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PieChartOutlined,
  TeamOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import history from "../history";
import { useSelector, useDispatch, connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withCookies } from "react-cookie";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MenuIndex = (props) => {
  const { userType, userName } = props.user;

  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState("");
  const [globalMenuItems, setGlobalMenuItems] = useState([]);

  //  console.log("props.userAuth", props.user);

  const MenuItems = [
    {
      privillage_type: "admin",
      key: "sub2",
      icon: <PieChartOutlined />,
      label: "Dashboard",
      menuList: [
        {
          key: "/dashboard",
          onClick: () => history.push("/dashboard"),
          label: "List",
        },
      ],
    },
    {
      privillage_type: "admin",
      key: "all-leads",
      icon: <LineChartOutlined />,
      label: "All Leads",
      menuList: [
        {
          key: "/all-leads",
          onClick: () => history.push("/all-leads"),
          label: "List",
        },
      ],
    },
    {
      privillage_type: "super_admin",
      key: "/manager",
      icon: <TeamOutlined />,
      label: "Manager",

      menuList: [
        {
          key: "/manager/add-manager",
          onClick: () => history.push("/manager/add-manager"),
          label: "Add Manager",
        },
        {
          key: "/manager/list",
          onClick: () => history.push("/manager/list"),
          label: "All Manager",
        },
      ],
    },
  ];

  useEffect(() => {
    let tempList = [];
    if (userType === "super_admin") {
      tempList = MenuItems;
    } else {
      for (let i = 0; i < MenuItems.length; i++) {
        // console.log(MenuItems[i].privillage_type);
        if (MenuItems[i].privillage_type === userType) {
          tempList.push(MenuItems[i]);
        }
      }
    }
    // console.log("tempList", tempList);
    setGlobalMenuItems(tempList);
    return () => {};
  }, [userType]);

  const onTopMenuNavigation = (type) => {
    setSelectedMenuKey(type);
    switch (type) {
      case "dashboard":
        return history.push("/dashboard");
      case "all-leads":
        return history.push("/all-leads");
      case "new-leads":
        return history.push("/new-leads");
      default:
        return null;
    }
  };

  const onLogOutUser = () => {
    const { cookies } = props;
    cookies.remove("Authorization", { path: "/" });
    cookies.remove("isSignedIn", { path: "/" });
    cookies.remove("userId", { path: "/" });
    cookies.remove("userType", { path: "/" });
    cookies.remove("userName", { path: "/" });

    // dispatch(logoutUser());
    props.logoutUser();
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Layout>
        <Header
        // className="header"
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={selectedMenuKey}
          >
            <Menu.Item>
              <div style={{ marginTop: "10px", background: "#fff" }}>
                <img
                  src="https://www.ranoliaventures.com/images/logo.png"
                  alt="logo"
                  width="auto"
                  height="40px"
                />
              </div>
            </Menu.Item>
            {/**
            <Menu.Item
              onClick={() => onTopMenuNavigation("dashboard")}
              key="dashboard"
            >
              Home{" "}
            </Menu.Item>
            
            <Menu.Item
              onClick={() => onTopMenuNavigation("all-leads")}
              key="all-leads"
            >
              Leads
            </Menu.Item>
            <Menu.Item
              onClick={() => onTopMenuNavigation("new-leads")}
              key="new-leads"
            >
              New Leads
            </Menu.Item>
            <Menu.Item key="4">Status</Menu.Item>
             */}
            <Menu.Item style={{ float: "right", background: "none" }}>
              <Popconfirm
                title="Are you sure you want log out ?"
                okText="Yes"
                cancelText="No"
                onConfirm={onLogOutUser}
              >
                <Button
                  //  onClick={onLogOutUser}
                  style={{ marginTop: "20px" }}
                  type="danger"
                >
                  Log Out
                </Button>
              </Popconfirm>
            </Menu.Item>
          </Menu>
        </Header>

        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              //  position: "fixed",
              //  left: 0,
            }}
            width={200}
            className="site-layout-background"
            // collapsedWidth={80}
            //  collapsed={collapsed}
            //   onCollapse={onCollapse}
          >
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <div style={{ padding: "15px", textAlign: "center" }}>
                {/**
                <Avatar size={64} icon={<UserOutlined />} />
                 */}
                <div style={{ marginTop: "30px" }}>
                  <Badge
                    color="#87d068"
                    text={<span style={{ color: "#fff" }}>{userName}</span>}
                  />
                </div>
              </div>
              {globalMenuItems.map((item, i) => (
                <SubMenu
                  //  icon={<UserOutlined />}
                  //  collapsed={collapsed}
                  key={item.key}
                  title={
                    <span>
                      {item.icon} {item.label}
                    </span>
                  }
                >
                  {item.menuList.map((subItem, subI) => (
                    <Menu.Item onClick={subItem.onClick} key={subItem.key}>
                      {subItem.label}
                    </Menu.Item>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </Sider>
          <Layout
            style={{
              //padding: "0 24px 24px",
              overflowX: "auto",
            }}
          >
            {/**
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
             */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                maxHeight: 280,
                // overflowX: "auto",
              }}
            >
              <div
                style={{
                  margin: "10px 15px 30px 15px",
                }}
              >
                {props.children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

//export default MenuIndex;

const mapStateToProps = (state) => {
  return {
    user: state.userAuth,
  };
};

export default withCookies(connect(mapStateToProps, { logoutUser })(MenuIndex));
