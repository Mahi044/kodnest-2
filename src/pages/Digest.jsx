import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Mail } from 'lucide-react';

const Digest = () => {
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
                    <Mail size={48} color="#999" strokeWidth={1.5} />
                </div>
                <h1 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Daily Digest</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                    Your personalized job feed will be generated here daily at 9AM.
                </p>
            </div>
        </MainLayout>
    );
};

export default Digest;
