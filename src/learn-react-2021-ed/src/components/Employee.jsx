/* eslint-disable react/prop-types */
const Employee = ({ firstName, lastName, age }) => {
  //console.log(props);
  return (
    <div>
      <h1>
        Employee name: {firstName} {lastName} Who is age: {age}
      </h1>
    </div>
  );
}

export default Employee;