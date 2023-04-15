import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Search from '../../component/search/search.tsx';
import './dashboard.css';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="container">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Search />
        </Header>
        <Content style={{ margin: '24px 16px 0', height: '100vh' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, height: '80vh' }}>content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Jovis ©2023 Created with Love </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;