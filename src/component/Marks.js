import React, { useState } from 'react'

export default function Marks(props) {
    const backendURL = 'http://localhost:5000/marks';
    const [marks, setMarks] = useState({ usn: "", sub_code: "", test1: 0, test2: 0, test3: 0, average: 0 });

    const handleInput = (e) => {
        // console.log( e.target.value)
        let value = e.target.value.toUpperCase();
        setMarks({ ...marks, [e.target.name]: value })
        // console.log(marks)
    }

    const SubmitEvent = async (e) => {
        e.preventDefault();
        // const { id, name, gender } = marks;
        const avg = Math.round((parseInt(marks.test1) + parseInt(marks.test2) + parseInt(marks.test3)) / 3);
        // console.log(marks)
        // console.log(avg)

        const response = await fetch(backendURL, {
            mode: 'cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...marks, average: avg
            })
        });
        const result = await response.json();
        result.status ? props.showAlert("success") : props.showAlert("failed");
        console.log(result);
        document.querySelector(".reset").click();
    }

    const resetHandle = () => {
        setMarks({ usn: "", sub_code: "", test1: 0, test2: 0, test3: 0, average: 0 });
    }

    return (
        <div className='mt-5 pt-4 d-flex justify-content-center'>
            <form className='insert-form' onSubmit={SubmitEvent}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">USN</label>
                    <input type="text" className="form-control border-2" name="usn" id="exampleInputEmail1"
                        aria-describedby="emailHelp" length={10} required onChange={handleInput} style={{background:"none",borderColor:"black"}} pattern="\d{1}[A-Za-z]{2}\d{2}[A-Za-z]{2}\d{3}" value={marks.usn}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sub_code" className="form-label">Subject Code</label>
                    <input type="text" className="form-control border-2" name="sub_code" id="sub_code"
                        aria-describedby="emailHelp" maxLength={8} required onChange={handleInput} style={{background:"none",borderColor:"black"}} value={marks.sub_code} />
                </div>
                <div className="mb-3">
                    <label htmlFor="test1" className="form-label">1st IA Marks</label>
                    <input type="number" className="form-control border-2" name="test1" id="test1"
                        aria-describedby="emailHelp" required onChange={handleInput} style={{background:"none",borderColor:"black"}} min={0} max={50} value={marks.test1} />
                </div>
                <div className="mb-3">
                    <label htmlFor="test2" className="form-label">2st IA Marks</label>
                    <input type="number" className="form-control border-2" name="test2" id="test2"
                        aria-describedby="emailHelp" required onChange={handleInput} style={{background:"none",borderColor:"black"}} min={0} max={50} value={marks.test2} />
                </div>
                <div className="mb-3">
                    <label htmlFor="test3" className="form-label">3st IA Marks</label>
                    <input type="number" className="form-control border-2" name="test3" id="test3"
                        aria-describedby="emailHelp" required onChange={handleInput} style={{background:"none",borderColor:"black"}} min={0} max={50} value={marks.test3} />
                </div>
                <div className="d-flex justify-content-center" style={{gap:"5vw"}}>
                    <button type="submit" className="btn btn-dark">Submit</button>
                    <button type="reset" className="btn btn-dark reset" onClick={resetHandle}>Reset</button>
                </div>
            </form>
        </div>
    )
}
