import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRecipe } from '../api/api';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { HiOutlineSave } from 'react-icons/hi';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadRecipe(recipeId) {
      try {
        const recipe = await fetchRecipe(recipeId);
        setRecipe(recipe);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadRecipe(recipeId);
  }, [recipeId]);

  if (!recipe) {
    return 'Loading...';
  }

  const {
    title,
    subtitle,
    type,
    imageUrl,
    description,
    ingredients,
    instructions,
    notes,
    userId,
    serves,
  } = recipe;

  return (
    <div className="recipe-page-wrapper">
      <div className="column-left">
        <h2>{title}</h2>
        <h4 className="subtitle">{subtitle}</h4>
        <img className="recipe-page-img" src={imageUrl} alt="meal" />

        <div className="list-icons">
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <p className="rate-count">(1444)</p>
          </div>
          <div className="save-like-icons">
            <FaRegComment className="icon-right" />
            <FaRegHeart className="icon-right" />
            <HiOutlineSave className="icon-right" />
          </div>
        </div>
        <p className="like-count">144 people liked this recipe</p>
      </div>
      <div className="column-right">
        <ul>
          <h3>Ingredients:</h3>
          {ingredients.map((ingredient, index) => {
            return <li key={ingredient + index}>{ingredient}</li>;
          })}
        </ul>
        <ul>
          <h3>Directions</h3>
          {instructions.map((instruction, index) => {
            return (
              <li key={instruction + index} className="instructions">
                <label>
                  <input type="checkbox" />
                  {instruction}
                </label>
              </li>
            );
          })}
        </ul>
        <p>
          <em>Serves: {serves}</em>
        </p>
        <h4>Facts:</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
