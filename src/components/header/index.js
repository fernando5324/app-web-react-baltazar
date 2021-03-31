/** @format */

import React, { Component } from "react";
import { Layout, Menu, Grid } from "antd";
import "./styles.css";
const { SubMenu } = Menu;
const { useBreakpoint } = Grid;
const { Header } = Layout;


const HeaderContent = () => {
  const { md } = useBreakpoint();
  return (
    <Header className="site-layout-background" className="menuBar" style={{ padding: 0 }}>
      <div className=" menuCon">
      <div className="leftMenu">
      <Menu
        mode={md ? "horizontal" : "inline"}
        theme="dark"
        defaultSelectedKeys={["2"]}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      </div>
      <div className="rightMenu">
        <Menu mode={md ? "horizontal" : "inline"} theme="dark">
          <Menu.Item key="mail">
            <a href="/#">Ingresar!</a>
          </Menu.Item>
          <Menu.Item key="app">
            <a href="/#">Registrarse</a>
          </Menu.Item>
        </Menu>
      </div>
      </div>
    </Header>
  );
};

export default HeaderContent;
