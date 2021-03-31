/** @format */
import React, { Fragment } from "react";
import Navbar from "../components/navbar/index.js";
import Footer from "../components/footer/index";
import Sider from "../components/sider/index";

import { Layout } from "antd";

const { Content } = Layout;

export default function layout(component) {
  return (
    <Layout>
      <Sider />
      <React.StrictMode>
        <Layout className="site-layout">
          <Content className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
          >{component}</Content>
        </Layout>
        <Footer />
      </React.StrictMode>
    </Layout>
  );
}
