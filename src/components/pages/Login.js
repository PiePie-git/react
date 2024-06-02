import React from 'react';
// import { Form, Input, Button } from 'element-react';

function Login() {
    const handleSubmit = (values) => {
        console.log('Login:', values);
    };

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item label="Username" name="username">
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Login;
