import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// a function can be defined as const as well
const Footer = () => {
  return <footer>&copy; 2018</footer>;
};
function App() {
  //we can add properties like name etc and objects as well
  const data = {
    age: 26,
    skills: ["a", "b"]
  };
  return (
    <div id="App">
      <Header />
      <Header />
      <Person mydata={data} name="Ulla" />
      <Person mydata={data} name="Bo" />
      <Person mydata={data} name="Ib" />
      <Footer mydata={data} name="Liv" />
    </div>
  );
}
// html components have to be closed in react
//everything in react has to have one parent (must see wrapped in a tag like div)
function Header() {
  return (
    <header>
      <h1>This is React</h1>
    </header>
  );
}
function Person(props) {
  console.log(props.name);
  return (
    <article>
      <h1>{props.name}</h1>
      <p>I'm {props.mydata.age} </p>
      <Skills skills={props.mydata.skills} />
    </article>
  );
}

function Skills(props) {
  return (
    <ul>
      <li>skills here</li>
    </ul>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
//React elements are uppercase. a mix of html and js is called JSX
