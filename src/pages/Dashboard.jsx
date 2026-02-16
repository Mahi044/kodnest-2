import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Dashboard = () => {
    return (
        <MainLayout>
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Dashboard</h1>
                <p style={{ fontSize: '1.1rem', color: '#666' }}>
                    No jobs yet. In the next step, you will load a realistic dataset.
                </p>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
