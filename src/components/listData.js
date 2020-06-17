import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

export default function ListData() {
    useEffect(() => {
        const url = "http://localhost:3000"
    }, [])
    const data = [
        {
            name: "",
            educationBackground: "",
            email: "",
            gender: "",
            dob: "",
            nationality: "",
            phone: "",
            prefModeContact: "",
            address: ""
        }
    ]
    const columns = [
        {
            dataField: 'name',
            text: 'Name'
        },
        {
            dataField: 'email',
            text: 'Email Address'
        },
        {
            dataField: 'gender',
            text: 'Gender'
        },
        {
            dataField: 'phone',
            text: 'Phone Number'
        },
        {
            dataField: 'nationality',
            text: 'Nationality'
        },
        {
            dataField: 'educationBackground',
            text: 'Educational Background'
        },
        {
            dataField: 'dob',
            text: 'Date of Birth'
        }
    ];

    return (
        <BootstrapTable data={data} columns={columns} keyField='email' />
    )
}