import React from 'react';
import { Bookmark, ExternalLink, Eye, MapPin, Building, Banknote } from 'lucide-react';

const JobCard = ({ job, onSave, onView, isSaved }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '1rem',
            transition: 'box-shadow 0.2s ease',
            position: 'relative'
        }}
            onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'}
            onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                        {job.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <Building size={14} />
                        <span style={{ fontWeight: 600 }}>{job.company}</span>
                    </div>
                </div>
                <button
                    onClick={() => onSave(job.id)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        color: isSaved ? 'var(--accent)' : '#ccc'
                    }}
                    title={isSaved ? "Unsave" : "Save Job"}
                >
                    <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
                </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.875rem', color: '#555' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={14} />
                    {job.location} ({job.mode})
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Banknote size={14} />
                    {job.salaryRange}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{
                    backgroundColor: '#f5f5f5',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    color: '#666'
                }}>
                    {job.experience} Exp
                </span>
                <span style={{
                    backgroundColor: '#f5f5f5',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    color: '#666'
                }}>
                    {job.source}
                </span>
                <span style={{
                    backgroundColor: '#fff0f0',
                    color: '#c00',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem'
                }}>
                    {job.postedDaysAgo === 0 ? 'Today' : `${job.postedDaysAgo}d ago`}
                </span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                <button
                    onClick={() => onView(job)}
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem',
                        backgroundColor: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)'
                    }}
                >
                    <Eye size={16} /> View
                </button>
                <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem',
                        backgroundColor: 'var(--text-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)'
                    }}
                >
                    Apply <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
};

export default JobCard;
