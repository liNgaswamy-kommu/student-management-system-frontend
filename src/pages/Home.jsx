import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container mt-4">
            <h2>Welcome to Student Management System</h2>
            <p>Use the navigation to manage students.</p>
            <Link to="/students" className="btn btn-primary">View Students</Link>
        </div>
    );
}
