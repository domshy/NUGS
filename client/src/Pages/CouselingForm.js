import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/CounselingForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

class CounselingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                counseling_concern: "",
                feel_concern: "",
                counseling_contacted: "",
                counseling_type_communication: ""
            },
            errors: {
                counseling_concern: "",
                feel_concern: "",
                counseling_contacted: "",
                counseling_type_communication: ""
            }
        };
    }

    validate = (name, value) => {
        const { fields } = this.state;
        switch (name) {
            case "counseling_concern":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "feel_concern":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "counseling_contacted":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "counseling_type_communication":
                if (!value || value.trim() === "") {
                    return "This question is required";
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
        if (fields.counseling_concern && fields.feel_concern && fields.counseling_contacted && fields.counseling_type_communication) {
            const data = {
                counseling_concern: fields.counseling_concern,
                feel_concern: fields.feel_concern,
                counseling_contacted: fields.counseling_contacted,
                counseling_type_communication: fields.counseling_type_communication,
            };
            window.alert("subit success", JSON.stringify(data));
            console.log("----data----", data);
        }
    };

    render() {
        const { fields, errors } = this.state;
        return (
            <div className="counseling-form-wrapper">
                <Header />
                <Navbar />
                <div className="counseling-forms-contents">
                    <div className="counseling-forms-header"><h1>Counseling Form</h1></div>

                    <form>
                        <div className="counseling-divs">
                            <label><h3 className="counseling-label">*What is your concern for today?</h3></label>
                            <select
                                name="counseling_concern"
                                value={fields.counseling_concern || ''}
                                onChange={event => this.handleUserInput(event)}>
                                <option>Select Reason</option>
                                <option>Health Concern</option>
                                <option>Career/Vocational Concern</option>
                                <option>Family Concern</option>
                                <option>Financial Difficulty</option>
                                <option>Conflict with Professor</option>
                                <option>BF/GF Relationship</option>
                                <option>Attendance</option>
                                <option>School Adjustment</option>
                                <option>Work Concern</option>
                                <option>Academic Difficulty</option>
                                <option>Peer Conflict/Pressure</option>
                                <option>Gender/Sexuality Concern</option>
                                <option>Motivation</option>
                            </select>
                            <span className="text-danger-icon">{errors.counseling_concern && <RiErrorWarningLine color='red' />}</span>
                        </div>
                        <div>
                            <span className="text-danger">{errors.counseling_concern}</span>
                        </div>
                        <div className="counseling-divs">
                            <label><h3 className="counseling-label">*How do you feel about your concern?</h3></label>
                            <select
                                name="feel_concern"
                                value={fields.feel_concern || ''}
                                onChange={event => this.handleUserInput(event)}>
                                <option>Select Reason</option>
                                <option>Anxious</option>
                                <option>Apologetic</option>
                                <option>Arrogant</option>
                                <option>Bored</option>
                                <option>Confident</option>
                                <option>Curious</option>
                                <option>Disappointed</option>
                                <option>Disgusting</option>
                                <option>Enraged</option>
                                <option>Exhausted</option>
                                <option>Frightened</option>
                                <option>Frustrated</option>
                                <option>Motivation</option>
                                <option>Grieving</option>
                                <option>Guilty</option>
                                <option>Happy</option>
                                <option>Horrified</option>
                                <option>Hurt</option>
                                <option>Interested</option>
                                <option>Jealous</option>
                                <option>Lonely</option>
                                <option>Lovestruck</option>
                                <option>Negative</option>
                                <option>Optimistic</option>
                                <option>Paranoid</option>
                                <option>Sad</option>
                                <option>Satisfied</option>
                                <option>Surprised</option>
                                <option>Suspicious</option>
                                <option>Undecided</option>
                                <option>Withdrawn</option>
                            </select>
                            <span className="text-danger-icon">{errors.feel_concern && <RiErrorWarningLine color='red' />}</span>
                        </div>
                        <div>
                            <span className="text-danger">{errors.feel_concern}</span>
                        </div>
                        <div className="counseling-divs">
                            <label><h3 className="counseling-label">*Where do you want to be contacted?</h3></label>
                            <input
                                id="counseling_contacted"
                                type="text"
                                name="counseling_contacted"
                                value={fields.counseling_contacted || ''}
                                onChange={event => this.handleUserInput(event)}
                                placeholder="e.g. NUGS(yourNUemailaccount@students.national-u.edu.ph), Viber (09123456789), Telegram (09123456789 OR account name), etc." />
                            <span className="text-danger-icon">{errors.counseling_contacted && <RiErrorWarningLine color='red' />}</span>
                        </div>
                        <div>
                            <span className="text-danger">{errors.counseling_contacted}</span>
                        </div>
                        <div className="counseling-divs">
                            <label><h3 className="counseling-label">*In what way do you want to communicate?</h3></label>
                            <select
                                id="counseling_type_communication"
                                name="counseling_type_communication"
                                value={fields.counseling_type_communication || ''}
                                onChange={event => this.handleUserInput(event)}>

                                <option>Choose type of Communication</option>
                                <option>Audio</option>
                                <option>Video Call</option>
                                <option>Chat</option>
                            </select>
                            <span className="text-danger-icon">{errors.counseling_type_communication && <RiErrorWarningLine color='red' />}</span>
                        </div>
                        <div>
                            <span className="text-danger">{errors.counseling_type_communication}</span>
                        </div>
                        <div className="counseling-submit-btns">
                            <div className="counseling-back">
                                <Link to="/counseling/consent">
                                    <button type="button" id="counseling-cancelBtn">Back</button>
                                </Link>
                            </div><div className="counseling-submit">
                                <button type="button" id="counseling-submitBtn" onClick={this.handleSubmit} >Submit
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default CounselingForm
