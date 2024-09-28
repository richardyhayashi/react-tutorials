import Employee from "./components/Employee";

const employeeInfo = [
    {
      firstName: "Jack",
      lastName: "Smith",
      age: 21,
    },
    {
      firstName: "Stephanie",
      lastName: "Brown",
      age: "21",
    },
    {
      firstName: "George",
      lastName: "Clark",
      age: "21",
    },
    {
      firstName: "Anthony",
      lastName: "Johnson",
      age: "21",
    },
  ];

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        {employeeInfo.map((employee, key) => {
          return (
            <Employee key={key} {...employee} />
          );
        })}
      </header>
    </div>
  );
}

export default App;
