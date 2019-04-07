import React from "react";
import Teacher from "./Teacher"; //moved here from index.js as it used here
export default function App() {
  //objects
  const data = [
    {
      id: 2,
      name: "Jonas",
      hobbies: ["js", "beer"],
      email: "jofh@kea.dk",
      kids: 3
    },
    {
      id: 343,
      name: "Peter",
      hobbies: ["js", "cats"],
      email: "petl@kea.dk",
      kids: 0
    },
    {
      id: 55,
      name: "Ida",
      hobbies: ["sprints", "business"],
      email: "idwh@kea.dk",
      kids: 1
    }
  ];
  //map method used to apply data to teacher object

  const teachers = data.map(teacher => {
    // below spread method spreads data
    return <Teacher key={teacher.id} {...teacher} />; //added id above on const data and teacher.id here, has to be unique, could be email
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
