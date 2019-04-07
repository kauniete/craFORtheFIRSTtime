import React from "react";
export default function Teacher(props) {
  /*let car = ""; //""means equal to nothing
  if (props.car) {
    car = <p>Car: {props.car}</p>;
  }*/ //above in one way to do it, below-another

  //const car = props.car ? <p>Car: {props.car}</p> : ""; //if statement

  //below header one more way to do it
  return (
    <article className="teacher">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      {props.car && <p>Car: {props.car}</p>}
      <h2>Hobbies</h2>
    </article>
  );
}

/* people use impossible if statements like this in react (2>4 && age==23){
}*/
