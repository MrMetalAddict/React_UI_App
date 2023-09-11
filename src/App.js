import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import { click } from "@testing-library/user-event/dist/click";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonFunction />
        <Profile />
        <ShoppingList />
      </header>
    </div>
  );
}

function ButtonFunction() {
  //const [count, setCount] = useState(0);

  function handleClick() {
   // alert(`You clicked the button. Count: ${count}`);
   // setCount(count + 1);
  }

  return (
    <div>
      <button className="Button" onClick={handleClick}>X</button>
    </div>
  );
}



const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
    {product.title}
    </li>
  );
  return (  
    <ul className="ShoppingList">{listItems}</ul>
  );
}

export default App;
