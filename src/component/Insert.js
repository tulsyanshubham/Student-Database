import React, { useState } from 'react'

export default function Insert(props) {
    const backendURL = 'http://localhost:5000/student';
    const [student, setStudent] = useState({ name: "", gender: "", usn: "", dob: "", dept: "", fname: "", mname: "", address: "" });

    const handleInput = (e) => {
        // console.log( e.target.value)
        let value = e.target.value;
        setStudent({ ...student, [e.target.name]: value })
        // console.log(student)
    }

    const SubmitEvent = async (e) => {
        e.preventDefault();
        // const { id, name, gender } = student;
        let usn = student.usn.toUpperCase();
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
        result.status ? props.showAlert("success") : props.showAlert("failed");
        console.log(result);
        document.querySelector(".reset").click();
        setStudent({ name: "", gender: "", usn: "", dob: "", dept: "", fname: "", mname: "", address: "" });
    }

    const resetHandle = () => {
        setStudent({ name: "", gender: "", usn: "", dob: "", dept: "", fname: "", mname: "", address: "" });
    }

    return (
        <div className='mt-5 pt-4 d-flex justify-content-center'>
            <form className='insert-form' onSubmit={SubmitEvent}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control border-2" name="name" id="exampleInputEmail1"
                        aria-describedby="emailHelp" minLength={4} required onChange={handleInput} style={{background:"none",borderColor:"black"}} value={student.name} />
                </div>
                <div className=" mb-3">
                    <label><span className="form-label">Gender</span></label>
                    <div className="d-flex" name="gender">
                        <div className="form-check mx-3">
                            <input className="form-check-input border-2" type="radio" name="gender" value="Male" id="male" required onChange={handleInput} checked={student.gender === "Male"} style={{backgroundColor:"none"}} />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check mx-3">
                            <input className="form-check-input border-2" type="radio" name="gender" value="Female" id="female" required onChange={handleInput} checked={student.gender === "Female"} style={{backgroundColor:"none"}} />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="usn" className="form-label">USN</label>
                    <input type="text" className="form-control border-2" name="usn" id="usn"
                        aria-describedby="emailHelp" required onChange={handleInput} style={{background:"none",borderColor:"black"}} pattern="\d{1}[A-Za-z]{2}\d{2}[A-Za-z]{2}\d{3}" value={student.usn}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">DOB</label>
                    <input type="date" className="form-control border-2" name="dob" id="dob" aria-describedby="emailHelp" required onChange={handleInput} style={{background:"none",borderColor:"black"}} value={student.dob} />
                </div>
                <div className=" mb-3">
                    <label htmlFor="inputGroupSelect01" className="form-label">Dept</label>
                    <select className="form-select border-2" id="inputGroupSelect01" name='dept' onChange={handleInput} style={{background:"none",borderColor:"black"}} required>
                        <option selected value="">Choose...</option>
                        <option >CSE</option>
                        <option >ISE</option>
                        <option >CSD</option>
                        <option >AIML</option>
                        <option >ECE</option>
                        <option >EEE</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Father's Name</label>
                    <input type="text" className="form-control border-2" name="fname" id="fname"
                        aria-describedby="emailHelp" minLength={4} required onChange={handleInput} style={{background:"none",borderColor:"black"}} value={student.fname}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mname" className="form-label">Mother's Name</label>
                    <input type="text" className="form-control border-2" name="mname" id="mname"
                        aria-describedby="emailHelp" minLength={4} required onChange={handleInput} style={{background:"none",borderColor:"black"}} value={student.mname}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control border-2" placeholder="Address" id="address" name='address' onChange={handleInput} style={{background:"none",borderColor:"black",height: "100px"}} minLength={10} value={student.address} required></textarea>
                </div>
                <div className="d-flex justify-content-center" style={{gap:"5vw"}}>
                    <button type="submit" className="btn btn-dark">Submit</button>
                    <button type="reset" className="btn btn-dark reset" onClick={resetHandle}>Reset</button>
                </div>
            </form>
        </div>
    )
}
