import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Award } from 'lucide-react';

const Proof = () => {
    return (
        <MainLayout>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                textAlign: 'center'
            }}>
                <div style={{
                    backgroundColor: '#f0f0f0',
                    padding: '1.5rem',
                    borderRadius: '50%',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Award size={48} color="#999" strokeWidth={1.5} />
                </div>
                <h1 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Your Achievements</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                    Track your application progress and success stories here.
                </p>
            </div>
        </MainLayout>
    );
};

export default Proof;
