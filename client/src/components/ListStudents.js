import React, {Fragment, useState, useEffect } from "react";
import EditStudent from "./EditStudent";

const ListStudents = () => {

    const [students, setStudents] = useState([]);

    // Delete student function will call server function delete student by ID

    async function deleteStudent(id) {
        try {
            const res = await fetch(`http://localhost:5000/students/${id}`, {method: "DELETE"});
            setStudents(students.filter(student => student.ID !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    async function getStudents() {
        const res = await fetch("http://localhost:5000/students");

        const studArray = await res.json();

        console.log(studArray);
        setStudents(studArray);
    }

    useEffect(() => {
        getStudents();
    }, []);
    
    return (
        <Fragment>
         {" "}
            <table class="table mt-5">
                <thread>
                    <tr class="d-flex">
                        <th class="col-2">ID(5)</th>
                        <th class="col-3">Name(20)</th>
                        <th class="col-3">dept_name(20)</th>
                        <th class="col-2">tot_cred(3)</th>
                        <th class="col-1">Edit</th>
                        <th class="col-1">Delete</th>
                    </tr>
                </thread>
                <tbody>
                    {students.map(student => (
                        <tr key={student.ID} class="d-flex">
                            <td class="col-sm-2">{student.ID}</td>
                            <td class="col-sm-3">{student.name}</td>
                            <td class="col-sm-3">{student.dept_name}</td>
                            <td class="col-sm-2">{student.tot_cred}</td>
                            <td class="col-sm-1"><EditStudent student={student}/></td>
                            <td class="col-sm-1"><button className="btn btn-danger" onClick={() => deleteStudent(student.ID)}>Delete</button></td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */ }
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListStudents;