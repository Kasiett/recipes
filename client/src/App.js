import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import RecipesList from './components/RecipesList';
import RecipePage from './pages/RecipePage';
import NotFound from './pages/NotFound';
import AddRecipe from './pages/AddRecipe';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [type, setType] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header setType={setType} />}>
          <Route index element={<RecipesList type={type} />} />
          <Route path="/:recipeId" element={<RecipePage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
