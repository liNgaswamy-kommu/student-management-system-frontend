import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/studentService';
import { Link } from 'react-router-dom';

export default function StudentList() {
    const [students, setStudents] = useState([]);

    const fetchStudents = () => {
        getStudents().then(res => setStudents(res.data));
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = (id) => {
        if(window.confirm("Are you sure to delete this student?")) {
            deleteStudent(id).then(() => fetchStudents());
        }
    };

    return (
        <div className="container mt-4">
            <h2>Student List</h2>
            <Link to="/add" className="btn btn-success mb-2">Add Student</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.dob}</td>
                            <td>
                                <Link to={`/edit/${student.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                                <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
