import React, { Component } from "react";
import Table from "./Table";
import Search from "./Search_Inputs";
import Sort from "./Search_Inputs"
import API from "../utils/API"

class Container extends Component {
    state = {
        initEmployees: [],
        employees: [],
        lastName: "",
        firstName: ""
    }
    componentDidMount() {
        API()
            .then(res =>
                this.setState({
                    employees: res.data.results,
                    initEmployees: res.data.results,
                })
            )
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name
        this.setState({
            [name]: value
        });
    };
   handleFirstNameSearch = event => {
        event.preventDefault();
        this.setState({
            employees: this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.state.firstName.toLowerCase()))
        });
    };

    handleLastNameSearch = event => {
        event.preventDefault();
        this.setState({
            employees: this.state.employees.filter(employee => employee.name.last.toLowerCase().includes(this.state.lastName.toLowerCase()))
        });
        console.log(this.state.initEmployees)
    };

    handleSort = event => {
        const sortMethod = event.target.id;
        switch (sortMethod) {
            case "firstNameSorted":
                this.setState({
                    employees: this.state.initEmployees.sort((a, b) => a.name.first.localeCompare(b.name.first))})
                break;
            case "lastNameSorted":
                this.setState({
                    employees: this.state.initEmployees.sort((a, b) => a.name.last.localeCompare(b.name.last))})
                break;
            default:
                this.setState({
                    employees: this.state.employees
                });
        }
    }
    render() {
        return (
            <div className="container">
                <h1 className="heading">Employee Directory</h1>
                <div className="row">
                    <div className="col-md-6">
                        <Search
                            handleInputChange={this.handleInputChange}
                            handleLastNameSearch={this.handleLastNameSearch}
                            handleFirstNameSearch={this.handleFirstNameSearch}
                        />
                    </div>
                    <div className="col-md-6">
                        <Sort
                            handleSort={this.handleSort}
                        />
                    </div>
                </div>
                <Table
                    employees={this.state.employees}
                />
            </div>
        )
    }
};

export default Container;