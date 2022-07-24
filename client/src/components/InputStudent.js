import React, {Fragment, useState} from "react";

const InputStudent = () => {

    const [ID, setID] = useState("");
    const [name, setName] = useState("");
    const [dept_name, setdept_name] = useState("");
    const [tot_cred, settot_cred] = useState("");


    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {ID, name, dept_name, tot_cred};
            const response = await fetch("http://localhost:5000/students", 
            {method: "POST", headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify(body)});

            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center my-5"> Student Manager</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    placeholder="ID" 
                    className="form-control" 
                    value={ID}
                    onChange={e => setID(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="form-control" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                 <input 
                    type="text" 
                    placeholder="dept_name" 
                    className="form-control" 
                    value={dept_name}
                    onChange={e => setdept_name(e.target.value)}
                />
                 <input 
                    type="text" 
                    placeholder="tot_cred" 
                    className="form-control" 
                    value={tot_cred}
                    onChange={e => settot_cred(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InputStudent;