import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import pg from 'pg';

// eslint-disable-next-line no-unused-vars -- Remove when used
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/recipes', async (req, res) => {
  try {
    const sql = `
  select *
    from "recipes"`;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/recipes', async (req, res) => {
  // http -v post localhost:8080/api/recipes title='testDish1' type='salad' imageUrl='ing url' description='Fresh fruit focused salad' ingredients:='["1 banana", "2 banana", "3 banana"]' instructions:='["1 banana", "2 banana", "3 banana"]' notes='Buon appetite!' userId='2'
  try {
    const {
      title,
      type,
      imageUrl,
      description,
      ingredients,
      instructions,
      notes,
      userId,
    } = req.body;
    if (
      !title ||
      !type ||
      !imageUrl ||
      !description ||
      !ingredients ||
      !instructions ||
      !notes ||
      !userId
    ) {
      res.status(400).json({ error: 'all fields are required!' });
      return;
    }
    const sql = `
    insert into "recipes" ("title", "type", "imageUrl", "description", "ingredients", "instructions", "notes", "userId")
           values ($1, $2, $3, $4, $5, $6, $7, $8)
           returning *
    `;

    const params = [
      title,
      type,
      imageUrl,
      description,
      ingredients,
      instructions,
      notes,
      userId,
    ];
    const result = await db.query(sql, params);
    const [recipes] = result.rows;
    res.status(201).json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.patch('/api/recipes/:recipeId', async (req, res) => {
  // http -v patch localhost:8080/api/recipes/2 title='DishMish' type='salad' imageUrl='ing url' description='Fresh fruit focused salad' ingredients:='["1 banana", "2 banana", "3 banana"]' instructions:='["1 banana", "2 banana", "3 banana"]' notes='Buon appetite!' userId='2'

  try {
    const recipeId = Number(req.params.recipeId);
    if (!Number.isInteger(recipeId) || recipeId < 1) {
      res.status(400).json({ error: 'resipeId must be a positive integer' });
      return;
    }
    const {
      title,
      type,
      imageUrl,
      description,
      ingredients,
      instructions,
      notes,
    } = req.body;
    if (
      !title ||
      !type ||
      !imageUrl ||
      !description ||
      !ingredients ||
      !instructions ||
      !notes
    ) {
      res
        .status(400)
        .json({ error: 'at least one filled has to be provided!' });
      return;
    }
    const sql = `
  UPDATE "recipes"
  SET "title" = $1,
      "type" = $2,
      "imageUrl" = $3,
      "description" = $4,
      "ingredients" = $5,
      "instructions" = $6,
      "notes" = $7
  WHERE "recipeId" = $8
  RETURNING *
`;

    const params = [
      title,
      type,
      imageUrl,
      description,
      ingredients,
      instructions,
      notes,
      recipeId,
    ];
    const result = await db.query(sql, params);
    const [recipe] = result.rows;
    if (!recipe) {
      res
        .status(404)
        .json({ error: `cannot find todo with todoId ${recipeId}` });
      return;
    }
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.delete('/api/recipes/:recipeId', async (req, res, next) => {
  try {
    const recipeId = Number(req.params.recipeId);
    if (!Number.isInteger(recipeId) || recipeId < 1) {
      res.status(400).json({ error: 'resipeId must be a positive integer' });
    }
    const sql = `
    delete from "recipes"
    where "recipeId" = $1
    returning *`;

    const params = [recipeId];
    const result = await db.query(sql, params);
    const [deletedRecipe] = result.rows;
    if (!deletedRecipe) {
      res
        .status(404)
        .json({ error: `cannot find recipe with recipeId ${recipeId}` });
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
});

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Create React App server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
