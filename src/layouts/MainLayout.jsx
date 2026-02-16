import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem' }}>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
