import React, { useEffect, useState } from 'react';
// import { fetchDashboardData } from '../../api/fetchDashboardData';
import { Spin, List } from 'antd';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const loadData = async () => {
    //         const result = await fetchDashboardData();
    //         setData(result);
    //         setLoading(false);
    //     };

    //     loadData();
    // }, []);

    if (loading) {
        return <Spin />;
    }

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
    );
};

export default Dashboard;
