import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { HiOutlineSave } from 'react-icons/hi';
import RecipeItem from './RecipeItem';
import { useParams } from 'react-router-dom';

export default function RecipesList({ type }) {
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

  const recipe = recipes && recipes[0];

  let filterRecipe = () => {
    if (type) {
      return recipes.filter((item) => item.type === type);
    }
    return recipes;
  };

  return (
    <>
      <ul className="resipes-list ">
        {filterRecipe()?.map((recipe) => (
          <RecipeItem key={recipe?.recipeId} recipe={recipe} />
        ))}
      </ul>
    </>
  );
}
