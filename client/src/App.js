import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import RecipesList from './components/RecipesList';
import RecipePage from './pages/RecipePage';
import NotFound from './pages/NotFound';
import AddRecipe from './pages/AddRecipe';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import AppContext from './components/AppContext';

import Auth from './pages/AuthPage';
import { useState, useEffect } from 'react';

const tokenKey = 'react-context-jwt';

function App() {
  const [type, setType] = useState('');
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [isAuthorizing, setIsAuthorizing] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem(tokenKey);
    if (auth) {
      const { user, token } = JSON.parse(auth);
      setUser(user);
      setToken(token);
    }
    setIsAuthorizing(false);
  }, []);

  if (isAuthorizing) return null;

  function handleSignIn(auth) {
    localStorage.setItem(tokenKey, JSON.stringify(auth));
    setUser(auth.user);
    setToken(auth.token);
  }

  function handleSignOut() {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
  }

  const contextValue = { user, token, handleSignIn, handleSignOut }; // Context value allows components to access and use these values
  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Header setType={setType} />}>
            <Route index element={<RecipesList type={type} />} />
            <Route path="/:recipeId" element={<RecipePage />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="sign-in" element={<Auth action="sign-in" />} />
            <Route path="sign-up" element={<Auth action="sign-up" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
