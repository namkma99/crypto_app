import React from "react";
import { Button, Typography, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crytoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} key="1">
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key="2">
          <Link to={"/Cryptocurrencies"}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key="3">
          <Link to={"/Exchanges"}>Exchange</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key="4">
          <Link to={"/News"}>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
