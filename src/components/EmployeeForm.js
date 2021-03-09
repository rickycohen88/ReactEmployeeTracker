import React, {Component} from "react";

class EmployeeForm extends Component{
    // set forms initial state
    state = {
        firstName:"",
        lastName:"",
        jobTitle:"",
        department:"",
        manager:"",
        db:{}
        
    };

    handleInputChanges = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    handleSubmitForm = event => {
        event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } 

    else {    
      let dbObject;
        // create a new db request for a "budget" database.
        const request = indexedDB.open("budget", 1);
        
        request.onupgradeneeded = function(event) {
           // create object store called "pending" and set autoIncrement to true
          const db = event.target.result;
          db.createObjectStore("reactEmployees", { autoIncrement: true });
        };
        
        request.onsuccess = function(event) {
          dbObject=event.target.result;
        };

        this.setState({db:dbObject});
        
        request.onerror = function(event) {
          console.log("Woops! " + event.target.errorCode);
        };
      alert(`${this.state.firstName} ${this.state.lastName} has been added to the roster.`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      jobTitle:"",
      department:"",
      manager:""
    });

    function saveRecord(record) {
      // create a transaction on the pending db with readwrite access
      const transaction = this.state.db.transaction(["reactEmployees"], "readwrite");
    
      // access your pending object store
      const store = transaction.objectStore("reactEmployees");
    
      // add record to your store with add method.
      store.add(record);
    }

  };

    

    render(){
        return (
            <div>
                <p>Please Enter the informantion for the employee you wish to add</p>
                <form className="form">
                    <input
                    value={this.state.firstName}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={this.handleInputChanges}
                    />
                    <input
                    value={this.state.lastName}
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={this.handleInputChanges}
                    />
                    <input
                    value={this.state.title}
                    name="jobTitle"
                    type="text"
                    placeholder="Job Title"
                    onChange={this.handleInputChanges}
                    />
                    <input
                    value={this.state.department}
                    name="department"
                    type="text"
                    placeholder="Department"
                    onChange={this.handleInputChanges}
                    />
                    <input
                    value={this.state.manager}
                    name="Manager"
                    type="text"
                    placeholder="Manager Name"
                    onChange={this.handleInputChanges}
                    />
                    <button onClick={this.handleSubmitForm}>Submit</button>
                </form>
            </div>
        );
    }//end of render
}//end of class
export default EmployeeForm;