-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

 insert into "users"
   ("email", "password")
   values
     ('kasiet@test.com', 'password1');

 insert into "users"
   ("email", "password")
   values
     ('admin@plantpower.com', 'password1');



INSERT INTO "recipes"
  ("title", "subtitle", "type", "imageUrl", "description", "ingredients", "instructions", "serves", "notes", "userId")
VALUES
  ('STRAWBERRY BANANA SALAD', 'Gluten-free, dairy-free & low-fat', 'salad', '/images/strawberry-banana-salad.png', 'This fruit-focused salad is fresh, bright, and packed with flavor thanks to the herbs, fruit, and two different dressing options. Each dressing has its own unique taste and appeal, so try them both and pick your favorite, or alternate each time you make this pretty salad. This recipe comes from the Revised and Expanded Edition of Medical Medium.
Strawberries have high levels of phenols, which act as an anti-inflammatory and are loaded with Vitamin C, which helps boost the immune system by warding off colds, flus, and respiratory infections.
Bananas are an excellent “brain food” great for heavy thinkers and are known to help build strong muscles as well as strengthen the nervous system.
Leafy greens create true alkalinity in the body systems, especially the lymphatic, which can become the most acidic system due to a barrage of chemicals, acids, plastics, pesticides, heavy metals, and pathogens constantly entering the lymphatic passages.
Strawberry Banana Salad',
   ARRAY['4 cups chopped strawberries', '4-6 bananas, roughly chopped (about 4-6 cups)', '4 cups leafy greens (such as spinach and/or butter leaf lettuce)', '1/4 cup finely chopped basil or sage (optional)', '1/2 cup orange juice', '2 tsp raw honey'],
   ARRAY['Place the strawberries, bananas, leafy greens, and basil or sage (if using) in a medium-sized bowl. Gently toss until evenly combined', 'If you’re using the first dressing option, whisk together the orange juice and raw honey in a small bowl. Add to the salad and gently toss again.', 'If you’re using the second dressing option, combine the strawberries, banana, 1 tablespoon of water, lemon juice (if using), and basil (if using) in a blender and blend until very smooth. If you like a thinner consistency, add another 1-2 tablespoons of water. Add to the salad and gently toss again. Serve immediately.'],
    '2', 'Enjoy your homemade Strawberry banana salad buon appetito!',
   '1');


INSERT INTO "recipes"
  ("title", "subtitle", "type", "imageUrl", "description", "ingredients", "instructions", "serves", "notes", "userId")
VALUES
  ('TIKKA MASALA', 'Gluten-free, dairy-free & low-fat', 'entree', '/images/tikka-masala.png', 'Tender vegetables are coated in fragrant, creamy tikka masala sauce rich in spices and flavor in this delicious curry recipe. Perfect for a family meal or to serve to friends, you can enjoy this tikka masala with cauliflower rice or pick your gluten-free grain of choice, such as millet, quinoa, or brown rice. Tikka Masala',
ARRAY['1 cup diced onion', '5 cloves of garlic, finely chopped', '1 inch piece of ginger, finely chopped', '1-2 tsp finely chopped red chili/hot pepper', '1 tsp ground turmeric', '1 tsp ground coriander', '1/2 tsp ground cumin', '2 tsp garam masala', '1 14-oz can or 1 1/2 cups diced tomatoes','1 cup Healing Broth', '1 14-oz can or 1 1/2 cups chickpeas OR 1 1/2 vegetables of choice, such as cauliflower, broccoli, carrots, and/or bell pepper', '1 tbsp tomato paste', '1 1/4 cup coconut milk, divided', '3-4 fresh or dried curry leaves (optional)', 'Sea salt, to taste (optional)', '1/2 cup roughly chopped cilantro leaves, to serve', '4-6 cups cauliflower rice, brown rice, quinoa or millet, to serve'],
   ARRAY['Place a large non-stick ceramic pot on medium-high heat.  ', 'Add the onion and cook for 5-8 minutes, until soft and browned, adding a bit of water if needed to prevent sticking.', 'Add the garlic, ginger, and chili and continue cooking for 1-2 minutes until fragrant. ', 'Add the spices and cook for a further 30 seconds while stirring constantly.', 'Add the diced tomatoes, healing broth, chickpeas, tomato paste, 3/4 cup of the coconut milk, and curry leaves (if using) to the pot', 'Simmer for 15-25 minutes, until the sauce is thick and the chickpeas soft.', 'Turn the heat off and add the remaining 1/2 cup of coconut milk to the pot.', ' Season with sea salt to taste (if using).', 'Serve immediately with cauliflower rice, brown rice, quinoa, or millet and top with fresh cilantro.', 'Serves 4'],
   '4',
    'Enjoy your homemade Strawberry banana salad buon appetito!',
'1');




 insert into "ratings" ("recipeId", "userId", "rating")
   values ('1','1','5');

  insert into "likes" ("likeId", "userId", "recipeId")
   values ('1','1','1');

   insert into "favorites" ("favoriteId", "recipeId","userId")
   values ('1','1','1');

   insert into "comments" ("commentId", "recipeId","userId", "comment")
   values ('1','1','1', 'This is the best salad I have ever had OMG!');
