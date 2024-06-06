import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const AuthLayout = ({ children }) => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Content style={{ padding: '50px', maxWidth: '400px', margin: '0 auto' }}>
                {children}
            </Content>
        </Layout>
    );
};

export default AuthLayout;
