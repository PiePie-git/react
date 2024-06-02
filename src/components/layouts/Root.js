import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'element-react';

const { Header, Content } = Layout;

function Root() {
    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/dashboard">Dashboard</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Outlet />
            </Content>
        </Layout>
    );
}

export default Root;
