import React, { useState, useEffect } from 'react'

export default function AddData(props) {
    const userData = {
        _id: "",
        name: "",
        educationBackground: "",
        email: "",
        gender: "",
        dob: "",
        nationality: "",
        phone: "",
        prefModeContact: "",
        address: "",
    }
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(userData)
    useEffect(() => {
        if (props.details) {
            setUser(props.details)
        }
    }, [])
    const checkValidityAndSubmit = async () => {
        console.log(user)
        setLoading(true)
        const url = "http://localhost:3001"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        let res = response.json()
        res.then(result => {
            console.log(result)
            setLoading(false)
        })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })

    }

    return (
        <form className="userForm" onSubmit={() => checkValidityAndSubmit()}>
            {/* <h2>Add Details here</h2> */}
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" value={user.name.value} onChange={event => setUser({ ...user, name: event.target.value })}
                    name="name" />
            </div >
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" value={user.email.value} onChange={event => setUser({ ...user, email: event.target.value })}
                    name="email" />
            </div >
            <div className="form-group">
                <label htmlFor="educationBackground">Education Background</label>
                <textarea type="text" className="form-control"
                    name="educationBackground" value={user.educationBackground.value} onChange={event => setUser({ ...user, educationBackground: event.target.value })} />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender</label><br />
                <input type="radio" id="male" name="gender" value="male" onChange={event => setUser({ ...user, gender: event.target.value })} />
                <label htmlFor="male">Male</label><br />
                <input type="radio" id="female" name="gender" value="female" onChange={event => setUser({ ...user, gender: event.target.value })} />
                <label htmlFor="female">Female</label><br />
                <input type="radio" id="other" name="gender" value="other" onChange={event => setUser({ ...user, gender: event.target.value })} />
                <label htmlFor="other">Other</label>
            </div >
            <div className="form-group">
                <label htmlFor="dob">Date Of Birth</label>
                <input type="date" className=" form-control"
                    name="dob" value={user.dob.value} onChange={event => setUser({ ...user, dob: event.target.value })} />
            </div >
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className=" form-control"
                    name="phone" value={user.phone.value} onChange={event => setUser({ ...user, phone: event.target.value })} />
            </div >
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className=" form-control"
                    name="address" value={user.address.value} onChange={event => setUser({ ...user, address: event.target.value })} />
            </div >
            <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <input type="text" className=" form-control"
                    name="Nationality" value={user.nationality.value} onChange={event => setUser({ ...user, nationality: event.target.value })} />
            </div >
            <div className="form-group">
                <label htmlFor="prefContactMode">Preferred Contact Mode</label><br />
                <input type="radio" id="email_pref" name="prefContactMode" value="email" onChange={event => setUser({ ...user, prefModeContact: event.target.value })} />
                <label htmlFor="email_pref">Email</label><br />
                <input type="radio" id="phone_pref" name="prefContactMode" value="phone" onChange={event => setUser({ ...user, prefModeContact: event.target.value })} />
                <label htmlFor="phone_pref">Phone</label><br />
                <input type="radio" id="none_pref" name="prefContactMode" value="none" onChange={event => setUser({ ...user, prefModeContact: event.target.value })} />
                <label htmlFor="none_pref">None</label>
            </div >
            <button type="submit" className=" btn btn-primary" >
                Save
            </button>
            <button type="reset" className=" btn btn-secondary" >
                Reset form
        </button>
        </form >
    )
}