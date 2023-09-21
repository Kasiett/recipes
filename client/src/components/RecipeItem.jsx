import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { HiOutlineSave } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function RecipeItem({ recipe }) {
  const {
    recipeId,
    title,
    subtitle,
    // type,
    image,
    description,
    // ingredients,
    // instructions,
    // serves,
    // facts,
    // notes,
    // userId,
  } = recipe;
  return (
    <li className="list">
      <Link to={`/${recipeId}`}>
        <h2 className="recipe-title">{title}</h2>
      </Link>

      <p className="subtitle">{subtitle}</p>
      {/* <img className="list-img" src={strawberrySalad} alt="meal" /> */}

      <Link to={`/${recipeId}`}>
        <img className="list-img" src={image} alt="meal" />
      </Link>
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
      <div className="show-more-wrapper">
        <p className="sub-description">{description}</p>
        <Link to={`/${recipeId}`}>
          <p className="more">more</p>
        </Link>
      </div>
    </li>
  );
}
