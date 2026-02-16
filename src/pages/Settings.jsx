import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Settings = () => {
    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        marginBottom: '1.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontFamily: 'var(--font-sans)',
        fontSize: '1rem',
        backgroundColor: 'white'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold',
        color: 'var(--text-primary)'
    };

    return (
        <MainLayout>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem' }}>Settings</h1>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label style={labelStyle}>Role Keywords</label>
                        <input
                            type="text"
                            placeholder="e.g. Senior Frontend Engineer, Product Manager"
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Preferred Locations</label>
                        <input
                            type="text"
                            placeholder="e.g. San Francisco, London, Remote"
                            style={inputStyle}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Mode</label>
                        <select style={inputStyle}>
                            <option value="remote">Remote</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="onsite">Onsite</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>Experience Level</label>
                        <select style={inputStyle}>
                            <option value="entry">Entry Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="senior">Senior</option>
                            <option value="lead">Lead / Staff</option>
                            <option value="executive">Executive</option>
                        </select>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default Settings;
