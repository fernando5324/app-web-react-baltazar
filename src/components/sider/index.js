import React, { Component,Fragment } from 'react'
import './styles.css';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

  const { Sider } = Layout;
  const { SubMenu } = Menu;
export default class index extends Component{
    
    state = {
        collapsed: false,
    };
    styles = {
        layoutMin: {
         
          paddingLeft:200,
        },
        layoutLarge: {
       
          paddingLeft:80,
        },
        menu: {
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }
      };  
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        const contenido = this.props.contenido;
        const { collapsed } = this.state;
        return (
          <Fragment>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={this.styles.menu}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub62" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
        className="site-layout"
        style={collapsed ? this.styles.layoutLarge :  this.styles.layoutMin}
      >
        {contenido}
      </Layout>
        </Fragment>
        )
    }
}
