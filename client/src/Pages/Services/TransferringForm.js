import React, { Component } from 'react'
import '../../css/TransferringForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'


class TransferringForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                transfer_reason: "",
                school_transfer: "",
                school_location: "",
                prefer_course: "",
                transfer_other_comment: "",
                transfer_allow_info: "",
                transfer_type_communication: ""
            },
            errors: {
                transfer_reason: "",
                school_transfer: "",
                school_location: "",
                prefer_course: "",
                transfer_other_comment: "",
                transfer_allow_info: "",
                transfer_type_communication: ""
            }
        };
    }

    validate = (name, value) => {
        const { fields } = this.state;
        switch (name) {
            case "transfer_reason":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "school_transfer":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "school_location":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "prefer_course":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "transfer_other_comment":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "transfer_allow_info":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "transfer_type_communication":
                if (!value || value.trim() === "") {
                    return "This question is Required";
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
        if (fields.transfer_reason && fields.school_transfer && fields.school_location && fields.prefer_course
            && fields.transfer_other_comment && fields.transfer_allow_info && fields.transfer_type_communication) {
            const data = {
                transfer_reason: fields.transfer_reason,
                school_transfer: fields.school_transfer,
                school_location: fields.school_location,
                prefer_course: fields.prefer_course,
                transfer_other_comment: fields.transfer_other_comment,
                transfer_allow_info: fields.transfer_allow_info,
                transfer_type_communication: fields.transfer_type_communication
            };
            window.alert("subit success", JSON.stringify(data));
            console.log("----data----", data);
        }
    };

    render() {
        const { fields, errors } = this.state;
        return (
            <div className="transferring-form-page">
                <div className="transferring-form-wrapper">
                    <div className="transferring-form-contents">
                        <div className="transferring-forms-header"><h2>Transferring Form</h2></div>
                        <form>
                            <div className="transferring-divs">
                                <label><h3 className="transfer-label">*Please identify your Reason</h3></label>
                                <select
                                    id="transfer_reason"
                                    name="transfer_reason"
                                    value={fields.transfer_reason || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select Reason</option>
                                    <option>Change of Residence</option>
                                    <option>School Workload</option>
                                    <option>Shift to a Program/Course that is not available in NU</option>
                                    <option>Non-fulfillment of Probationary Condition</option>
                                    <option>Conflict with Professors</option>
                                    <option>Conflict with Fellow Students</option>
                                    <option>Conflict with School Management</option>
                                    <option>Safety and Security</option>
                                    <option>High Tuition Fee</option>
                                    <option>Family Problems</option>
                                    <option>Poor Quality of Teaching</option>
                                    <option>Poor Facilities</option>
                                    <option>Proximity</option>
                                    <option>Home Schooling</option>
                                    <option>Financial Problem</option>
                                    <option>Trimestral Scheme</option>
                                </select>
                                <span className="text-danger-icon">{errors.transfer_reason && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.transfer_reason}</span>
                            </div>
                            <div className="transferring-divs">
                                <label><h3 className="transfer-label">*To what school will you transfer?</h3></label>
                                <input
                                    id="school_transfer"
                                    type="text"
                                    name="school_transfer"
                                    value={fields.school_transfer || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="To what school will you transfer?" />
                                <span className="text-danger-icon">{errors.school_transfer && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.school_transfer}</span>
                            </div>
                            <div className="transferring-divs">
                                <label><h3 className="transfer-label">*Location of your preferred school</h3></label>
                                <input
                                    id="school_location"
                                    type="text"
                                    name="school_location"
                                    value={fields.school_location || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Location of your preferred school" />
                                <span className="text-danger-icon">{errors.school_location && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.school_location}</span>
                            </div>
                            <div className="transferring-divs">
                                <label><h3 className="transfer-label">*Course/program you're planning to take</h3></label>
                                <input
                                    id="prefer_course"
                                    type="text"
                                    name="prefer_course"
                                    value={fields.prefer_course || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Course/program you're planning to take" />
                                <span className="text-danger-icon">{errors.prefer_course && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.prefer_course}</span>
                            </div>
                            <div className="transferring-divs">
                                <label><h3 className="transfer-label">*Other comments and suggestion for NU's further improvement</h3></label>
                                <input
                                    id="transfer_other_comment"
                                    type="text"
                                    name="transfer_other_comment"
                                    value={fields.transfer_other_comment || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Other comments and suggestion for NU's further improvement" />
                                <span className="text-danger-icon">{errors.transfer_other_comment && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.transfer_other_comment}</span>
                            </div>

                            <div className="transferring-divs">
                                <label><h3 className="transfer-label">*Will you allow us to include your information
                                    to the list we will give <br /> to the requesting companies/agencies for employment purposes?</h3></label>
                                <select
                                    id="transfer_allow_info"
                                    name="transfer_allow_info"
                                    value={fields.transfer_allow_info || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Choose answer</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <span className="text-danger-icon">{errors.transfer_allow_info && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.transfer_allow_info}</span>
                            </div>
                            <div className="transferring-divs">
                                <label><h3 className="transfer-label">*How would you like your counselor to communicate with you?</h3></label>
                                <select
                                    id="transfer_type_communication"
                                    name="transfer_type_communication"
                                    value={fields.transfer_type_communication || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select type of communication</option>
                                    <option>Audio Call</option>
                                    <option>Chat</option>
                                    <option>Video Chat</option>
                                </select>
                                <span className="text-danger-icon">{errors.transfer_type_communication && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.transfer_type_communication}</span>
                            </div>

                            <div className="transferring-submit-btns">
                                <div className="transferring-back">
                                    <Link to="/services/interview">
                                        <button type="button" id="transferring-cancelBtn">Cancel</button>
                                    </Link>
                                </div><div className="transferring-submit">
                                    <button type="button" id="transferring-submitBtn" onClick={this.handleSubmit} >Submit
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
export default TransferringForm
