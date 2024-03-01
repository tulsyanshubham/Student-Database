import React from 'react'

export default function Alert(props) {

  const handelAlertType = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const alertStyle = {
    width : '22.5vw',
    position : 'fixed',
    right : '3px',
    top : '4vw'
  }
  
  return (
    props.alert && <div className={`alert alert-${props.alert==="failed" ? "danger" : props.alert} alert-dismissible fade show mx-1`} role="alert" style={alertStyle}>
        <strong>{handelAlertType(props.alert)} </strong>
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
