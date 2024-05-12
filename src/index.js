import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Pizza Paradise: Explore Our Flavors</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const len = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Pizza Menu</h2>
      {len > 0 ? (
        <>
          <p>
            Authentic Italian Cuisiene. 6 creative dishes to choose from. All
            from ousr stone over, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizaaObj={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <p>We're Curently working on our menu</p>
      )}
    </main>
  );
}
function Pizza({ pizaaObj }) {
  return (
    <li className={`pizza ${pizaaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizaaObj.photoName} alt={pizaaObj.name}></img>
      <div>
        <h3>{pizaaObj.name}</h3>
        <p>{pizaaObj.ingredients}</p>
        <span>{!pizaaObj.soldOut ? pizaaObj.price : `Sold Out`}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Open closedHour={closedHour} openHour={openHour} />
      ) : (
        `We're closed please come between ${openHour} A.M & ${closedHour} P.M`
      )}
    </footer>
  );
}
function Open({ closedHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closedHour}:00. Come visit us or Order
        online.
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
