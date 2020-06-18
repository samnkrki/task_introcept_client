import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { baseUrl, saveDataUrl, headers } from '../constants/url';
import { nationalities } from '.././constants/nationalities'
import { validateEmail, validatePhone } from '../helpers/validityHelpers';
import { useAlert } from 'react-alert';

const userData = {
    _id: "",
    name: "",
    educationBackground: "",
    email: "",
    gender: "",
    dob: "",
    nationality: "Nepali",
    phone: "",
    prefModeContact: "",
    address: "",
}
export default function AddData(props) {
    const alert = useAlert();
    const [user, setUser] = useState(userData)
    const [errors, setErrors] = useState({})
    const [detailPage, setDetailPage] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if (props.details) {
            setDetailPage(true)
            setUser({ ...props.details })
        }
    }, [])
    const checkValidityAndSubmit = async (event) => {
        event.preventDefault()
        if (validateForm()) {
            const url = baseUrl + saveDataUrl
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(user)
            })
            let res = response.json()
            res.then(result => {
                if (result.success) {
                    alert.success("Data saved successfully")
                    setUser(userData)
                }
                else {
                    alert.error("Unable to save. Please try again")
                }
            })
                .catch(err => {
                    alert.error("Something went wrong. Please try again")
                })
        } else {
            alert.error("Please check the invalid fields before submitting")
            return
        }
    }

    const validateForm = () => {
        let errors = {}
        let formIsValid = true
        if (user.name === "") {
            errors['name'] = "This field is required"
        }
        if (!validateEmail(user.email)) {
            errors['email'] = "Email is invalid. Please enter a valid one"
            formIsValid = false
        }
        if (!validatePhone(user.phone)) {
            errors['phone'] = "Phone number is not valid"
            formIsValid = false
        }
        if (user.gender === "") {
            errors['gender'] = "This field is required"
        }
        if (user.prefModeContact === "") {
            errors['prefModeContact'] = "This field is required"
        }
        setErrors({ ...errors })
        return formIsValid
    }

    const navigateToLists = () => {
        history.push("/list");
    }
    const handleChange = (e) => {
        const attributeName = e.target.name
        const value = e.target.value
        const changedObject = {}
        changedObject[attributeName] = value
        // console.log(user, changedObject)
        setUser({ ...user, ...changedObject })
    }

    return (
        <Container>
            <Col md={9}>
                <form className="" onSubmit={(e) => checkValidityAndSubmit(e)}>
                    <h2 hidden={detailPage}>Add Details here</h2>
                    <div className="form-group">
                        <label className="label" htmlFor="name">Full Name *</label>
                        <input type="text" className="form-control" value={user.name}
                            onChange={event => handleChange(event)}
                            name="name" disabled={detailPage} />
                        <div className="errorMsg">{errors.name}</div>
                    </div >
                    <div className="form-group">
                        <label className="label" htmlFor="email">Email address</label>
                        <input type="email"
                            className="form-control"
                            value={user.email}
                            onChange={event => handleChange(event)}
                            name="email"
                            disabled={detailPage}
                        />
                        <div className="errorMsg">{errors.email}</div>
                    </div >
                    <div className="form-group">
                        <label className="label" htmlFor="educationBackground">Education Background</label>
                        <textarea type="text" className="form-control" disabled={detailPage}
                            name="educationBackground" value={user.educationBackground} onChange={event => handleChange(event)} />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="gender">Gender</label><br />
                        <input type="radio" id="male" name="gender" value="Male" checked={user.gender === "Male"} onChange={event => handleChange(event)} disabled={detailPage} />
                        <label htmlFor="male">Male</label><br />
                        <input type="radio" id="female" name="gender" value="Female" checked={user.gender === "Female"} onChange={event => handleChange(event)} disabled={detailPage} />
                        <label htmlFor="female">Female</label><br />
                        <input type="radio" id="other" name="gender" value="Other" checked={user.gender === "Other"} onChange={event => handleChange(event)} disabled={detailPage} />
                        <label htmlFor="other">Other</label>
                        <div className="errorMsg">{errors.gender}</div>
                    </div >
                    <div className="form-group">
                        <label className="label" htmlFor="dob">Date Of Birth</label>
                        <input type="date" className=" form-control"
                            name="dob" value={user.dob} onChange={event => handleChange(event)} disabled={detailPage} />
                    </div >
                    <div className="form-group">
                        <label className="label" htmlFor="phone">Phone</label>
                        <input type="tel" className=" form-control"
                            name="phone" value={user.phone}
                            onChange={event => handleChange(event)}
                            disabled={detailPage}
                        />
                        <div className="errorMsg">{errors.phone}</div>
                    </div >
                    <div className="form-group">
                        <label className="label" htmlFor="address">Address</label>
                        <input type="text" className=" form-control"
                            name="address" value={user.address} onChange={event => handleChange(event)} disabled={detailPage} />
                    </div >
                    <div className="form-group">
                        <label className="label" htmlFor="nationality">Nationality</label>
                        <select className=" form-control"
                            name="nationality"
                            value={user.nationality}
                            onChange={event => handleChange(event)}
                            disabled={detailPage}>
                            {getSelectOptions()}
                        </select>
                    </div >
                    <div className="form-group">
                        <label className="label" htmlFor="prefModeContact">Preferred Contact Mode</label><br />
                        <input type="radio" id="email_pref" name="prefModeContact" value="Email" checked={user.prefModeContact === "Email"} onChange={handleChange} disabled={detailPage} />
                        <label htmlFor="email_pref">Email</label><br />
                        <input type="radio" id="phone_pref" name="prefModeContact" value="Phone" checked={user.prefModeContact === "Phone"} onChange={handleChange} disabled={detailPage} />
                        <label htmlFor="phone_pref">Phone</label><br />
                        <input type="radio" id="none_pref" name="prefModeContact" value="None" checked={user.prefModeContact === "None"} onChange={handleChange} disabled={detailPage} />
                        <label htmlFor="none_pref">None</label>
                        <div className="errorMsg">{errors.prefModeContact}</div>
                    </div >
                    <button type="submit" className=" btn btn-primary" hidden={detailPage}>
                        Save
            </button>
                    <button type="reset" className=" btn btn-secondary" hidden={detailPage} >
                        Reset form
            </button>
                    <button type="button" className=" btn btn-primary" onClick={() => navigateToLists()} hidden={detailPage}>See lists</button>
                </form >
            </Col>
        </Container>

    )
}
const getSelectOptions = () => {
    return nationalities.map((eachNationality, index) => {
        return (
            <option key={index} value={eachNationality}>{eachNationality}</option>
        )
    })
}
