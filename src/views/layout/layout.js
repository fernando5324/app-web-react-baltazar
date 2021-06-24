/** @format */

import React ,{Fragment} from "react";
import "antd/dist/antd.css";
import "./styles.css";
import SiderContent from "../../components/sider/index";
import HeaderContent from "../../components/header/index";
import { Layout } from "antd";

const { Content } = Layout;

export default function layoutComponent(component) {
  return (
    <Layout>
      <React.StrictMode>
        <SiderContent
          contenido={
            <Fragment>
            <HeaderContent/>
            <Content
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, margin: "0 16px" }}
            >
              {component}
            </Content>
            </Fragment>
          }
        />
      </React.StrictMode>
    </Layout>
  );
}
