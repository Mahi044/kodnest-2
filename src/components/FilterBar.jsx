import React from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

const FilterBar = ({ filters, setFilters }) => {

    const handleChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const selectStyle = {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ddd',
        backgroundColor: 'white',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9rem',
        color: '#333',
        minWidth: '120px'
    };

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            marginBottom: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center'
        }}>
            <div style={{ flex: '2 1 200px', position: 'relative' }}>
                <Search size={18} color="#999" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                    type="text"
                    placeholder="Search roles or companies..."
                    value={filters.keyword}
                    onChange={(e) => handleChange('keyword', e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.5rem 0.5rem 0.5rem 2.25rem',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontSize: '0.9rem'
                    }}
                />
            </div>

            <select
                value={filters.location}
                onChange={(e) => handleChange('location', e.target.value)}
                style={selectStyle}
            >
                <option value="">All Locations</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Chennai">Chennai</option>
                <option value="Noida">Noida</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
            </select>

            <select
                value={filters.mode}
                onChange={(e) => handleChange('mode', e.target.value)}
                style={selectStyle}
            >
                <option value="">Any Mode</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
            </select>

            <select
                value={filters.experience}
                onChange={(e) => handleChange('experience', e.target.value)}
                style={selectStyle}
            >
                <option value="">Any Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1">0-1 Years</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
            </select>

            <select
                value={filters.source}
                onChange={(e) => handleChange('source', e.target.value)}
                style={selectStyle}
            >
                <option value="">All Sources</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Naukri">Naukri</option>
                <option value="Indeed">Indeed</option>
                <option value="Company Site">Company Site</option>
            </select>

            <select
                value={filters.sort}
                onChange={(e) => handleChange('sort', e.target.value)}
                style={selectStyle}
            >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
};

export default FilterBar;
