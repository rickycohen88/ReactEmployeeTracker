function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr className="tableHead">
          <th>Portrait:</th>
          <th>First Name:</th>
          <th>Last Name:</th>
          <th>Email:</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee) => (
          <tr key={employee.email}>
              <td>
                <img alt="portrait" src={employee.picture.thumbnail}></img>
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
