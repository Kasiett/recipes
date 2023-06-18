export default function AddRecipe() {
  return (
    <>
      <h2>Add Recipe:</h2>
      <div className="form-wrapper">
        <form>
          <div className="col-left">
            <label>
              <input className="input-one" placeholder="title" type="text" />
            </label>

            <label>
              <input className="input-one" placeholder="subtitle" type="text" />
            </label>

            <select className="input-select" id="recipe-type">
              <option value="type" disabled selected>
                Select type
              </option>
              <option value="salad">Salad</option>
              <option value="entree">Entree</option>
              <option value="smoothie">Smoothie</option>
              <option value="drink">Drink</option>
            </select>

            <label>
              <input
                className="form-ingredients"
                placeholder="ingredients"
                type="text"
              />
              <button className="form-add-btn">Add</button>
            </label>

            <label>
              <input
                className="form-instructions"
                placeholder="instructions"
                type="text"
              />
              <button className="form-add-btn">Add</button>
            </label>

            <label>
              <textarea
                placeholder="Type recipe description..."
                id="description"
                rows="4"
                cols="50"
                className="form-description"></textarea>
            </label>

            <label for="upload-file" className="form-upload">
              Upload a recipe photo:
              <input
                type="file"
                id="recipe-photo"
                name="upload-file"
                accept="image/png, image/jpeg"></input>
            </label>
          </div>
          <div className="col-right">
            <label>
              <input className="input-one" placeholder="notes" type="text" />
            </label>

            <label>
              <input className="input-one" placeholder="serves" type="number" />
            </label>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
