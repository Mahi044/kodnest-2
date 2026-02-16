import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <MainLayout>
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h1 style={{ fontSize: '3rem', color: '#8B0000', marginBottom: '1rem' }}>404</h1>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Page Not Found</h2>
                <p style={{ color: '#666', marginBottom: '2rem' }}>
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/dashboard"
                    style={{
                        display: 'inline-block',
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#8B0000',
                        color: 'white',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 'bold'
                    }}
                >
                    Return to Dashboard
                </Link>
            </div>
        </MainLayout>
    );
};

export default NotFound;
