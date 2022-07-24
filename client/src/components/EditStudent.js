import React, {Fragment, useState} from "react";

const EditStudent = ({student}) => {

    const [ID, setID] = useState(student.ID);
    const [name, setName] = useState(student.name);
    const [dept_name, setdept_name] = useState(student.dept_name);
    const [tot_cred, settot_cred] = useState(student.tot_cred);
    const oldID = student.ID;

     // editText

     const editText = async (ID, name, dept_name, tot_cred) => {
        try {

            const body = {ID, name, dept_name, tot_cred};

            const res = await fetch(`http://localhost:5000/students/${oldID}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            });

            console.log(res);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    // Boostrap 4 Modal used for Edit popup 
    return <Fragment>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${student.ID}`}>
      Edit
    </button>
  {/* id = "id21"*/}
    <div class="modal" id={`id${student.ID}`}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit Student</h4>
            {/* on click set student data back to what it was */}
            <button type="button" class="close" data-dismiss="modal" onClick={() => [setID(student.ID), setName(student.name), setdept_name(student.dept_name), settot_cred(student.tot_cred)]}>&times;</button>
          </div>
    
          <div class="modal-body">
            <input type="text" className="form-control" value={ID} onChange={e => setID(e.target.value)}/>
            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" className="form-control" value={dept_name} onChange={e => setdept_name(e.target.value)}/>
            <input type="text" className="form-control" value={tot_cred} onChange={e => settot_cred(e.target.value)}/>
          </div>
    
          <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={() => editText(ID, name, dept_name, tot_cred)}>Submit</button>
          {/* on EXIT click set student data back to what it was */}
            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => [setID(student.ID), setName(student.name), setdept_name(student.dept_name), settot_cred(student.tot_cred)]}>Exit</button>
          </div>
    
        </div>
      </div>
    </div></Fragment>;
};

export default EditStudent;