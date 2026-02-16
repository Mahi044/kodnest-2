import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return (
        <MainLayout>
            <div className="landing-container">
                <h1 className="landing-headline">
                    Stop Missing The Right Jobs.
                </h1>
                <p className="landing-subtext">
                    Precision-matched job discovery delivered daily at 9AM.
                </p>
                <Link
                    to="/settings"
                    className="landing-cta"
                >
                    Start Tracking
                </Link>
            </div>
        </MainLayout>
    );
};

export default Landing;
