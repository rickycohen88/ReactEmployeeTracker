function Search(props) {
    return (
        <div className="search">
            <h2>Search For Individuals By:</h2>
            <form className="form-inline">
                <p>Last Name:</p>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={props.handleInputChange} name="lastName" placeholder="Last Name"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={props.handleLastNameSearch}>Search</button>
            </form>
            <form className="form-inline">
                <p>First Name:</p>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={props.handleInputChange} name="firstName" placeholder="First Name"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={props.handleFirstNameSearch}>Search</button>
            </form>
        </div>
    )
}

function Sort(props) {
    return (
        <div className="sort">
            <div className="row">
                <h2 className="col-md-12">Sort Directory By:</h2>
            </div>
            <div className="row">
                <div className="btn-group-vertical col-md-12" data-toggle="buttons">
                    <label className="form-check-label" htmlFor="firstNameSorted" >
                        <input className="toggle" type="radio" name="flexRadio" id="firstNameSorted" onClick={props.handleSort}></input>
                    First Name Alphabetically
                    </label>
                    <label className="form-check-label" htmlFor="lastNameSorted" >
                        <input className="toggle" type="radio" name="flexRadio" id="lastNameSorted" onClick={props.handleSort}></input>
                    Last Name Alphabetically
                    </label>
                </div>
            </div>
        </div>
    )
}
export {Sort,Search};

