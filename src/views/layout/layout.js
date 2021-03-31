import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import  SiderContent  from "../../components/sider/index";
import  HeaderContent from "../../components/header/index";
import { Layout } from 'antd';

const { Content } = Layout;

export default function layoutComponent(component) {
  
  return (
    <Layout>
      <SiderContent />
      <React.StrictMode>
        <Layout className="site-layout">
          <HeaderContent />
          <Content className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
            {component}
          </Content>
        </Layout>
      </React.StrictMode>
    </Layout>
  );
}
