import React from 'react';
import { Menu, Grid } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"}  defaultSelectedKeys={['2']} theme="dark">
      <Menu.Item key="mail">
      <Link to="/post">Inicio</Link>
      </Menu.Item>
      <SubMenu key="sub1" title={<span>Configuración</span>}>
        <MenuItemGroup title="Modificaciones">
          <Menu.Item key="setting:1"><Link to="/movies">Peliculas</Link></Menu.Item>
          <Menu.Item key="setting:2"><Link to="/#">Video Juegos</Link></Menu.Item>
          <Menu.Item key="setting:3"><Link to="/#">Libros</Link></Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="/#">Contact Us</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;