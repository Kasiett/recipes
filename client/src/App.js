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
    // If user logged in previously on this browser, authorize them
    const auth = localStorage.getItem(tokenKey);
    if (auth) {
      setUser(auth.user);
      setToken(auth.token);
    }
    setIsAuthorizing(false);
  }, []);

  if (isAuthorizing) return null;

  function handleSignIn(auth) {
    console.log('auth:: ', JSON.stringify(auth));
    localStorage.setItem(tokenKey, auth);
    setUser(auth.user);
    setToken(auth.token);
  }

  function handleSignOut() {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
  }

  const contextValue = { user, token, handleSignIn, handleSignOut };
  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Header setType={setType} />}>
            <Route index element={<RecipesList type={type} />} />
            <Route path="/:recipeId" element={<RecipePage />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* <Route path="/log-in" element={<LogIn />} /> */}
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
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
