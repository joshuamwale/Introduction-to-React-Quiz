import React from "react";
import logo from './logo.svg';
import './App.css';
import Users from "./Users";

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const myList = users.map((user) => {
  return (<Users key={Users.id} name={Users.name}/>
    )
})


// comment this out after completion and uncomment code below it to proceed
function Child() {
  return <div>This is children content</div>;
}
/**
  Challenge: Uncomment this code to complete quiz

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
Uncomment this to tackle quiz
**/

// Comment out after completion
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
// Comment above code after completion

function App() {
  const [] = React.useState(true);
  return (
    
    <>
    <p>JSX is cool</p>
    <img src={"https://nation.africa/resource/image/3883034/landscape_ratio2x1/960/480/ba95797be6ca354d185d744bd32c8468/GK/nairobi-expressway.jpg"} className="App-logo" alt="Nairobi skyline" />

      <h3>User names {myList}</h3>
      <ul>
        
      </ul>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
