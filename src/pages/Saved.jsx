import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import JobCard from '../components/JobCard';
import JobModal from '../components/JobModal';
import { jobs } from '../data/jobs';
import { Bookmark } from 'lucide-react';

const Saved = () => {
    const [savedJobIds, setSavedJobIds] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('savedJobs');
        if (saved) {
            setSavedJobIds(JSON.parse(saved));
        }
    }, []);

    const handleSave = (id) => {
        const newSaved = savedJobIds.filter(jobId => jobId !== id);
        setSavedJobIds(newSaved);
        localStorage.setItem('savedJobs', JSON.stringify(newSaved));
    };

    const handleView = (job) => {
        setSelectedJob(job);
    };

    const savedJobsList = jobs.filter(job => savedJobIds.includes(job.id));

    return (
        <MainLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Saved Jobs</h1>

                {savedJobsList.length > 0 ? (
                    <div>
                        {savedJobsList.map(job => (
                            <JobCard
                                key={job.id}
                                job={job}
                                onSave={handleSave}
                                onView={handleView}
                                isSaved={true}
                            />
                        ))}
                    </div>
                ) : (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '50vh',
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
                            <Bookmark size={48} color="#999" strokeWidth={1.5} />
                        </div>
                        <h2 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>No Saved Jobs</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                            Jobs you save from the dashboard will appear here for quick access.
                        </p>
                    </div>
                )}
            </div>

            {selectedJob && (
                <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}
        </MainLayout>
    );
};

export default Saved;
