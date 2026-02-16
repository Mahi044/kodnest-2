import React, { useState, useEffect, useMemo } from 'react';
import MainLayout from '../layouts/MainLayout';
import JobCard from '../components/JobCard';
import JobModal from '../components/JobModal';
import FilterBar from '../components/FilterBar';
import { jobs } from '../data/jobs';

const Dashboard = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [savedJobs, setSavedJobs] = useState([]);
    const [filters, setFilters] = useState({
        keyword: '',
        location: '',
        mode: '',
        experience: '',
        source: '',
        sort: 'latest'
    });

    // Load saved jobs from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('savedJobs');
        if (saved) {
            setSavedJobs(JSON.parse(saved));
        }
    }, []);

    // Save to localStorage whenever savedJobs changes
    useEffect(() => {
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    }, [savedJobs]);

    const handleSave = (id) => {
        setSavedJobs(prev => {
            if (prev.includes(id)) {
                return prev.filter(jobId => jobId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleView = (job) => {
        setSelectedJob(job);
    };

    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const matchKeyword = job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
                job.company.toLowerCase().includes(filters.keyword.toLowerCase());
            const matchLocation = filters.location ? job.location === filters.location : true;
            const matchMode = filters.mode ? job.mode === filters.mode : true;
            const matchExp = filters.experience ? job.experience === filters.experience : true;
            const matchSource = filters.source ? job.source === filters.source : true;

            return matchKeyword && matchLocation && matchMode && matchExp && matchSource;
        }).sort((a, b) => {
            if (filters.sort === 'latest') {
                return a.postedDaysAgo - b.postedDaysAgo;
            } else {
                return b.postedDaysAgo - a.postedDaysAgo;
            }
        });
    }, [filters]);

    return (
        <MainLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Dashboard</h1>

                <FilterBar filters={filters} setFilters={setFilters} />

                <div style={{ marginBottom: '1rem', color: '#666' }}>
                    Showing {filteredJobs.length} jobs
                </div>

                {filteredJobs.length > 0 ? (
                    <div>
                        {filteredJobs.map(job => (
                            <JobCard
                                key={job.id}
                                job={job}
                                onSave={handleSave}
                                onView={handleView}
                                isSaved={savedJobs.includes(job.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#666' }}>
                        No jobs found matching your criteria.
                    </div>
                )}

            </div>

            {selectedJob && (
                <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}
        </MainLayout>
    );
};

export default Dashboard;
