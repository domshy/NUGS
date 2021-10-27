import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/ShiftingForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'

class ShiftingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                shift_course_count: "",
                shift_from: "",
                shift_to: "",
                shifting_reason: "",
                reason_explain: "",
                commitment_newprogram: "",
                type_contact: "",
                type_communication: ""
            },
            errors: {
                shift_course_count: "",
                shift_from: "",
                shift_to: "",
                shifting_reason: "",
                reason_explain: "",
                commitment_newprogram: "",
                type_contact: "",
                type_communication: "",
            }
        };
    }

    validate = (name, value) => {
        const { fields } = this.state;
        switch (name) {
            case "shift_course_count":
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "This must contain number only";
                } else {
                    return "";
                }
            case "shift_from":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "shift_to":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "shifting_reason":
                if (!value || value.trim() === "") {
                    return "Select reason for shifting";
                } else {
                    return "";
                }
            case "reason_explain":
                if (!value || value.trim() === "") {
                    return "Please explain your reason";
                } else {
                    return "";
                }
            case "commitment_newprogram":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "type_contact":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "type_communication":
                if (!value || value.trim() === "") {
                    return "Select type of communication";
                } else {
                    return "";
                }
            default: {
                return "";
            }
        }
    };
    handleUserInput = e => {
        this.setState({
            errors: {
                ...this.state.errors,
                [e.target.name]: this.validate(e.target.name, e.target.value)
            },
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        const { fields } = this.state;
        e.preventDefault();
        let validationErrors = {};
        Object.keys(fields).forEach(name => {
            const error = this.validate(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {
            this.setState({ errors: validationErrors });
            return;
        }
        if (fields.shift_course_count && fields.shift_from && fields.shift_to && fields.shifting_reason
            && fields.reason_explain && fields.commitment_newprogram && fields.type_contact && fields.type_communication) {
            const data = {
                shift_course_count: fields.shift_course_count,
                shift_from: fields.shift_from,
                shift_to: fields.shift_to,
                shifting_reason: fields.shifting_reason,
                reason_explain: fields.reason_explain,
                commitment_newprogram: fields.commitment_newprogram,
                type_contact: fields.type_contact,
                type_communication: fields.type_communication
            };
            window.alert("sumbit success", JSON.stringify(data));
            console.log("----data----", data);
        }
    };

    render() {
                const { fields, errors } = this.state;
                return (
                    <div className="shifting-form-page">
                        <div className="shifting-form-wrapper">
                            <div className="shifting-form-contents">
                            <div className="shifting-forms-header"><h2>Shifting Form</h2></div>
                                <form>
                                    <div className="shifting-divs">
                                        <label><h3 className="shift-label">*How many times you have shifted course?</h3></label>
                                        <input
                                            id="shift_course_count"
                                            type="text"
                                            name="shift_course_count"
                                            value={fields.shift_course_count || ''}
                                            onChange={event => this.handleUserInput(event)}
                                            placeholder="How many times you have shifted course?" />
                                        <span className="text-danger-icon">{errors.shift_course_count && <RiErrorWarningLine color='red' />}</span>
                                    </div>
                                    <div>
                                        <span className="text-danger">{errors.shift_course_count}</span>
                                    </div>
                                    <div className="shifting-divs">
                                        <label><h3 className="shift-label">*I am Shifting from</h3></label>
                                        <input
                                            id="shift_from"
                                            type="text"
                                            name="shift_from"
                                            value={fields.shift_from || ''}
                                            onChange={event => this.handleUserInput(event)}
                                            placeholder="Shifting from" />
                                        <span className="text-danger-icon">{errors.shift_from && <RiErrorWarningLine color='red' />}</span>
                                    </div>
                                    <div>
                                        <span className="text-danger">{errors.shift_from}</span>
                                    </div>
                                    <div className="shifting-divs">
                                        <label><h3 className="shift-label">*I am Shifting to</h3></label>
                                        <input
                                            id="shift_to"
                                            type="text"
                                            name="shift_to"
                                            value={fields.shift_to || ''}
                                            onChange={event => this.handleUserInput(event)}
                                            placeholder="Shifting to" />
                                        <span className="text-danger-icon">{errors.shift_to && <RiErrorWarningLine color='red' />}</span>
                                    </div>
                                    <div>
                                        <span className="text-danger">{errors.shift_to}</span>
                                    </div>
                                    <div className="shifting-divs">
                                        <label><h3 className="shift-label">*Reason for Shifting</h3></label>
                                        <select
        
                                            name="shifting_reason"
                                            value={fields.shifting_reason || ''}
                                            onChange={event => this.handleUserInput(event)}>
        
                                            <option>Select Reason</option>
                                            <option>Academic Difficulty</option>
                                            <option>Advised to shift by Parents/Family/Friends</option>
                                            <option>Faster way to Graduate</option>
                                            <option>Failure/s in Pre-requisite Subjects</option>
                                            <option>Change of Interest</option>
                                            <option>Recommended by Professor</option>
                                            <option>Non-fulfillment of Probationary Status</option>
                                        </select>
                                        <span className="text-danger-icon">{errors.shifting_reason && <RiErrorWarningLine color='red' />}</span>
                                    </div>
                                    <div>
                                        <span className="text-danger">{errors.shifting_reason}</span>
                                    </div>
                                    <div className="shifting-divs">
                                        <label><h3 className="shift-label">*Explain your Reason</h3></label>
                                        <textarea
                                            id="reason_explain"
                                            type="text"
                                            name="reason_explain"
                                            value={fields.reason_explain || ''}
                                            onChange={event => this.handleUserInput(event)}
                                            placeholder="Explain your Reason" />
                                        <span className="text-danger-icon">{errors.reason_explain && <RiErrorWarningLine color='red' />}</span>
                                    </div>
                                    <div>
                                        <span className="text-danger">{errors.reason_explain}</span>
                                    </div>
                                    <div className="shifting-divs">
                                        <label><h3 className="shift-label">*Commitment to the new Program</h3></label>
                                        <input
                                            id="commitment_newprogram"
                                            type="text"
                                            name="commitment_newprogram"
                                            value={fields.commitment_newprogram || ''}
                                            onChange={event => this.handleUserInput(event)}
                                            placeholder="Commitment to the new Program" />
                                        <span className="text-danger-icon">{errors.commitment_newprogram && <RiErrorWarningLine color='red' />}</span>
                                    </div>
                                    <div>
                                        <span className="text-danger">{errors.commitment_newprogram}</span>
                                    </div>
                                    <div className="shifting-divs">
                                        <label><h3 className="shift-label">*Where do you want to be contacted?</h3></label>
                                        <input
                                            id="type_contact"
                                            type="text"
                                            name="type_contact"
                                            value={fields.type_contact || ''}
                                            onChange={event => this.handleUserInput(event)}
                                            placeholder="e.g. NUGS(yourNUemailaccount@students.national-u.edu.ph), Viber (09123456789), Telegram (09123456789 OR account name), etc." />
                                        <span className="text-danger-icon">{errors.type_contact && <RiErrorWarningLine color='red' />}</span>
                                    </div>
                                    <div>
                                        <span className="text-danger">{errors.type_contact}</span>
                                    </div>
                                    <div className="shifting-divs">
                                        <label><h3 className="shift-label">*In what way do you want to communicate?</h3></label>
                                        <select
                                            id="type_communication"
                                            name="type_communication"
                                            value={fields.type_communication || ''}
                                            onChange={event => this.handleUserInput(event)}>
        
                                            <option>Choose type of Communication</option>
                                            <option>Audio</option>
                                            <option>Video Call</option>
                                            <option>Chat</option>
                                        </select>
                                        <span className="text-danger-icon">{errors.type_communication && <RiErrorWarningLine color='red' />}</span>
                                    </div>
                                    <div>
                                        <span className="text-danger">{errors.type_communication}</span>
                                    </div>
                                    <div className="shifting-submit-btns">
                                        <div className="shifting-back">
                                            <Link to="/services/interview">
                                                <button type="button" id="shifting-cancelBtn">Cancel</button>
                                            </Link>
                                        </div><div className="shifting-submit">
                                            <button type="button" id="shifting-submitBtn" onClick={this.handleSubmit} >Submit
                                    </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
        }
export default ShiftingForm
