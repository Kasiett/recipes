import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import ResipesList from './components/RecipesList';

function App() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    async function readRecipes() {
      const resp = await fetch('/api/recipes');
      const data = await resp.json();

      console.log('Data from server:', data);

      setRecipes(data);
    }

    readRecipes();
  }, []);

  return (
    <div className="App">
      <Header />
      <ResipesList recipes={recipes} />
    </div>
  );
}

export default App;
