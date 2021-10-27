import React, { Component } from 'react'
import '../../css/StopSchooling.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'


class StopSchooling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                stop_reason: "",
                enroll_again: "",
                stop_schooling_other_comment: "",
                stop_schooling_type_communication: ""
            },
            errors: {
                stop_reason: "",
                enroll_again: "",
                stop_schooling_other_comment: "",
                stop_schooling_type_communication: ""
            }
        };
    }

    validate = (name, value) => {
        const { fields } = this.state;
        switch (name) {
            case "stop_reason":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "enroll_again":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "stop_schooling_other_comment":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "stop_schooling_type_communication":
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
        if (fields.stop_reason && fields.enroll_again && fields.stop_schooling_other_comment 
            && fields.stop_schooling_type_communication) {
            const data = {
                stop_reason: fields.stop_reason,
                enroll_again: fields.enroll_again,
                stop_schooling_other_comment: fields.stop_schooling_other_comment,
                stop_schooling_type_communication: fields.stop_schooling_type_communication,
                transfer_other_comment: fields.transfer_other_comment,
            };
            window.alert("subit success", JSON.stringify(data));
            console.log("----data----", data);
        }
    };

    render() {
        const { fields, errors } = this.state;
        return (
            <div className="stop-schooling-form-page">
                <div className="stop-schooling-form-wrapper">
                    <div className="stop-schooling-form-contents">
                        <div className="stop-schooling-forms-header"><h2>Stop Schooling Form</h2></div>
                        <form>
                            <div className="stop-schooling-divs">
                                <label><h3 className="stop-school-label">*Please identify your Reason</h3></label>
                                <select
                                    id="stop_reason"
                                    name="stop_reason"
                                    value={fields.stop_reason || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select Reason</option>
                                    <option>High Tuition Fee</option>
                                    <option>Financial Problem</option>
                                    <option>Family Problems</option>
                                    <option>Health Issues</option>
                                    <option>Local Employment</option>
                                    <option>Work Abroad</option>
                                    <option>Conflict with Work Schedules</option>
                                    <option>Trimestral Scheme</option>
                                    <option>Pregnancy</option>
                                    <option>Getting Married</option>
                                    <option>Lack of Career Plan (Self-Assessment)</option>
                                </select>
                                <span className="text-danger-icon">{errors.stop_reason && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.stop_reason}</span>
                            </div>
                            <div className="stop-schooling-divs">
                                <label><h3 className="stop-school-label">*Do you intend to enroll back to NU when you want to continue your schooling again?</h3></label>
                                <select
                                    id="enroll_again"
                                    name="enroll_again"
                                    value={fields.enroll_again || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Choose answer</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <span className="text-danger-icon">{errors.enroll_again && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enroll_again}</span>
                            </div>

                            <div className="stop-schooling-divs">
                                <label><h3 className="stop-school-label">*Other comments and suggestion for NU's further improvement</h3></label>
                                <input
                                    id="stop_schooling_other_comment"
                                    type="text"
                                    name="stop_schooling_other_comment"
                                    value={fields.stop_schooling_other_comment || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Other comments and suggestion for NU's further improvement" />
                                <span className="text-danger-icon">{errors.stop_schooling_other_comment && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.stop_schooling_other_comment}</span>
                            </div>


                            <div className="stop-schooling-divs">
                                <label><h3 className="stop-school-label">*How would you like your counselor to communicate with you?</h3></label>
                                <select
                                    id="stop_schooling_type_communication"
                                    name="stop_schooling_type_communication"
                                    value={fields.stop_schooling_type_communication || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select type of communication</option>
                                    <option>Audio Call</option>
                                    <option>Chat</option>
                                    <option>Video Chat</option>
                                </select>
                                <span className="text-danger-icon">{errors.stop_schooling_type_communication && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.stop_schooling_type_communication}</span>
                            </div>

                            <div className="stop-schooling-submit-btns">
                                <div className="stop-schooling-back">
                                    <Link to="/services/interview">
                                        <button type="button" id="stop-schooling-cancelBtn">Cancel</button>
                                    </Link>
                                </div><div className="stop-schooling-submit">
                                    <button type="button" id="stop-schooling-submitBtn" onClick={this.handleSubmit} >Submit
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
export default StopSchooling
