import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  //objects
  const data = [
    {
      name: "Jonas",
      hobbies: ["js", "beer"],
      email: "jofh@kea.dk",
      kids: 3
    },
    {
      name: "Peter",
      hobbies: ["js", "cats"],
      email: "petl@kea.dk",
      kids: 0
    },
    {
      name: "Ida",
      hobbies: ["sprints", "business"],
      email: "idwh@kea.dk",
      kids: 1
    }
  ];
  //map method used to apply data to teacher object

  const teachers = data.map(teacher => {
    // below spread method spreads data
    return <Teacher {...teacher} />;
  });
  /*const test = [
    //we need to turn this data into data like above and then render it
    <Teacher name="Ole" email="a@a" />,
    <Teacher name="Bo" email="b@a" />
  ];*/
  return (
    <div id="App">
      <header>Header</header>
      {teachers}
      <footer>Footer</footer>
    </div>
  );
}
function Teacher(props) {
  // below is like a template (inside articles)
  return (
    <articles>
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      <h2>Hobbies</h2>
    </articles>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
