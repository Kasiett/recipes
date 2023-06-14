import { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import './App.css';

function App() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/recipes');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <nav>
          <h1 className="upper-logo">PlantPower</h1>

          <ul className="nav-bar">
            <BiSearchAlt className="li-nav-bar icon-search" />
            <FaUserCircle className="li-nav-bar icon-user" />
            <li className="li-nav-bar">
              <a className="log-in" href="#">
                Log in
              </a>
            </li>
            <li className="li-nav-bar border-left">
              <a href="#">Popular</a>
            </li>
            <li className="li-nav-bar border-left">
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
        <ul className="sortby">
          <li>
            <a href="#">Salads</a>
          </li>
          <li>
            <a href="#">Entree</a>
          </li>
          <li>
            <a href="#">Smoothies</a>
          </li>
          <li>
            <a href="#">Drinks</a>
          </li>
        </ul>
      </div>
      <div className="log-out-box"> Log out</div>
    </div>
  );
}

export default App;
