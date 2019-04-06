import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// a function can be defined as const as well
const Footer = () => {
  return <footer>&copy; 2018</footer>;
};
function App() {
  return (
    <div id="App">
      <Header />
      <Header />
      <Person />
      <Person />
      <Person />
      <Footer />
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
function Person() {
  return (
    <article>
      <h1>Jonas</h1>
      <p>Hi mom</p>
    </article>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
//React elements are uppercase. a mix of html and js is called JSX
