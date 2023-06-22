import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import pg from 'pg';
import jwt from 'jsonwebtoken';
import uploadsMiddleware from './lib/uploads-middleware.js';
import argon2 from 'argon2';
// import { ClientError} from './lib/index.js';

// eslint-disable-next-line no-unused-vars -- Remove when used
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.static('public'));
app.use(express.json());

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error(400, ' email and password are required fields');
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("email", "password")
      values ($1, $2)
      returning "userId", "email", "password"
    `;
    const params = [email, hashedPassword];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
    /* TODO:
     * Hash the user's password with `argon2.hash()`
     * Insert the user's " email" and "hashedPassword" into the "users" table.
     * Respond to the client with a 201 status code and the new user's "userId", " email", and "createdAt" timestamp.
     * Catch any errors.
     *
     * Hint: Insert statements can include a `returning` clause to retrieve the insterted row(s).
     */
  } catch (err) {
    next(err);
  }
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    console.log('req.body :: ', req.body);
    const { email, password } = req.body;
    console.log(email);
    if (!email || !password) {
      throw new Error(401, 'invalid login');
    }

    const sql = `
      select "userId", "password"
      from "users"
      where "email" = $1;
    `;
    console.log(email);
    const params = [email];
    const result = await db.query(sql, params);
    console.log(result.rows);

    const [user] = result.rows;
    console.log(user);
    if (!user) {
      throw new Error(401, 'invalid login,no user');
    }
    const { password: hashedPassword, userId } = user;
    console.log(hashedPassword, userId);
    const isMatching = await argon2.verify(hashedPassword, password);
    if (!isMatching) {
      throw new Error(401, 'invalid login, password does not match');
    }
    const payload = {
      user: { userId, email },
    };

    const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    payload.token = token;
    res.status(200).json(payload);
    /* your code starts here */

    /* Query the database to find the "userId" and "hashedPassword" for the " email".
     * If no user is found,
     *   throw a 401: 'invalid login' error.
     * If a user is found,
     *   confirm that the password included in the request body matches the "hashedPassword" with `argon2.verify()`
     *   If the password does not match,
     *     throw a 401: 'invalid login' error.
     *   If the password does match,
     *     Create a payload object containing the user's "userId" and " email".
     *     Create a new signed token with `jwt.sign()`, using the payload and your TOKEN_SECRET
     *     Send the client a 200 response containing the payload and the token.
     */
  } catch (err) {
    next(err);
  }
});

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

app.get('/api/recipes/:recipeId', async (req, res, next) => {
  try {
    const recipeId = Number(req.params.recipeId);
    if (!Number.isInteger(recipeId) || recipeId < 1) {
      res.status(400).json({ error: 'grade must be a positive integer' });
    }
    const sql = `
      select *
        from "recipes"
      where "recipeId" = $1
    `;
    const params = [recipeId];
    const result = await db.query(sql, params);
    const [recipe] = result.rows;
    if (!recipe) {
      res
        .status(404)
        .json({ error: `cannot find recipe with recipeId ${recipeId}` });
    } else {
      res.json(recipe);
    }
  } catch (err) {
    next(err);
  }
});

app.post(
  '/api/recipes',
  uploadsMiddleware.single('image'),
  async (req, res) => {
    // http -v post localhost:8080/api/recipes title='testDish1' subtitle='abc' type='salad' imageUrl='ing url' description='Fresh fruit focused salad' ingredients:='["1 banana", "2 banana", "3 banana"]' instructions:='["1 banana", "2 banana", "3 banana"]' serves='4' facts='def' notes='Buon appetite!' userId='2'
    console.log('here');
    console.log(req.body);
    try {
      const {
        title,
        subtitle,
        type,
        imageUrl,
        description,
        ingredients,
        instructions,
        serves,
        facts,
        notes,
        userId,
      } = req.body.formDataProperties;

      if (
        !title ||
        !subtitle ||
        !type ||
        !imageUrl ||
        !description ||
        !ingredients ||
        !instructions ||
        !facts ||
        !userId
      ) {
        res.status(400).json({ error: 'all fields are required!' });
        return;
      }
      const sql = `
    insert into "recipes" ("title", "subtitle", "type", "imageUrl", "description", "ingredients", "instructions", "serves", "facts", "notes", "userId")
           values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 )
           returning *
    `;
      // const imageUrl = `/images/${req.file.filename}`;
      // console.log('req.file', req.file);
      const params = [
        title,
        subtitle,
        type,
        imageUrl,
        description,
        ingredients,
        instructions,
        serves,
        facts,
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
  }
);

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
  // http -v delete localhost:8080/api/recipes/6
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
