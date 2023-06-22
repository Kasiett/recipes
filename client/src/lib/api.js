/**
 * Signs in a user.
 * @param {string}  email The user's  email.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to `{ token, user }`.
 */
export async function signIn(email, password) {
  return await signUpOrIn('sign-in', email, password);
}

/**
 * Signs up a user.
 * @param {string}  email The user's  email.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to the user.
 */
export async function signUp(email, password) {
  return await signUpOrIn('sign-up', email, password);
}

/**
 * Signs up or signs in depending on the action.
 * @param {string} action Action to take, either 'sign-up' or 'sign-in'
 * @param {string}  email The user's  email.
 * @param {sting} password The user's password.
 * @returns Promise that resolves to user (sign-up) or `{ token, user }` (sign-in).
 */
export async function signUpOrIn(action, email, password) {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  const res = await fetch(`/api/auth/${action}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Fetches recepie public for all
 * @param {string}  recipe id.
 * @returns Promise that resolves with recipe item.
 */
export async function fetchRecipe(recipeId) {
  const res = await fetch(`/api/recipes/${recipeId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
