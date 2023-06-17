export async function fetchRecipe(recipeId) {
  const res = await fetch(`/api/recipes/${recipeId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
