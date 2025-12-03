import React, { useState } from 'react';
import { addStudent } from '../services/studentService';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(student).then(() => navigate('/students'));
    };

    return (
        <div className="container mt-4">
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" value={student.firstName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName" className="form-control" value={student.lastName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={student.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" value={student.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" name="dob" className="form-control" value={student.dob} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    );
}
