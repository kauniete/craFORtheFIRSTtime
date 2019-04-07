import React from "react";
export default function Teacher(props) {
  // below is like a template (inside articles)
  return (
    //className added below, as class is a reserved word in js
    <article className="teacher">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      <h2>Hobbies</h2>
    </article>
  );
}
