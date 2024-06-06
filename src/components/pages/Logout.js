import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout logic here
        navigate('/login');
    }, [navigate]);

    return null;
};

export default Logout;
