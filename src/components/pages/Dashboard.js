import React, { useEffect, useState } from 'react';
// import { Card } from 'element-react';

function Dashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/dashboard.json')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <Card title="Dashboard">
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </Card>
    );
}

export default Dashboard;
