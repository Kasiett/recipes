import { useEffect, useState } from 'react';
import strawberrySalad from './images/strawberry-banana-salad.png';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { HiOutlineSave } from 'react-icons/hi';
import RecipeItem from './RecipeItem';

export default function RecipesList() {
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
  console.log(JSON.stringify(recipe));
  return (
    <>
      <ul className="resipes-list ">
        {recipes?.map((recipe) => (
          <RecipeItem key={recipe?.recipeId} recipe={recipe} />
        ))}
      </ul>
    </>
  );
}
