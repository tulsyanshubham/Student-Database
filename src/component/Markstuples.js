import React from 'react'

export default function Markstuples(props) {
    return (
        <div className='grid-table2'>
            <div>{props.name}</div>
            <div>{props.usn}</div>
            <div>{props.sub_name}</div>
            <div>{props.test1}</div>
            <div>{props.test2}</div>
            <div>{props.test3}</div>
            <div>{props.average}</div>
        </div>
    )
}
