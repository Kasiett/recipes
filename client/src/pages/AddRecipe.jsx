export default function AddRecipe() {
  //handleSubmit function
  //   async function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     const formData = new FormData(event.target);
  //     console.log('formData -> ', formData)
  //     const res = await fetch('/api/uploads', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     if (!res.ok) {
  //       throw new Error(`Error ${res.status}`);
  //     }
  //     const data = await res.json();

  //     console.log('data::', data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // on form => onSubmit={handleSubmit}
  return (
    <>
      <h2 className="center-title"> Add a recipe:</h2>
      <div className="form-wrapper">
        <form>
          <div className="col-left">
            <label>
              <input
                className="input-one"
                placeholder="title"
                type="text"
                required
              />
            </label>

            <label>
              <input
                required
                className="input-one"
                placeholder="subtitle"
                type="text"
              />
            </label>

            <select required className="input-select" id="recipe-type">
              <option value="type">Select type</option>
              <option value="salad">Salads</option>
              <option value="entree">Entrees</option>
              <option value="smoothie">Smoothies</option>
              <option value="drink">Drinks</option>
            </select>

            <label>
              <input
                required
                className="form-ingredients"
                placeholder="ingredients"
                type="text"
              />
              <button className="form-add-btn">Add</button>
            </label>

            <label>
              <input
                required
                className="form-instructions"
                placeholder="instructions"
                type="text"
              />
              <button className="form-add-btn">Add</button>
            </label>

            <label>
              <textarea
                required
                placeholder="Type recipe description..."
                id="description"
                rows="4"
                cols="50"
                className="form-description"></textarea>
            </label>

            <label htmlFor="upload-file" className="form-upload">
              Upload a recipe photo:
              <div className="input-upload-wrapper">
                <input
                  required
                  className="input-upload"
                  type="file"
                  id="recipe-photo"
                  name="upload-file"
                  accept="image/png, image/jpeg"></input>
              </div>
            </label>
          </div>
          <div className="col-right">
            <label className="input-notes">
              <input className="input-one" placeholder="notes" type="text" />
            </label>

            <label>
              <input
                className="input-one"
                placeholder="servings"
                type="number"
              />
            </label>
            <label className="input-notes">
              <input className="input-one" placeholder="facts" type="text" />
            </label>

            <div className="ul-wrapper">
              <ul className="ul-instructions">
                <h3>Directions: </h3>
                <li>1 banana</li>
                <li>2 banana</li>
                <li>3 banana</li>
              </ul>
              <ul className="ul-ingredients">
                <h3>Ingredients: </h3>
                <li>1 banana</li>
                <li>2 banana</li>
                <li>3 banana</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </>
  );
}
