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




 insert into "recipes"
  ("title", "imageUrl", "description", "userId")
   values
     ('BRAIN SAVER SALAD {GLUTEN-FREE, DAIRY-FREE, & FAT-FREE}', './public/images/brain-saver-salad.png', 'This healing salad helps minimize, reduce, and cleanse acids out of the brain and cerebrospinal fluid. It also helps create alkalinity within all body systems.

This recipe comes from Brain Saver Protocols, Cleanses & Recipes, the companion book to Medical Medium Brain Saver. These two essential books about our most complex organ—the brain—dive deep into why people all over the world are suffering with mental health and brain-related symptoms and conditions. Brain Saver unveils the why behind more than 100 brain- and nervous system–related symptoms, diseases, and disorders; Brain Saver Protocols, Cleanses & Recipes reveals the truth about how to heal in even more detail (including cleanses, recipes, supplement protocols, and so much more).

Brain Saver Salad

Ingredients:
1 cup loosely packed parsley leaves, roughly chopped
1 cup loosely packed cilantro leaves, roughly chopped
2 cups loosely packed spinach, roughly chopped
2 cups loosely packed kale leaves, finely chopped
2 cups loosely packed arugula, roughly chopped
4 to 6 cups loosely packed red leaf or green leaf lettuce, chopped 1 1⁄2 cups fresh or steamed green peas
1 1⁄2 cups thinly sliced cucumber
1 cup sprouts or microgreens

For the dressing:
1 cup freshly squeezed orange juice
2 tablespoons freshly squeezed lemon juice
2 tablespoons raw honey
1 sprig fresh rosemary, leaves only
1⁄4 teaspoon cayenne, or more to taste

Directions:
Combine all the salad ingredients in a bowl. Toss gently and set aside.

Combine the dressing ingredients in a blender and blend until smooth. Strain through a fine-mesh sieve into a small bowl or jug.

Pour the dressing on top of the salad. Toss gently and serve.

Makes 2-3 servings', '1');


 insert into "ratings" ("recipeId", "userId", "rating")
   values ('1','1','5');

  insert into "likes" ("likeId", "userId", "recipeId")
   values ('1','1','1');

   insert into "favorites" ("favoriteId", "recipeId","userId")
   values ('1','1','1');

   insert into "comments" ("commentId", "recipeId","userId", "comment")
   values ('1','1','1', 'This is the best salad I have ever had OMG!');
