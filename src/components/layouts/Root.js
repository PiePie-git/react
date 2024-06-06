import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    DashboardOutlined
} from '@ant-design/icons';

const { Sider, Content, Footer } = Layout;

const items = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'Home',
    },
    {
        key: '2',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
    }
];

const Root = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <div className="logo" />
                <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']} items={items}></Menu>
            </Sider>
            <Layout style={{ minHeight: '100vh' }}>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>這是footer</Footer>
            </Layout>
        </Layout>
  );
};

export default Root;
