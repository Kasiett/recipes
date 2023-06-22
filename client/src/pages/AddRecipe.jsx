import { useState, useContext } from 'react';
import AppContext from '../components/AppContext';
import { useNavigate } from 'react-router-dom';

export default function AddRecipe() {
  const navigate = useNavigate();
  const [ingredientsValue, setIngredientsValue] = useState('');
  const [instructionsValue, setInstructionsValue] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const { user } = useContext(AppContext);

  // handleSubmit function
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const formDataProperties = Object.fromEntries(formData.entries());
      console.log('formData', formData);
      console.log('formDataProp', formDataProperties);
      const payload = {
        formDataProperties: {
          ...formDataProperties,
          ingredients,
          instructions,
          userId: user.userId,
        },
      };

      console.log('payload:: ', payload);
      const res = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log(res);
      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }
      const data = await res.json();

      console.log('data::', data);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  }

  console.log('ingredients -> ', ingredients);
  console.log('instructions -> ', instructions);

  function handleIngredients(event) {
    event.preventDefault();
    ingredientsValue.length > 0 &&
      setIngredients((prev) => [...prev, ingredientsValue]);
    setIngredientsValue('');
  }
  function handleInstructions(event) {
    event.preventDefault();
    setInstructions((prev) => [...prev, instructionsValue]);
    setInstructionsValue('');
  }

  return (
    <>
      <h2 className="center-title"> Add a recipe:</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="col-left">
            <label>
              <input
                name="title"
                className="input-one"
                placeholder="title"
                type="text"
                required
              />
            </label>

            <label>
              <input
                name="subtitle"
                required
                className="input-one"
                placeholder="subtitle"
                type="text"
              />
            </label>

            <select
              name="type"
              required
              className="input-select"
              id="recipe-type">
              <option value="type">Select type</option>
              <option value="salad">Salads</option>
              <option value="entree">Entrees</option>
              <option value="smoothie">Smoothies</option>
              <option value="drink">Drinks</option>
            </select>

            <label>
              <input
                name="ingredients"
                value={ingredientsValue}
                onChange={(e) => setIngredientsValue(e.target.value)}
                className="form-ingredients"
                placeholder="ingredients"
                type="text"
              />
              <button className="form-add-btn" onClick={handleIngredients}>
                Add
              </button>
            </label>

            <label>
              <input
                name="instructions"
                value={instructionsValue}
                onChange={(e) => setInstructionsValue(e.target.value)}
                className="form-instructions"
                placeholder="instructions"
                type="text"
              />
              <button onClick={handleInstructions} className="form-add-btn">
                Add
              </button>
            </label>

            <label>
              <textarea
                name="description"
                required
                placeholder="Type recipe description..."
                id="description"
                rows="4"
                cols="50"
                className="form-description"></textarea>
            </label>

            <label htmlFor="recipe-photo" className="form-upload">
              Upload a recipe photo:
              <div className="input-upload-wrapper">
                <input
                  required
                  className="input-upload"
                  type="file"
                  id="recipe-photo"
                  name="imageUrl"
                  accept="image/png, image/jpeg"></input>
              </div>
            </label>
          </div>
          <div className="col-right">
            <label className="input-notes">
              <input
                name="notes"
                className="input-one"
                placeholder="notes"
                type="text"
              />
            </label>

            <label>
              <input
                name="serves"
                className="input-one"
                placeholder="serves"
                type="number"
              />
            </label>
            <label className="input-notes">
              <input
                name="facts"
                className="input-one"
                placeholder="facts"
                type="text"
              />
            </label>

            <div className="ul-wrapper">
              {ingredients.length > 0 && (
                <ul className="ul-ingredients">
                  <h3>Ingredients: </h3>
                  {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {instructions.length > 0 && (
                <ul className="ul-instructions">
                  <h3>Instructions: </h3>
                  {instructions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
