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
  ("title", "subtitle", "type", "image", "description", "ingredients", "instructions", "serves","facts", "notes", "userId")
VALUES
  ('STRAWBERRY BANANA SALAD', 'Gluten-free, dairy-free & low-fat', 'salads', '/images/strawberry-banana-salad.png', 'This fruit-focused salad is fresh, bright, and packed with flavor thanks to the herbs, fruit, and two different dressing options. Each dressing has its own unique taste and appeal, so try them both and pick your favorite, or alternate each time you make this pretty salad. This recipe comes from the Revised and Expanded Edition of Medical Medium.',
   ARRAY['4 cups chopped strawberries', '4-6 bananas, roughly chopped (about 4-6 cups)', '4 cups leafy greens (such as spinach and/or butter leaf lettuce)', '1/4 cup finely chopped basil or sage (optional)', '1/2 cup orange juice', '2 tsp raw honey'],
   ARRAY['Place the strawberries, bananas, leafy greens, and basil or sage (if using) in a medium-sized bowl. Gently toss until evenly combined', 'If you’re using the first dressing option, whisk together the orange juice and raw honey in a small bowl. Add to the salad and gently toss again.', 'If you’re using the second dressing option, combine the strawberries, banana, 1 tablespoon of water, lemon juice (if using), and basil (if using) in a blender and blend until very smooth. If you like a thinner consistency, add another 1-2 tablespoons of water. Add to the salad and gently toss again. Serve immediately.'],
    '2', 'Strawberries have high levels of phenols, which act as an anti-inflammatory and are loaded with Vitamin C, which helps boost the immune system by warding off colds, flus, and respiratory infections.
Bananas are an excellent “brain food” great for heavy thinkers and are known to help build strong muscles as well as strengthen the nervous system.
Leafy greens create true alkalinity in the body systems, especially the lymphatic, which can become the most acidic system due to a barrage of chemicals, acids, plastics, pesticides, heavy metals, and pathogens constantly entering the lymphatic passages.
Strawberry Banana Salad', 'Enjoy your homemade Strawberry banana salad buon appetito!',
   '1');


INSERT INTO "recipes"
  ("title", "subtitle", "type", "image", "description", "ingredients", "instructions", "serves","facts", "notes", "userId")
VALUES
  ('TIKKA MASALA', 'Gluten-free, dairy-free & low-fat', 'entrees', '/images/tikka-masala.png', 'Tender vegetables are coated in fragrant, creamy tikka masala sauce rich in spices and flavor in this delicious curry recipe. Perfect for a family meal or to serve to friends, you can enjoy this tikka masala with cauliflower rice or pick your gluten-free grain of choice, such as millet, quinoa, or brown rice. Tikka Masala',
ARRAY['1 cup diced onion', '5 cloves of garlic, finely chopped', '1 inch piece of ginger, finely chopped', '1-2 tsp finely chopped red chili/hot pepper', '1 tsp ground turmeric', '1 tsp ground coriander', '1/2 tsp ground cumin', '2 tsp garam masala', '1 14-oz can or 1 1/2 cups diced tomatoes','1 cup Healing Broth', '1 14-oz can or 1 1/2 cups chickpeas OR 1 1/2 vegetables of choice, such as cauliflower, broccoli, carrots, and/or bell pepper', '1 tbsp tomato paste', '1 1/4 cup coconut milk, divided', '3-4 fresh or dried curry leaves (optional)', 'Sea salt, to taste (optional)', '1/2 cup roughly chopped cilantro leaves, to serve', '4-6 cups cauliflower rice, brown rice, quinoa or millet, to serve'],
   ARRAY['Place a large non-stick ceramic pot on medium-high heat.  ', 'Add the onion and cook for 5-8 minutes, until soft and browned, adding a bit of water if needed to prevent sticking.', 'Add the garlic, ginger, and chili and continue cooking for 1-2 minutes until fragrant. ', 'Add the spices and cook for a further 30 seconds while stirring constantly.', 'Add the diced tomatoes, healing broth, chickpeas, tomato paste, 3/4 cup of the coconut milk, and curry leaves (if using) to the pot', 'Simmer for 15-25 minutes, until the sauce is thick and the chickpeas soft.', 'Turn the heat off and add the remaining 1/2 cup of coconut milk to the pot.', ' Season with sea salt to taste (if using).', 'Serve immediately with cauliflower rice, brown rice, quinoa, or millet and top with fresh cilantro.', 'Serves 4'],
   '4', '',
    'Enjoy your homemade Strawberry banana salad buon appetito!',
'1');

INSERT INTO "recipes"
  ("title", "subtitle", "type", "image", "description", "ingredients", "instructions", "serves","facts", "notes", "userId")
VALUES
  ('CHAGA CINNAMON SHAKE', 'Gluten-free, dairy-free & low-fat', 'smoothies', '/images/chaga-cinnamon-shake.png', 'Creamy and satisfying, this smoothie tastes so good. It is a great replacement for a dairy milkshake or when you are craving a cold, creamy treat. The chaga powder, ginger, and cinnamon offer additional healing benefits and bring warmth and even more flavor to this delicious shake. You can use water or coconut water for a fat free but still creamy shake or almond milk or coconut milk for a more decadent shake.',
ARRAY['2 frozen bananas', '1 1/2 tsp chaga powder @vimergy', '1 tsp cinnamon', '1/2 tsp ground ginger (optional)', '2-3 tbsp maple syrup or raw honey (optional)', '1 cup water, coconut water, or unsweetened almond or coconut milk'],
   ARRAY['Combine all the ingredients in a high-speed blender and blend until smooth.', 'Add more liquid if necessary.', 'Pour into glasses and serve. Enjoy!'],
   '4', 'Chaga possesses immune-system-enhancing nutrients that revitalize white blood cell count by increasing the production of lymphocytes, monocytes, neutrophils, basophils, and eosinophils, so that your body can battle invaders such as toxins, viruses, and bacteria, as well as fungi such as yeast and mold. Cinnamon is anti-inflammatory and has a rich antioxidant content. It also has anti-bacterial, anti-fungal, and anti-viral properties.',
    'Enjoy your homemade Strawberry banana salad buon appetito!',
'1');

INSERT INTO "recipes"
  ("title", "subtitle", "type", "image", "description", "ingredients", "instructions", "serves","facts", "notes", "userId")
VALUES
  ('COBB SALAD', 'Gluten-free, dairy-free & low-fat', 'salad', '/images/cobb-salad.png', 'This Cobb Salad brings together crunchy romaine, refreshing cucumber, juicy cherry tomatoes, crispy eggplant-bacon bites, sprouts or microgreens, and optional chickpeas. You can choose from two dressings: a creamy ranch dressing made with cashews or a fat-free honey-mustard dressing for a light and bright option. You can omit the chickpeas to keep this recipe raw or add them for a heartier option.',
ARRAY['6 cups tightly packed chopped romaine lettuce', '1 cup chopped cucumber', '1 cup cooked chickpeas (optional)', '1 cup chopped cherry tomatoes 4 to 5 slices of eggplant bacon, chopped into bites (recipe on page 430)', '1⁄2 cup sprouts or microgreens'],
   ARRAY['Combine the romaine, cucumber, chickpeas (if using), cherry tomatoes, eggplant-bacon bites, and sprouts or microgreens in a large bowl. Stir until evenly mixed.', 'To make the ranch dressing, combine the zucchini, cashews, lemon juice, garlic powder, onion powder, and sea salt (if using) in a blender and blend until smooth. Stir in the dill and parsley.', 'To make the honey-mustard dressing, whisk the ingredients together in a bowl until smooth. Divide the salad between the bowls and top with dressing. Serve immediately.'],
   '2', '',
    'Enjoy your homemade Strawberry banana salad buon appetito!',
'1');

INSERT INTO "recipes"
  ("title", "subtitle", "type", "image", "description", "ingredients", "instructions", "serves","facts", "notes", "userId")
VALUES
  ('BARLEY GRASS JUICE LEMONADE', 'Gluten-free', 'drinks', '/images/barley-grass-juice-lemonade.png', 'This deeply refreshing and hydrating lemonade is enriched with barley grass juice powder, bringing extra antioxidant and nutrient support to this delicious drink. Barley grass juice powder comes from the tender green shoots of barley grass, which are then juiced, which is the only way I recommend consuming it, versus having just barley grass powder that isn’t juiced. Barley grass juice powder is also naturally gluten-free. This is a fantastic lemonade to share or to make for yourself to sip on over the day.',
ARRAY['2-3 tsp barley grass juice powder @vimergy', '½ cup freshly squeezed lemon juice', '½ cup pure maple syrup or raw honey', '4 cups cold water', '3-4 cups ice, to serve'],
   ARRAY['Combine the barley grass juice powder, lemon juice, maple syrup, and cold water in a pitcher. Whisk or stir until evenly mixed. Top with ice and serve.'],
   '4', '',
    'Enjoy your homemade Strawberry banana salad buon appetito!',
'1');

INSERT INTO "recipes"
  ("title", "subtitle", "type", "image", "description", "ingredients", "instructions", "serves","facts", "notes", "userId")
VALUES
  ('MELON SMOOTHIE', 'Gluten-free', 'smoothies', '/images/melon-smoothie.png', 'This Cobb Salad brings together crunchy romaine, refreshing cucumber, juicy cherry tomatoes, crispy eggplant-bacon bites, sprouts or microgreens, and optional chickpeas. You can choose from two dressings: a creamy ranch dressing made with cashews or a fat-free honey-mustard dressing for a light and bright option. You can omit the chickpeas to keep this recipe raw or add them for a heartier option.',
ARRAY['6 cups tightly packed chopped romaine lettuce', '1 cup chopped cucumber', '1 cup cooked chickpeas (optional)', '1 cup chopped cherry tomatoes 4 to 5 slices of eggplant bacon, chopped into bites (recipe on page 430)', '1⁄2 cup sprouts or microgreens'],
   ARRAY['Combine the romaine, cucumber, chickpeas (if using), cherry tomatoes, eggplant-bacon bites, and sprouts or microgreens in a large bowl. Stir until evenly mixed.', 'To make the ranch dressing, combine the zucchini, cashews, lemon juice, garlic powder, onion powder, and sea salt (if using) in a blender and blend until smooth. Stir in the dill and parsley.', 'To make the honey-mustard dressing, whisk the ingredients together in a bowl until smooth. Divide the salad between the bowls and top with dressing. Serve immediately.'],
   '2', '',
    'Enjoy your homemade Strawberry banana salad buon appetito!',
'1');

INSERT INTO "recipes"
  ("title", "subtitle", "type", "image", "description", "ingredients", "instructions", "serves","facts", "notes", "userId")
VALUES
  ('LEMON HONEY GINGER WATER', 'Gluten-free', 'drinks', '/images/lemon-honey-ginger-water.png', 'This Lemon Ginger Honey Water is refreshing and hydrating. It’s the perfect drink to begin your day with (try it 30 minutes or more before or after celery juice), for an afternoon pick me up, or to sip on over the day. When you drink this healing tonic when you first wake up, it will help your liver flush out toxins it’s collected for release throughout the night while giving your liver and body the critical hydration and glucose it needs to begin your day.',
ARRAY['1 to 2 inches fresh ginger', '2 cups water', '1/2 lemon', '2 teaspoons raw honey'],
   ARRAY['Grate the ginger into 2 cups of water. Allow the water to steep for at least 15 minutes and ideally longer. You can even leave it steeping in the fridge overnight if you wish. Strain the ginger out of the water when you’re ready to drink it, add the lemon juice and raw honey.'],
   '2', 'Lemons and limes contain micro mineral salts that break down pathogens such as unproductive bacteria, mold, yeast, and fungus to help protect your liver’s immune system. The rich calcium levels in lemons and limes binds to the vitamin C within them, and both of these enter into the liver, where they waken a stagnant, sluggish, fatty liver, helping loosen and disperse fat cells. Ginger is known to greatly aid in digestion and assimilation and is widely regarded to help prevent colds, flu, motion sickness, and vertigo. Ginger can also help to alleviate menstrual cramps, nausea, heartburn, migraines, sore throats, exhaustion, fatigue, and constipation and it is great in providing relief from the stomach flu and food poisoning. Raw honey contains a combination of sugar that the liver needs desperately and vitamins, minerals, and other nutrients—hundreds of which are not on the record with medical research and science. Raw honey is antimicrobial: antiviral, antibacterial, antifungal, all packaged into one. When it heads to the liver in its broken down, assimilated state, it packs a punch, giving the liver everything it needs at once: the liver’s immune system strengthens instantly.',
    'Enjoy your homemade Strawberry banana salad buon appetito!',
'1');

INSERT INTO "recipes"
  ("title", "subtitle", "type", "image", "description", "ingredients", "instructions", "serves","facts", "notes", "userId")
VALUES
  ('MELON WITH SPIRULINA DIPPING SAUCE', 'Gluten-free', 'salads', '/images/melon-with-spirulina.png', 'Melon and spirulina might seem like a surprising combination, but they are a match made in heaven for the health benefits they offer. An amazing blend of critical glucose, trace minerals, vitamins, and antioxidants, these special foods can deeply support you in the ways your body needs.',
ARRAY['6 cups cubed watermelon and/or honeydew melon'],
   ARRAY['1/2 tsp spirulina @vimergy', '2 tbsp raw honey', '1 tbsp coconut water', '1 tbsp freshly squeezed lemon juice'],
   '2', 'You can simply cut open your favorite variety of melon and sprinkle spirulina on top for the quickest option, or you can enjoy your melon cut up with this tasty spirulina dipping sauce, which only takes a minute to make. Spirulina is one of my favorite immune system supports, alongside its powerful phytochemical and antioxidant content.',
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
