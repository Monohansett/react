import React, { Component } from 'react';
import ReactTable from 'react-table';

class PersonsTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentElement: {},
        }
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    render() {

        // console.log(this.props)

        const columns = [{
            Header: 'Name',
            columns: [{
                Header: 'First Name',
                accessor: 'first'
            }, {
                Header: 'Last Name',
                accessor: 'last'
            }]
        }, {
            Header: 'Location',
            columns: [{
                Header: 'City',
                accessor: 'city'
            }, {
                Header: 'State',
                accessor: 'state'
            }]
        },
        {
            Header: 'Login data',
            columns: [{
                Header: 'Login name',
                accessor: 'username'
            }, {
                Header: 'Password',
                accessor: 'password'
            }]
        }]

        const personList = this.props.personList.map(person => ({
            first: person.name.first,
            last: person.name.last,
            city: person.location.city,
            state: person.location.state,
            username: person.login.username,
            password: person.login.password
        }))
        console.log('List', personList)
        return (
            <div>
                {/* <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader text='Person' showCloseButton onClose={this.toggleModal} />
                    <ModalBody>
                        LOLOLO
                    </ModalBody>
                </Modal> */}
                <ReactTable
                    getTdProps={(state, rowInfo) => {
                        return {
                            onClick: (e) => {
                                console.log("It was in this row:", rowInfo);

                                this.setState({
                                    currentElement: rowInfo.original,
                                })
                            }
                        }
                    }}
                    className='-highlight -striped'
                    data={personList}
                    columns={columns}
                    defaultPageSize={5}
                />
            </div>
        )

    }
}


export default PersonsTable;