import React, { Component } from 'react';
import axios from 'axios';
import PersonsTable from './PersonsTable';
import PersonsCard from './PersonsCard';

const Spinner = () => (
    <div>
        Spinner
  </div>
)


class Main extends Component {

    state = {
        persons: [],
        isLoading: true,
        viewState: false,
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                const persons = res.data;
                this.setState({
                    persons: persons.results,
                    isLoading: false,
                });
            })
    }

    handleChangeView(type) {
        this.setState({
            viewState: type
        })
    }

    render() {


        if (this.state.isLoading) {
            return <Spinner />
        }

        switch (this.state.viewState) {
            case 'table':
                return <div>
                    <button className='changeViewButton' onClick={() => this.handleChangeView('cards')}>changeView</button>

                    <PersonsTable personList={this.state.persons} />
                </div>
            case 'cards':
                return <div>

                    <div className='cards'>
                        {
                            this.state.persons.map(person => (
                                <PersonsCard personCard={person} />
                            ))
                        }
                    </div>
                    <div className='changeViewButton'>
                        <button onClick={() => this.handleChangeView('table')}>changeView</button>
                    </div>
                </div >
            default:
                return <div>
                    <PersonsTable personList={this.state.persons} />
                    <div className='changeViewButton'>
                        <button onClick={() => this.handleChangeView('cards')}>changeView</button>
                    </div>
                </div>
        }
    }
}

export default Main;