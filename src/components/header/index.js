/** @format */

import React from "react";
import { Layout, Menu, Grid } from "antd";
import "./styles.css";
const { useBreakpoint } = Grid;
const { Header } = Layout;

const HeaderContent = () => {
  const { md } = useBreakpoint();
  return (
    <Header
      className="site-layout-background menu-content"
    >
      
        <Menu mode={md ? "horizontal" : "inline"} theme="dark">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      
    
        <Menu
          mode={md ? "horizontal" : "inline"}
          theme="dark"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="4">nav 4</Menu.Item>
          <Menu.Item key="5">nav 5</Menu.Item>
          <Menu.Item key="6">nav 6</Menu.Item>
        </Menu>
     
    </Header>
  );
};

export default HeaderContent;
