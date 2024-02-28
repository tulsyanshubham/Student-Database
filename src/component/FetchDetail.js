import React, { useState } from 'react'
import Detailtuples from './Detailtuples';

export default function FetchDetail() {
    const backendURL = 'http://localhost:5000/fetchstudent';
    const [student, setStudent] = useState({ name: "", usn: "", dept: "" });
    const [load, setLoad] = useState(false);
    const [data, setData] = useState([]);

    const handleInput = (e) => {
        // console.log( e.target.value)
        let value = e.target.value;
        setStudent({ ...student, [e.target.name]: value })
        // console.log(student)
    }

    const SubmitEvent = async (e) => {
        setLoad(false);
        e.preventDefault();
        const usn = student.usn.toUpperCase();
        const response = await fetch(backendURL, {
            mode: 'cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...student, usn
            })
        });
        const result = await response.json();
        setData(result.resp)
        console.log(result.resp);
        setLoad(true);
    }

    const resetHandle = () => {
        setStudent({ name: "", usn: "", dept: "" });
    }

    return (
        <div className='mt-5 pt-5'>
            <form onSubmit={SubmitEvent}>
                <div className='d-flex justify-content-center gap-5' style={{ flexDirection: "row", width: "100%" }}>
                    <div style={{ width: "30%" }}>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control border-2" name="name" id="name"
                            aria-describedby="emailHelp" onChange={handleInput} style={{ background: "none", borderColor: "black" }} />
                    </div>
                    <div style={{ width: "20%" }}>
                        <label htmlFor="usn" className="form-label">USN</label>
                        <input type="text" className="form-control border-2" name="usn" id="usn"
                            aria-describedby="emailHelp" onChange={handleInput} style={{ background: "none", borderColor: "black" }} />
                    </div>
                    <div style={{ width: "10%" }}>
                        <label htmlFor="dept" className="form-label">Dept</label>
                        <select className="form-select border-2" id="dept" name='dept' onChange={handleInput} style={{ background: "none", borderColor: "black" }}>
                            <option selected value={""}>Choose...</option>
                            <option >CSE</option>
                            <option >ISE</option>
                            <option >CSD</option>
                            <option >AIML</option>
                            <option >ECE</option>
                            <option >EEE</option>
                        </select>
                    </div>
                    <div className='d-flex align-items-end' style={{ width: "5%", gap: "1rem" }}>
                        <button type="submit" className="btn btn-dark"><i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i></button>
                        <button type="reset" className="btn btn-dark" onClick={resetHandle}><i className="fa-solid fa-eraser" style={{ color: "#ffffff" }}></i></button>
                    </div>
                </div>
            </form>
            <div className='mt-5' style={{ width: "100vw" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className='grid-table table-head'>
                        <div><strong>Name</strong></div>
                        <div><strong>USN</strong></div>
                        <div><strong>Gender</strong></div>
                        <div><strong>Department</strong></div>
                        <div><strong>D.O.B</strong></div>
                    </div>
                    {
                        load && data.length === 0 ? <h2 className='mt-2' style={{ color: "red" }}>No Data Found</h2> :
                            data.map((val, index) => (
                                <Detailtuples name={val.name} usn={val.usn} gender={val.gender} dept={val.dept} dob={val.dob} key={val.usn} />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
