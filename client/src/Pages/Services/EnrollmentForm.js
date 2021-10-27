import React, { Component } from 'react'
import '../../css/EnrollmentForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import GraduatingTables from './GraduatingTables';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';


class EnrollmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                // personal data
                enrollment_year_entered: "",
                gender_preference: "",
                nationality: "",
                religion: "",
                place_of_birth: "",
                city_address: "",
                provincial_address: "",
                civil_status: "",
                fb_account: "",
                father_name: "",
                father_occupation: "",
                father_education: "",
                mother_name: "",
                mother_occupation: "",
                mother_education: "",
                marital_status: "",
                annual_income: "",
                enrollment_hobbies: "",

                //educational background
                enrollment_elementary: "",
                elementary_graduated: "",
                enrollment_junior: "",
                junior_graduated: "",
                enrollment_senior: "",
                senior_graduated: "",
                enrollment_vocational: "",
                vocational_graduated: "",
                enrollment_tertiary: "",
                tertiary_graduated: "",
                easy_subject: "",
                hard_subject: "",
                language_spoken: "",
                enrollment_reason: "",

                //Counseling Concern
                enrollment_learn: "",
                enrollment_talk: "",
                counselor_talk: "",
                enrollment_help: "",
                guardian_name: "",
                guardian_contact: "",
                guardian_address: ""
            },
            errors: {
                // personal data
                enrollment_year_entered: "",
                gender_preference: "",
                nationality: "",
                religion: "",
                place_of_birth: "",
                city_address: "",
                provincial_address: "",
                civil_status: "",
                fb_account: "",
                father_name: "",
                father_occupation: "",
                father_education: "",
                mother_name: "",
                mother_occupation: "",
                mother_education: "",
                marital_status: "",
                annual_income: "",
                enrollment_hobbies: "",

                //educational background
                enrollment_elementary: "",
                elementary_graduated: "",
                enrollment_junior: "",
                junior_graduated: "",
                enrollment_senior: "",
                senior_graduated: "",
                enrollment_vocational: "",
                vocational_graduated: "",
                enrollment_tertiary: "",
                tertiary_graduated: "",
                easy_subject: "",
                hard_subject: "",
                language_spoken: "",
                enrollment_reason: "",

                //Counseling Concern
                enrollment_learn: "",
                enrollment_talk: "",
                counselor_talk: "",
                enrollment_help: "",
                guardian_name: "",
                guardian_contact: "",
                guardian_address: ""
            }
        };
    }
    validate = (name, value) => {
        const { fields } = this.state;
        switch (name) {
            case "enrollment_year_entered":
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "This must contain number only";
                } else {
                    return "";
                }
            case "gender_preference":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "nationality":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "religion":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "place_of_birth":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "city_address":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "provincial_address":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "civil_status":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "fb_account":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "father_name":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "father_occupation":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "father_education":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "mother_name":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "mother_occupation":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "mother_education":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "marital_status":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "annual_income":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "enrollment_hobbies":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "enrollment_elementary":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "elementary_graduated"://number
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "This must contain number only";
                } else {
                    return "";
                }
            case "enrollment_junior":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "junior_graduated"://number
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "This must contain number only";
                } else {
                    return "";
                }
            case "enrollment_senior":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "senior_graduated"://number
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "This must contain number only";
                } else {
                    return "";
                }
            case "enrollment_vocational":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "vocational_graduated"://number
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "This must contain number only";
                } else {
                    return "";
                }
            case "enrollment_tertiary":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "tertiary_graduated"://number
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "This must contain number only";
                } else {
                    return "";
                }
            case "easy_subject":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "hard_subject":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "language_spoken":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "enrollment_learn":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "enrollment_talk":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "counselor_talk":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "enrollment_help":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "guardian_name":
                if (!value || value.trim() === "") {
                    return "This question is Required";
                } else {
                    return "";
                }
            case "guardian_contact"://number
                if (!value || value.trim() === "") {
                    return "This question is required";
                } else if (!value.match(/[0-9]/)) {
                    return "Please use valid mobile number";
                } else {
                    return "";
                }
            case "guardian_address":
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
        if (fields.enrollment_year_entered && fields.gender_preference && fields.nationality && fields.religion
            && fields.place_of_birth && fields.city_address && fields.provincial_address && fields.civil_status
            && fields.fb_account && fields.father_name && fields.father_occupation && fields.father_education
            && fields.mother_name && fields.mother_occupation && fields.mother_education && fields.marital_status
            && fields.annual_income && fields.enrollment_hobbies && fields.enrollment_elementry && fields.elementary_graduated
            && fields.enrollment_junior && fields.junior_graduated && fields.enrollment_senior && fields.senior_graduated
            && fields.enrollment_vocational && fields.vocational_graduated && fields.enrollment_tertiary && fields.tertiary_graduated
            && fields.easy_subject && fields.hard_subject && fields.language_spoken && fields.enrollment_reason && fields.enrollment_learn
            && fields.enrollment_talk && fields.counselor_talk && fields.enrollment_help && fields.guardian_name
            && fields.guardian_contact && fields.guardian_address) {
            const data = {
                last_academic_yr: fields.last_academic_yr,
                last_term: fields.last_term,
                grad_plan: fields.grad_plan,
                enrollment_year_entered: fields.enrollment_year_entered,
                gender_preference: fields.gender_preference,
                nationality: fields.nationality,
                religion: fields.religion,
                place_of_birth: fields.place_of_birth,
                city_address: fields.city_address,
                provincial_address: fields.provincial_address,
                civil_status: fields.civil_status,
                fb_account: fields.fb_account,
                father_name: fields.father_name,
                father_occupation: fields.father_occupation,
                father_education: fields.father_education,
                mother_name: fields.mother_name,
                mother_occupation: fields.mother_occupation,
                mother_education: fields.mother_education,
                marital_status: fields.marital_status,
                annual_income: fields.annual_income,
                enrollment_hobbies: fields.enrollment_hobbies,
                enrollment_elementry: fields.enrollment_elementry,
                elementary_graduated: fields.elementary_graduated,
                enrollment_junior: fields.enrollment_junior,
                junior_graduated: fields.junior_graduated,
                enrollment_senior: fields.enrollment_senior,
                senior_graduated: fields.senior_graduated,
                enrollment_vocational: fields.enrollment_vocational,
                vocational_graduated: fields.vocational_graduated,
                enrollment_tertiary: fields.enrollment_tertiary,
                tertiary_graduated: fields.tertiary_graduated,
                easy_subject: fields.easy_subject,
                hard_subject: fields.hard_subject,
                language_spoken: fields.language_spoken,
                enrollment_reason: fields.enrollment_reason,
                enrollment_learn: fields.enrollment_learn,
                enrollment_talk: fields.enrollment_talk,
                enrollment_help: fields.enrollment_help,
                guardian_name: fields.guardian_name,
                guardian_contact: fields.guardian_contact,
                guardian_address: fields.guardian_address
            };
            window.alert("submit success", JSON.stringify(data));
            console.log("----data----", data);
        }

    };

    render() {
        const { fields, errors } = this.state;
        return (
            <div className="enrollment-form-wrapper">
                <Header />
                <Navbar />

                <div className="enrollment-form-container">
                    <div className="enrollment-titles-name-pd">
                        <h1>Student Individual Inventory Form</h1>
                    </div>
                    <div className="enrollment-form-holder">
                        <form>
                            {/* Personal Data */}
                            <div className="enrollment-forms-header"><h3>Personal Data</h3>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Year Entered</h3></label>
                                <input
                                    id="enrollment_year_entered"
                                    type="text"
                                    name="enrollment_year_entered"
                                    value={fields.enrollment_year_entered || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Year Entered" />
                                <span className="text-danger-icon">{errors.enrollment_year_entered && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_year_entered}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Gender Preference</h3></label>
                                <select
                                    id="gender_preference"
                                    name="gender_preference"
                                    value={fields.gender_preference || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Choose gender preference</option>
                                    <option>Gay</option>
                                    <option>Lesbian</option>
                                    <option>Bisexual</option>
                                    <option>Transgender</option>
                                </select>
                                <span className="text-danger-icon">{errors.gender_preference && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.gender_preference}</span>
                            </div>

                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Nationality</h3></label>
                                <input
                                    id="nationality"
                                    type="text"
                                    name="nationality"
                                    value={fields.nationality || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Last Term Attended" />
                                <span className="text-danger-icon">{errors.nationality && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.nationality}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Religion</h3></label>
                                <input
                                    id="religion"
                                    type="text"
                                    name="religion"
                                    value={fields.religion || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.religion && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.religion}</span>
                            </div>

                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Place of Birth</h3></label>
                                <input
                                    id="place_of_birth"
                                    type="text"
                                    name="place_of_birth"
                                    value={fields.place_of_birth || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.place_of_birth && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.place_of_birth}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*City Address</h3></label>
                                <input
                                    id="city_address"
                                    type="text"
                                    name="city_address"
                                    value={fields.city_address || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.city_address && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.city_address}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Provincial Address</h3></label>
                                <input
                                    id="provincial_address"
                                    type="text"
                                    name="provincial_address"
                                    value={fields.provincial_address || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.provincial_address && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.provincial_address}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Civil Status</h3></label>
                                <select
                                    id="civil_status"
                                    name="civil_status"
                                    value={fields.civil_status || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select civil status</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                </select>
                                <span className="text-danger-icon">{errors.civil_status && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.civil_status}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Facebook Account</h3></label>
                                <input
                                    id="fb_account"
                                    type="text"
                                    name="fb_account"
                                    value={fields.fb_account || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.fb_account && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.fb_account}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Father's Name</h3></label>
                                <input
                                    id="father_name"
                                    type="text"
                                    name="father_name"
                                    value={fields.father_name || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.father_name && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.father_name}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Father's Occupation</h3></label>
                                <input
                                    id="father_occupation"
                                    type="text"
                                    name="father_occupation"
                                    value={fields.father_occupation || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.father_occupation && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.father_occupation}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Father's Educational Attainment</h3></label>
                                <input
                                    id="father_education"
                                    type="text"
                                    name="father_education"
                                    value={fields.father_education || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.father_education && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.father_education}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Mother's Name</h3></label>
                                <input
                                    id="mother_name"
                                    type="text"
                                    name="mother_name"
                                    value={fields.mother_name || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.mother_name && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.mother_name}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Mother's Occupation</h3></label>
                                <input
                                    id="mother_occupation"
                                    type="text"
                                    name="mother_occupation"
                                    value={fields.mother_occupation || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.mother_occupation && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.mother_occupation}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Mother's Educational Attainment</h3></label>
                                <input
                                    id="mother_education"
                                    type="text"
                                    name="mother_education"
                                    value={fields.mother_education || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.mother_education && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.mother_education}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Marital Status of Parents</h3></label>
                                <select
                                    id="marital_status"
                                    name="marital_status"
                                    value={fields.marital_status || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select marital status</option>
                                    <option>Living together here in the Philippines</option>
                                    <option>Living together here in the Philippines but Mother abroad</option>
                                    <option>Living together here in the Philippines but Father abroad</option>
                                    <option>Living together here in the Philippines but both are abroad</option>
                                    <option>Legally Separated</option>
                                    <option>Separated but not legally</option>
                                </select>
                                <span className="text-danger-icon">{errors.marital_status && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.marital_status}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Estimated Annual Family Income</h3></label>
                                <select
                                    id="annual_income"
                                    name="annual_income"
                                    value={fields.annual_income || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select estimated annual family income</option>
                                    <option>160,000 and below</option>
                                    <option>16,001 to 250,000</option>
                                    <option>250,001 – 400,000</option>
                                    <option>400,001 – 800,000</option>
                                    <option>800,001 – 2,000,000</option>
                                    <option>2,000,001 – 8,000,000</option>
                                </select>
                                <span className="text-danger-icon">{errors.annual_income && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.annual_income}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">Hobbies, Skills and Interest</h3></label>
                                <input
                                    id="enrollment_hobbies"
                                    type="text"
                                    name="enrollment_hobbies"
                                    value={fields.enrollment_hobbies || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.enrollment_hobbies && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_hobbies}</span>
                            </div>

                            {/* Educational Background */}
                            <div className="enrollment-titles-name-eb"><h3>Educational Background</h3></div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Elementary</h3></label>
                                <input
                                    id="enrollment_elementary"
                                    type="text"
                                    name="enrollment_elementary"
                                    value={fields.enrollment_elementary || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.enrollment_elementary && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_elementary}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Year Graduated</h3></label>
                                <input
                                    id="elementary_graduated"
                                    type="text"
                                    name="elementary_graduated"
                                    value={fields.elementary_graduated || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.elementary_graduated && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.elementary_graduated}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Junior High</h3></label>
                                <input
                                    id="enrollment_junior"
                                    type="text"
                                    name="enrollment_junior"
                                    value={fields.enrollment_junior || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.enrollment_junior && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_junior}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Year Graduated</h3></label>
                                <input
                                    id="junior_graduated"
                                    type="text"
                                    name="junior_graduated"
                                    value={fields.junior_graduated || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.junior_graduated && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.junior_graduated}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Senior High</h3></label>
                                <input
                                    id="enrollment_senior"
                                    type="text"
                                    name="enrollment_senior"
                                    value={fields.enrollment_senior || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.enrollment_senior && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_senior}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Year Graduated</h3></label>
                                <input
                                    id="senior_graduated"
                                    type="text"
                                    name="senior_graduated"
                                    value={fields.senior_graduated || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.senior_graduated && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.senior_graduated}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Vocational</h3></label>
                                <input
                                    id="enrollment_vocational"
                                    type="text"
                                    name="enrollment_vocational"
                                    value={fields.enrollment_vocational || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.enrollment_vocational && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_vocational}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Year Graduated</h3></label>
                                <input
                                    id="vocational_graduated"
                                    type="text"
                                    name="vocational_graduated"
                                    value={fields.vocational_graduated || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.vocational_graduated && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.vocational_graduated}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Tertiary(if 2nd Course)</h3></label>
                                <input
                                    id="enrollment_tertiary"
                                    type="text"
                                    name="enrollment_tertiary"
                                    value={fields.enrollment_tertiary || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.enrollment_tertiary && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_tertiary}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Year Graduated</h3></label>
                                <input
                                    id="tertiary_graduated"
                                    type="text"
                                    name="tertiary_graduated"
                                    value={fields.tertiary_graduated || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.tertiary_graduated && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.tertiary_graduated}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Subject you find easy</h3></label>
                                <select
                                    id="easy_subject"
                                    name="easy_subject"
                                    value={fields.easy_subject || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Choose subject</option>
                                    <option>English</option>
                                    <option>Filipino</option>
                                    <option>Math</option>
                                    <option>History</option>
                                    <option>Science</option>
                                    <option>Music</option>
                                    <option>Art</option>
                                    <option>Physical Education</option>
                                    <option>Health</option>
                                </select>
                                <span className="text-danger-icon">{errors.easy_subject && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.easy_subject}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Subject you find difficult</h3></label>
                                <select
                                    id="hard_subject"
                                    name="hard_subject"
                                    value={fields.hard_subject || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Choose subject</option>
                                    <option>English</option>
                                    <option>Filipino</option>
                                    <option>Math</option>
                                    <option>History</option>
                                    <option>Science</option>
                                    <option>Music</option>
                                    <option>Art</option>
                                    <option>Physical Education</option>
                                    <option>Health</option>
                                </select>
                                <span className="text-danger-icon">{errors.hard_subject && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.hard_subject}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Language/Dialect Spoken</h3></label>
                                <select
                                    id="language_spoken"
                                    name="language_spoken"
                                    value={fields.language_spoken || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Choose Dialect/language</option>
                                    <option>Tagalog</option>
                                    <option>English</option>
                                    <option>Bikol</option>
                                    <option>Kapampangan</option>
                                    <option>Ilocano</option>
                                    <option>Ilonggo(Hiligaynon)</option>
                                    <option>Cebuano</option>
                                    <option>Waray</option>
                                    <option>Bisaya</option>
                                </select>
                                <span className="text-danger-icon">{errors.language_spoken && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.language_spoken}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Why did you Enroll in NU?</h3></label>
                                <select
                                    id="enrollment_reason"
                                    name="enrollment_reason"
                                    value={fields.enrollment_reason || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select answer</option>
                                    <option>Quality Education</option>
                                    <option>Affordable Tuition Fee</option>
                                    <option>Nearness to Home</option>
                                    <option>Safe Environment</option>
                                    <option>Peer Pressure</option>
                                    <option>Parents Decision </option>
                                    <option>Good Facilities</option>
                                    <option>Course is available</option>
                                    <option>Good Professors</option>
                                </select>
                                <span className="text-danger-icon">{errors.enrollment_reason && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_reason}</span>
                            </div>

                            {/* COunseling Concern */}
                            <div className="enrollment-titles-name-counseling"><h1>Counseling Concern</h1></div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*How do you learn best?</h3></label>
                                <select
                                    id="enrollment_learn"
                                    name="enrollment_learn"
                                    value={fields.enrollment_learn || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select answer</option>
                                    <option>Hands-on experience</option>
                                    <option>Lectures</option>
                                    <option>Self-study</option>
                                    <option>Group interaction</option>
                                    <option>Visual presentation</option>
                                </select>
                                <span className="text-danger-icon">{errors.enrollment_learn && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_learn}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*With whom do you usually talk when you have problems?</h3></label>
                                <select
                                    id="enrollment_talk"
                                    name="enrollment_talk"
                                    value={fields.enrollment_talk || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select answer</option>
                                    <option>Father</option>
                                    <option>Mother</option>
                                    <option>Brother</option>
                                    <option>Sister</option>
                                    <option>Peers/Friends</option>
                                    <option>Professor</option>
                                    <option>Counselor</option>
                                    <option>Relationship Partner</option>
                                </select>
                                <span className="text-danger-icon">{errors.enrollment_talk && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_talk}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Which one do you prefer to talk with regarding your concerns?</h3></label>
                                <select
                                    id="counselor_talk"
                                    name="counselor_talk"
                                    value={fields.counselor_talk || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select answer</option>
                                    <option>Male Counselor</option>
                                    <option>Female Counselor</option>
                                </select>
                                <span className="text-danger-icon">{errors.counselor_talk && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.counselor_talk}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*In what area do you think you need assistance from a Counselor?</h3></label>
                                <select
                                    id="enrollment_help"
                                    name="enrollment_help"
                                    value={fields.enrollment_help || ''}
                                    onChange={event => this.handleUserInput(event)}>
                                    <option>Select answer</option>
                                    <option>Family concerns</option>
                                    <option>Peers/Friends</option>
                                    <option>Academic concerns</option>
                                    <option> Relationship with the opposite sex</option>
                                    <option>Personal adjustment</option>
                                </select>
                                <span className="text-danger-icon">{errors.enrollment_help && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.enrollment_help}</span>
                            </div>

                            {/* Guardian */}
                            <div className="enrollment-titles-name-guardian"><h1>In caseof emergency, please notify:</h1></div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Name</h3></label>
                                <input
                                    id="guardian_name"
                                    type="text"
                                    name="guardian_name"
                                    value={fields.guardian_name || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.guardian_name && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.guardian_name}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Contact No</h3></label>
                                <input
                                    id="guardian_contact"
                                    type="text"
                                    name="guardian_contact"
                                    value={fields.guardian_contact || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.guardian_contact && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.guardian_contact}</span>
                            </div>
                            <div className="enrollment-divs">
                                <label><h3 id="enrollment-label">*Complete Permanent Address</h3></label>
                                <input
                                    id="guardian_address"
                                    type="text"
                                    name="guardian_address"
                                    value={fields.guardian_address || ''}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="What are your plans after you graduate?" />
                                <span className="text-danger-icon">{errors.guardian_address && <RiErrorWarningLine color='red' />}</span>
                            </div>
                            <div>
                                <span className="text-danger">{errors.guardian_address}</span>
                            </div>

                           
                            <div className="enrollment-submit-btns">
                                <div className="enrollment-back">
                                    <Link to="/services/studentenrollment">
                                        <button type="button" id="enrollment-cancelBtn">Cancel</button>
                                    </Link>
                                </div><div className="enrollment-submit">
                                    <button type="button" id="enrollment-submitBtn" onClick={this.handleSubmit} >Submit
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

export default EnrollmentForm