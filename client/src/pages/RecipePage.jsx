import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRecipe } from '../lib';
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

  if (!recipe || isLoading) {
    return 'Loading...';
  }

  const {
    title,
    subtitle,
    type,
    image,
    description,
    ingredients,
    instructions,
    notes,
    userId,
    serves,
    facts,
  } = recipe;
  console.log('ingredients', ingredients);
  console.log('instructions', instructions);
  return (
    <div className="recipe-page-wrapper">
      <div className="column-left">
        <img className="recipe-page-img" src={image} alt="meal" />

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
        <ul className="recipe-page-ul">
          <h3>Ingredients:</h3>
          {ingredients.map((ingredient, index) => {
            return <li key={ingredient + index}>{ingredient}</li>;
          })}
        </ul>
        <p>
          <em>Serves: {serves}</em>
        </p>
      </div>
      <div className="column-right">
        <h2>{title}</h2>
        <h4 className="subtitle">{subtitle}</h4>
        <p>{description}</p>
        {facts && (
          <div className="facts">
            <h4>Facts:</h4>
            <p>{facts}</p>
          </div>
        )}
        <ul className="recipe-page-ul">
          <h3>Instructions</h3>
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
      </div>
    </div>
  );
}
