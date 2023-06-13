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
  ("title", "type", "imageUrl", "description", "ingredients", "instructions", "notes", "userId")
VALUES
  ('STRAWBERRY BANANA SALAD (GLUTEN-FREE, DAIRY-FREE, & FAT-FREE)', 'salad', './public/images/strawberry-banana-salad.png', 'This fruit-focused salad is fresh, bright, and packed with flavor thanks to the herbs, fruit, and two different dressing options. Each dressing has its own unique taste and appeal, so try them both and pick your favorite, or alternate each time you make this pretty salad. This recipe comes from the Revised and Expanded Edition of Medical Medium.
Strawberries have high levels of phenols, which act as an anti-inflammatory and are loaded with Vitamin C, which helps boost the immune system by warding off colds, flus, and respiratory infections.
Bananas are an excellent “brain food” great for heavy thinkers and are known to help build strong muscles as well as strengthen the nervous system.
Leafy greens create true alkalinity in the body systems, especially the lymphatic, which can become the most acidic system due to a barrage of chemicals, acids, plastics, pesticides, heavy metals, and pathogens constantly entering the lymphatic passages.
Strawberry Banana Salad',
   ARRAY['4 cups chopped strawberries', '4-6 bananas, roughly chopped (about 4-6 cups)', '4 cups leafy greens (such as spinach and/or butter leaf lettuce)', '1/4 cup finely chopped basil or sage (optional)', '1/2 cup orange juice', '2 tsp raw honey'],
   ARRAY['Place the strawberries, bananas, leafy greens, and basil or sage (if using) in a medium-sized bowl. Gently toss until evenly combined.', 'For dressing whisk together the orange juice and raw honey in a small bowl. Add to the salad and gently toss again.', 'Return the cooked meat to the skillet', '3. and so on...'],
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
