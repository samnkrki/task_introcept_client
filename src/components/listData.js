import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal } from 'react-bootstrap'
import AddData from './addData';

export default function ListData() {
    const [userList, setUserList] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const options = {
        paginationSize: 4,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
    }
    useEffect(() => {
        const url = "http://localhost:3001"
        fetchList(url)
    }, [])

    const fetchList = async (url) => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let res = response.json()
        res
            .then(data => {
                if (data.success == true) {
                    setUserList([...data.data])
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

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
            text: 'Education Background'
        },
        {
            dataField: 'dob',
            text: 'Date of Birth'
        },
        {
            dataField: 'address',
            text: 'Address'
        },
        {
            dataField: 'prefModeContact',
            text: 'Preferred Mode of Contact'
        }, {
            dataField: 'df1',
            text: "Action",
            formatter: (cellContent, row) => {
                return (
                    <button onClick={() => clickToSeeAll(cellContent, row)}>See all</button>
                )
            }
        }

    ];

    const clickToSeeAll = (cellContent, row) => {
        console.log(row, cellContent)
        handleShow()
    }
    return (
        <>
            <BootstrapTable
                data={userList}
                columns={columns}
                keyField='_id'
                noDataIndication={noDataText()}
                pagination={paginationFactory(options)}

            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>View Details</Modal.Title>
                </Modal.Header>
                <Modal.Body><AddData /></Modal.Body>
            </Modal>
        </>

    )
}

const noDataText = () => {
    return (
        <div>Empty! Add data to see them here.</div>
    )
}