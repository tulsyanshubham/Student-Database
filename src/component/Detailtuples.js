import React from 'react'

export default function Detailtuples(props) {
    const dobSubstring = props.dob.substring(0, 10);
    return (
        <div className='grid-table'>
            <div>{props.name}</div>
            <div>{props.usn}</div>
            <div>{props.gender}</div>
            <div>{props.dept}</div>
            <div>{dobSubstring}</div>
        </div>
    )
}
