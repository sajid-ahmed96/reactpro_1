import logo from './logo.svg';
import './App.css';

function App() {

  const mobiles = [
    {
      name: "a30",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 2000,
      brand: "samsung"
    },
    {
      name: "note10",
      ram: "6gb",
      rom: "128gb",
      camera: "50px",
      price: 4000,
      brand: "samsung"
    },
    {
      name: "s10",
      ram: "3gb",
      rom: "128gb",
      camera: "10px",
      price: 5000,
      brand: "samsung"
    },
    {
      name: "iphone4",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "iphone"
    },
    {
      name: "iphone4s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 20000,
      brand: "iphone"
    },
    {
      name: "iphone5",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "iphone"
    },
    {
      name: "iphone6",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "iphone"
    },
    {
      name: "redminote10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi"
    },
    {
      name: "redminote11",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi"
    },
    {
      name: "redmi10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi"
    },
    {
      name: "redmi10pro",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi"
    },
    {
      name: "a3s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "oppo"
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {mobiles.map((x, i) => {
          return (
            <div className='style'>
              <h1>Brand: {x.brand}</h1>
              <p>Model: {x.name}</p>
              <p>Price: {x.price}</p>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
