import React from 'react';
import { Menu, Grid } from 'antd';
import './styles.css';

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"} theme="dark">
      <Menu.Item key="mail">
        <a href="/#">Ingresar</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/#">Registrarse</a>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;