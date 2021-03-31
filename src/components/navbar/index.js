/** @format */

import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import logo from "../../images/logo.png";
import { Drawer, Button, Layout } from "antd";
import "./styles.css";

const { Header } = Layout;

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Layout>
        <Header
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
          className="menuBar"
        >
          <a href="/#" className="logo">
            <img src={logo} alt="img" />
          </a>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
              <RightMenu />
            </div>
            <Button
              className="barsMenu"
              type="primary"
              onClick={this.showDrawer}
            >
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
              <RightMenu />
            </Drawer>
          </div>
        </Header>
      </Layout>
    );
  }
}

export default Navbar;
