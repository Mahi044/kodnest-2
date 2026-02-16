import React from 'react';
import { X, Briefcase, MapPin, Building, Globe, Clock, Banknote } from 'lucide-react';

const JobModal = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                width: '100%',
                maxWidth: '600px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                padding: '2rem'
            }} onClick={e => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                >
                    <X size={24} />
                </button>

                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{job.title}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                    <Building size={16} />
                    <span style={{ fontWeight: 600 }}>{job.company}</span>
                    <span>•</span>
                    <MapPin size={16} />
                    <span>{job.location} ({job.mode})</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Banknote size={16} color="var(--text-secondary)" />
                        <span>{job.salaryRange}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Briefcase size={16} color="var(--text-secondary)" />
                        <span>{job.experience} Exp</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock size={16} color="var(--text-secondary)" />
                        <span>Posted {job.postedDaysAgo} days ago</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Globe size={16} color="var(--text-secondary)" />
                        <span>{job.source}</span>
                    </div>
                </div>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>Description</h3>
                <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: '#444' }}>{job.description}</p>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>Skills</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {job.skills.map((skill, index) => (
                        <span key={index} style={{
                            backgroundColor: '#f0f0f0',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '16px',
                            fontSize: '0.875rem',
                            color: '#333'
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>

                <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'center',
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                        padding: '0.75rem',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'opacity 0.2s'
                    }}
                    onMouseOver={e => e.target.style.opacity = '0.9'}
                    onMouseOut={e => e.target.style.opacity = '1'}
                >
                    Apply Now
                </a>

            </div>
        </div>
    );
};

export default JobModal;
