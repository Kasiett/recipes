import { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';

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

  let filterRecipe = () => {
    if (type) {
      return recipes.filter((item) => item.type === type);
    }
    return recipes;
  };

  return (
    <>
      <ul className="recipes-list ">
        {filterRecipe()?.map((recipe) => (
          <RecipeItem key={recipe?.recipeId} recipe={recipe} />
        ))}
      </ul>
    </>
  );
}
