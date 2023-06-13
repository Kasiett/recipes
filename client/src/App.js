import { useEffect, useState } from 'react';
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

  return <div className="App">hello Benny!</div>;
}

export default App;
