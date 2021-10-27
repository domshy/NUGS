import React, { Component } from 'react'
import '../../css/GraduatingForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import GraduatingTables from './GraduatingTables';


class GraduatingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                last_academic_yr: "",
                last_term: "",
                grad_plan: "",
                other_comment:"",
                allow_info: "",
                grad_type_communication: ""
            },
            errors: {
                last_academic_yr: "",
                last_term: "",
                grad_plan: "",
                other_comment: "",
                allow_info: "",
                grad_type_communication: ""
            }
        };
    }
    validate = (name, value) => {
        const { fields } = this.state;
        switch (name) {
            case "last_academic_yr":
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "This must contain number only";
                } else {
                    return "";
                }
            case "last_term":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "grad_plan":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "allow_info":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
                case "grad_type_communication":
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
        if (fields.last_academic_yr && fields.last_term && fields.grad_plan) {
            const data = {
                last_academic_yr: fields.last_academic_yr,
                last_term: fields.last_term,
                grad_plan: fields.grad_plan,
            };
            window.alert("submit success", JSON.stringify(data));
            console.log("----data----", data);
        }
    };

    render() {
        const { fields, errors } = this.state;
        return (
            <div className="graduating-form-page">
            
                <div className="graduating-form-wrapper">
                    <div className="graduating-form-contents">
                    <div className="graduating-forms-header"><h2>Graduating Form</h2></div>
                        <form>
                            <div className="graduating-divs">
                                <label><h3 className="grad-label">*Last Academic Year Attended</h3></label>
                                <input
                                    id="last_academic_yr"
                                    type="text"
                                    name="last_academic_yr"
                                    value={fields.last_academic_yr || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Last Academic Year Attended" />
                                <span className="text-danger-icon">{errors.last_academic_yr && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger"> {errors.last_academic_yr}</span>
                            </div>
                            <div className="graduating-divs">
                                <label><h3 className="grad-label">*Last Term Attended</h3></label>
                                <input
                                    id="last_term"
                                    type="text"
                                    name="last_term"
                                    value={fields.last_term || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Last Academic Year Attended" />
                                <span className="text-danger-icon">{errors.last_term && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger"> {errors.last_term}</span>
                            </div>

                            <div className="graduating-values-tables">
                                    <label><h3 className="values-table-label">Values instilled in you by the University</h3></label>
                                    {/* <GraduatingTables /> */}
                                </div>
                            <div className="graduating-divs">
                                <label><h3 className="grad-label">*What are your plans after you graduate?</h3></label>
                                <input
                                    id="grad_plan"
                                    type="text"
                                    name="grad_plan"
                                    value={fields.grad_plan || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.grad_plan && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.grad_plan}</span>
                            </div>

                            <div className="graduating-divs">
                                <label><h3 className="grad-label">*Other comments and suggestion for NU's further improvement</h3></label>
                                <input
                                    id="other_comment"
                                    type="text"
                                    name="other_comment"
                                    value={fields.other_comment || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.other_comment && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.other_comment}</span>
                            </div>
                            <div className="graduating-divs">
                                <label><h3 className="grad-label">*Will you allow us to include your information
                                    to the list we will give to the requesting companies/agencies for employment purposes?</h3></label>
                                <select
                                    id="allow_info"
                                    name="allow_info"
                                    value={fields.type_communication || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Choose option</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <span className="text-danger-icon">{errors.allow_info && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.allow_info}</span>
                            </div>
                            <div className="graduating-divs">
                                <label><h3 className="grad-label">*How would you like your counselor to communicate with you?</h3></label>
                                <select
                                    id="grad_type_communication"
                                    name="grad_type_communication"
                                    value={fields.grad_type_communication || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select type of communication</option>
                                    <option>Audio Call</option>
                                    <option>Chat</option>
                                    <option>Video Chat</option>
                                </select>
                                <span className="text-danger-icon">{errors.grad_type_communication && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.grad_type_communication}</span>
                            </div>


                            <div className="graduating-submit-btns">
                                <div className="graduating-back">
                                    <Link to="/services/interview">
                                        <button type="button" id="graduating-cancelBtn">Cancel</button>
                                    </Link>
                                </div><div className="graduating-submit">
                                    <button type="button" id="graduating-submitBtn" onClick={this.handleSubmit} >Submit
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

export default GraduatingForm