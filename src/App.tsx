import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import AntdRouterMenu, {
  MenuItem,
  MenuItemGroup,
} from './components/antd-router-menu/Antd-router-menu';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const { Content, Footer, Sider } = Layout;

export default (props: RouteConfigComponentProps) => {
  const { route } = props;

  return (
    <Layout>
      <Sider
        theme='light'
        style={{
          width: 300,
          height: '100vh',
        }}>
        <AntdRouterMenu
          menuData={[
            new MenuItemGroup('Components', [
              {
                url: '/componentsWelcome',
                name: '预览',
              },
            ]),
            new MenuItemGroup('Hooks', [
              {
                url: '/hooksWelcome',
                name: '预览',
              },
            ]),
            new MenuItem('/other', '其他'),
          ]}
        />
      </Sider>
      <div
        style={{
          marginLeft: '300px',
        }}>
        <Content>{renderRoutes(route?.routes)}</Content>
        <Footer>code@Eric design@Luna</Footer>
      </div>
    </Layout>
  );
};
