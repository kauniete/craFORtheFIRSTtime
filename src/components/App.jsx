import React from "react";
import Teacher from "./Teacher"; //moved here from index.js as it used here
export default function App() {
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
