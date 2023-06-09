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
  ("title", "imageUrl", "description", "ingredients", "instructions", "notes", "userId")
VALUES
  ('BRAIN SAVER SALAD', './public/images/brain-saver-salad.png', 'Italian Bolognese sauce is a classic and flavorful',
   ARRAY['1 pound (450g) ground beef', '1 onion', '2 carrots', '2 celery stackls', '4 cloves of garlic'],
   ARRAY['1. Heat a large deep skillet', '2. Add an olive oil', 'Return the cooked meat to the skillet', '3. and so on...'],
    'Enjoy your homemade Italian Bolognese sauce with pasta, and buon appetito!',
   '1');



 insert into "ratings" ("recipeId", "userId", "rating")
   values ('1','1','5');

  insert into "likes" ("likeId", "userId", "recipeId")
   values ('1','1','1');

   insert into "favorites" ("favoriteId", "recipeId","userId")
   values ('1','1','1');

   insert into "comments" ("commentId", "recipeId","userId", "comment")
   values ('1','1','1', 'This is the best salad I have ever had OMG!');
