import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root, AuthLayout, Dashboard, Login, Logout } from './components/index';
import { fetchDashboardData, redirectIfUser, logoutUser } from './api/fetchDashboardData';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
                loader: ({ request }) => fetchDashboardData({ signal: request.signal }),
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: 'login',
                        element: <Login />,
                        loader: redirectIfUser,
                    },
                    {
                        path: 'logout',
                        action: logoutUser,
                    },
                ],
            },
        ],
    },
]);

export default router;
