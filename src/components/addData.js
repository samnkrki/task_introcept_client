import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

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
    const [detailPage, setDetailPage] = useState(false)
    const history = useHistory();
    useEffect(() => {
        if (props.details) {
            setDetailPage(true)
            setUser({ ...props.details })
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
    const navigateToLists = () => {
        history.push("/users");
    }

    return (
        <Jumbotron fluid>
            <form className="" onSubmit={() => checkValidityAndSubmit()}>
                <h2 hidden={detailPage}>Add Details here</h2>
                <div className="form-group">
                    <label className="label" htmlFor="name">Full Name</label>
                    <input type="text" className="form-control" value={user.name} onChange={event => setUser({ ...user, name: event.target.value })}
                        name="name" disabled={detailPage} />
                </div >
                <div className="form-group">
                    <label className="label" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" value={user.email} onChange={event => setUser({ ...user, email: event.target.value })}
                        name="email" disabled={detailPage} />
                </div >
                <div className="form-group">
                    <label className="label" htmlFor="educationBackground">Education Background</label>
                    <textarea type="text" className="form-control" disabled={detailPage}
                        name="educationBackground" value={user.educationBackground} onChange={event => setUser({ ...user, educationBackground: event.target.value })} />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="gender">Gender</label><br />
                    <input type="radio" id="male" name="gender" value="male" checked={user.gender === "male"} onChange={event => setUser({ ...user, gender: event.target.value })} disabled={detailPage} />
                    <label htmlFor="male">Male</label><br />
                    <input type="radio" id="female" name="gender" value="female" checked={user.gender === "female"} onChange={event => setUser({ ...user, gender: event.target.value })} disabled={detailPage} />
                    <label htmlFor="female">Female</label><br />
                    <input type="radio" id="other" name="gender" value="other" checked={user.gender === "other"} onChange={event => setUser({ ...user, gender: event.target.value })} disabled={detailPage} />
                    <label htmlFor="other">Other</label>
                </div >
                <div className="form-group">
                    <label className="label" htmlFor="dob">Date Of Birth</label>
                    <input type="date" className=" form-control"
                        name="dob" value={user.dob} onChange={event => setUser({ ...user, dob: event.target.value })} disabled={detailPage} />
                </div >
                <div className="form-group">
                    <label className="label" htmlFor="phone">Phone</label>
                    <input type="tel" className=" form-control"
                        name="phone" value={user.phone} onChange={event => setUser({ ...user, phone: event.target.value })} disabled={detailPage} />
                </div >
                <div className="form-group">
                    <label className="label" htmlFor="address">Address</label>
                    <input type="text" className=" form-control"
                        name="address" value={user.address} onChange={event => setUser({ ...user, address: event.target.value })} disabled={detailPage} />
                </div >
                <div className="form-group">
                    <label className="label" htmlFor="nationality">Nationality</label>
                    <input type="text" className=" form-control"
                        name="Nationality" value={user.nationality} onChange={event => setUser({ ...user, nationality: event.target.value })} disabled={detailPage} />
                </div >
                <div className="form-group">
                    <label className="label" htmlFor="prefContactMode">Preferred Contact Mode</label><br />
                    <input type="radio" id="email_pref" name="prefContactMode" value="email" checked={user.prefModeContact === "email"} onChange={event => setUser({ ...user, prefModeContact: event.target.value })} disabled={detailPage} />
                    <label htmlFor="email_pref">Email</label><br />
                    <input type="radio" id="phone_pref" name="prefContactMode" value="phone" checked={user.prefModeContact === "phone"} onChange={event => setUser({ ...user, prefModeContact: event.target.value })} disabled={detailPage} />
                    <label htmlFor="phone_pref">Phone</label><br />
                    <input type="radio" id="none_pref" name="prefContactMode" value="none" checked={user.prefModeContact === "none"} onChange={event => setUser({ ...user, prefModeContact: event.target.value })} disabled={detailPage} />
                    <label htmlFor="none_pref">None</label>
                </div >
                <button type="submit" className=" btn btn-primary" hidden={detailPage}>
                    Save
            </button>
                <button type="reset" className=" btn btn-secondary" hidden={detailPage} >
                    Reset form
            </button>
                <button type="button" className=" btn btn-secondary" onClick={() => navigateToLists()} hidden={detailPage}>See lists</button>
            </form >
        </Jumbotron>
    )
}
