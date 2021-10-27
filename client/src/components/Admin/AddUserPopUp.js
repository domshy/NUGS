import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/PopUp.css'

const AddUserPopUp = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>
                <Link to="/dashboard">
                    Ok
                </Link></span>
                {props.content}
            </div>
        </div>
    )
}

export default AddUserPopUp;