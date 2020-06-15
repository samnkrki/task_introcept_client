import React from 'react'

export default function AddData() {
    const userData = {
        name: { value: "", valid: true },
        educationBackground: { value: "", valid: true },
        email: { value: "", valid: true },
        gender: { value: "", valid: true },
        dob: { value: "", valid: true },
        nationality: { value: "", valid: true },
        phone: { value: "", valid: true },
        prefModeContact: { value: "", valid: true },
    }
    return (
        <form className=" demoForm">
            <h2>Add Details here</h2>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control"
                    name="email" />
            </div >
            <div className="form-group">
                <label htmlFor="educationBackground">Education Background</label>
                <textarea type="text" className="form-control"
                    name="educationBackground" />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender</label><br />
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label><br />
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label><br />
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Other</label>
            </div >
            <div className="form-group">
                <label htmlFor="dob">Date Of Birth</label>
                <input type="date" className=" form-control"
                    name="dob" />
            </div >
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className=" form-control"
                    name="phone" />
            </div >
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className=" form-control"
                    name="address" />
            </div >
            <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <input type="text" className=" form-control"
                    name="Nationality" />
            </div >
            <div className="form-group">
                <label htmlFor="prefContactMode">Preferred Contact Mode</label><br />
                <input type="radio" id="email_pref" name="prefContactMode" value="email" />
                <label for="email_pref">Email</label><br />
                <input type="radio" id="phone_pref" name="prefContactMode" value="phone" />
                <label for="phone_pref">Phone</label><br />
                <input type="radio" id="none_pref" name="prefContactMode" value="none" />
                <label for="none_pref">None</label>
            </div >
            <button type=" submit" className=" btn btn-primary">
                Submit
       </button>
        </form >
    )
}