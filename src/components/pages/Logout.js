import React from 'react';
// import { Button } from 'element-react';

function Logout() {
    const handleLogout = () => {
        console.log('Logout');
    };

    return (
        <Button type="danger" onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default Logout;
