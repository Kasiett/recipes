import strawberrySalad from './images/strawberry-banana-salad.png';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { HiOutlineSave } from 'react-icons/hi';

export default function ResipesList({ recipes }) {
  const recipe = recipes && recipes[0];
  console.log(JSON.stringify(recipe));
  return (
    <>
      <ul className="resipes-list">
        <li className="list">
          <h2 className="recipe-title">{recipe?.title}</h2>
          <p>(Gluten-free, dairy-free & low-fat)</p>
          <img className="list-img" src={strawberrySalad} alt="image" />
          <div className="list-icons">
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <p className="rate-count">(1444)</p>
            </div>
            <div className="save-like-icons">
              <FaRegComment className="icon-right" />
              <FaRegHeart className="icon-right" />
              <HiOutlineSave className="icon-right" />
            </div>
          </div>
          <p className="like-count">144 people liked this recipe</p>
          <div className="recipe">
            <h2 className="recipe-title">
              STRAWBERRY BANANA SALAD (GLUTEN-FREE, DAIRY-FREE, & FAT-FREE)
            </h2>
            <div className="description">
              <p>
                This fruit-focused salad is fresh, bright, and packed with
                flavor thanks to the herbs, fruit, and two different dressing
                options. Each dressing has its own unique taste and appeal, so
                try them both and pick your favorite, or alternate each time you
                make this pretty salad. This recipe comes from the Revised and
                Expanded Edition of Medical Medium.
              </p>
              <p>
                Strawberries have high levels of phenols, which act as an
                anti-inflammatory and are loaded with Vitamin C, which helps
                boost the immune system by warding off colds, flus, and
                respiratory infections.
              </p>
              <p>
                Bananas are an excellent “brain food” great for heavy thinkers
                and are known to help build strong muscles as well as strengthen
                the nervous system.
              </p>
              <p>
                Leafy greens create true alkalinity in the body systems,
                especially the lymphatic, which can become the most acidic
                system due to a barrage of chemicals, acids, plastics,
                pesticides, heavy metals, and pathogens constantly entering the
                lymphatic passages.
              </p>
              <p>Strawberry Banana Salad</p>
            </div>
            <div className="ingredients">
              <p>Ingredients:</p>
              <p>4 cups chopped strawberries </p>
              <p> 4-6 bananas, roughly chopped (about 4-6 cups)</p>
              <p>
                4 cups leafy greens (such as spinach and/or butter leaf lettuce)
              </p>
              <p>1/4 cup finely chopped basil or sage (optional)</p>
              <p>1/2 cup orange juice</p>
              <p>2 tsp raw honey Option</p>
            </div>
            <div className="instructions">
              <p>Directions:</p>
              <p>
                Place the strawberries, bananas, leafy greens, and basil or sage
                (if using) in a medium-sized bowl. Gently toss until evenly
                combined.
              </p>
              <p>
                If you’re using the first dressing option, whisk together the
                orange juice and raw honey in a small bowl. Add to the salad and
                gently toss again.
              </p>
              <p>
                If you’re using the second dressing option, combine the
                strawberries, banana, 1 tablespoon of water, lemon juice (if
                using), and basil (if using) in a blender and blend until very
                smooth. If you like a thinner consistency, add another 1-2
                tablespoons of water. Add to the salad and gently toss again.
                Serve immediately.
              </p>
              <p>Serves 2</p>
            </div>
            <button type="button" class="collapsible">
              Show more ...
            </button>
          </div>
        </li>
        <li className="list">
          <h2 className="recipe-title">{recipe?.title}</h2>
          <p>(Gluten-free, dairy-free & low-fat)</p>
          <img className="list-img" src={strawberrySalad} alt="image" />
          <div className="list-icons">
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <p className="rate-count">(1444)</p>
            </div>
            <div className="save-like-icons">
              <FaRegComment className="icon-right" />
              <FaRegHeart className="icon-right" />
              <HiOutlineSave className="icon-right" />
            </div>
          </div>
          <p className="like-count">144 people liked this recipe</p>
          <div className="recipe">
            <h2 className="recipe-title">
              STRAWBERRY BANANA SALAD (GLUTEN-FREE, DAIRY-FREE, & FAT-FREE)
            </h2>
            <div className="description">
              <p>
                This fruit-focused salad is fresh, bright, and packed with
                flavor thanks to the herbs, fruit, and two different dressing
                options. Each dressing has its own unique taste and appeal, so
                try them both and pick your favorite, or alternate each time you
                make this pretty salad. This recipe comes from the Revised and
                Expanded Edition of Medical Medium.
              </p>
              <p>
                Strawberries have high levels of phenols, which act as an
                anti-inflammatory and are loaded with Vitamin C, which helps
                boost the immune system by warding off colds, flus, and
                respiratory infections.
              </p>
              <p>
                Bananas are an excellent “brain food” great for heavy thinkers
                and are known to help build strong muscles as well as strengthen
                the nervous system.
              </p>
              <p>
                Leafy greens create true alkalinity in the body systems,
                especially the lymphatic, which can become the most acidic
                system due to a barrage of chemicals, acids, plastics,
                pesticides, heavy metals, and pathogens constantly entering the
                lymphatic passages.
              </p>
              <p>Strawberry Banana Salad</p>
            </div>
            <div className="ingredients">
              <p>Ingredients:</p>
              <p>4 cups chopped strawberries </p>
              <p> 4-6 bananas, roughly chopped (about 4-6 cups)</p>
              <p>
                4 cups leafy greens (such as spinach and/or butter leaf lettuce)
              </p>
              <p>1/4 cup finely chopped basil or sage (optional)</p>
              <p>1/2 cup orange juice</p>
              <p>2 tsp raw honey Option</p>
            </div>
            <div className="instructions">
              <p>Directions:</p>
              <p>
                Place the strawberries, bananas, leafy greens, and basil or sage
                (if using) in a medium-sized bowl. Gently toss until evenly
                combined.
              </p>
              <p>
                If you’re using the first dressing option, whisk together the
                orange juice and raw honey in a small bowl. Add to the salad and
                gently toss again.
              </p>
              <p>
                If you’re using the second dressing option, combine the
                strawberries, banana, 1 tablespoon of water, lemon juice (if
                using), and basil (if using) in a blender and blend until very
                smooth. If you like a thinner consistency, add another 1-2
                tablespoons of water. Add to the salad and gently toss again.
                Serve immediately.
              </p>
              <p>Serves 2</p>
            </div>
            <button type="button" class="collapsible">
              Show more ...
            </button>
          </div>
        </li>
        <li className="list">
          <h2 className="recipe-title">{recipe?.title}</h2>
          <p>(Gluten-free, dairy-free & low-fat)</p>
          <img className="list-img" src={strawberrySalad} alt="image" />
          <div className="list-icons">
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <p className="rate-count">(1444)</p>
            </div>
            <div className="save-like-icons">
              <FaRegComment className="icon-right" />
              <FaRegHeart className="icon-right" />
              <HiOutlineSave className="icon-right" />
            </div>
          </div>
          <p className="like-count">144 people liked this recipe</p>
          <div className="recipe">
            <h2 className="recipe-title">
              STRAWBERRY BANANA SALAD (GLUTEN-FREE, DAIRY-FREE, & FAT-FREE)
            </h2>
            <div className="description">
              <p>
                This fruit-focused salad is fresh, bright, and packed with
                flavor thanks to the herbs, fruit, and two different dressing
                options. Each dressing has its own unique taste and appeal, so
                try them both and pick your favorite, or alternate each time you
                make this pretty salad. This recipe comes from the Revised and
                Expanded Edition of Medical Medium.
              </p>
              <p>
                Strawberries have high levels of phenols, which act as an
                anti-inflammatory and are loaded with Vitamin C, which helps
                boost the immune system by warding off colds, flus, and
                respiratory infections.
              </p>
              <p>
                Bananas are an excellent “brain food” great for heavy thinkers
                and are known to help build strong muscles as well as strengthen
                the nervous system.
              </p>
              <p>
                Leafy greens create true alkalinity in the body systems,
                especially the lymphatic, which can become the most acidic
                system due to a barrage of chemicals, acids, plastics,
                pesticides, heavy metals, and pathogens constantly entering the
                lymphatic passages.
              </p>
              <p>Strawberry Banana Salad</p>
            </div>
            <div className="ingredients">
              <p>Ingredients:</p>
              <p>4 cups chopped strawberries </p>
              <p> 4-6 bananas, roughly chopped (about 4-6 cups)</p>
              <p>
                4 cups leafy greens (such as spinach and/or butter leaf lettuce)
              </p>
              <p>1/4 cup finely chopped basil or sage (optional)</p>
              <p>1/2 cup orange juice</p>
              <p>2 tsp raw honey Option</p>
            </div>
            <div className="instructions">
              <p>Directions:</p>
              <p>
                Place the strawberries, bananas, leafy greens, and basil or sage
                (if using) in a medium-sized bowl. Gently toss until evenly
                combined.
              </p>
              <p>
                If you’re using the first dressing option, whisk together the
                orange juice and raw honey in a small bowl. Add to the salad and
                gently toss again.
              </p>
              <p>
                If you’re using the second dressing option, combine the
                strawberries, banana, 1 tablespoon of water, lemon juice (if
                using), and basil (if using) in a blender and blend until very
                smooth. If you like a thinner consistency, add another 1-2
                tablespoons of water. Add to the salad and gently toss again.
                Serve immediately.
              </p>
              <p>Serves 2</p>
            </div>
            <button type="button" class="collapsible">
              Show more ...
            </button>
          </div>
        </li>
      </ul>
    </>
    //     {
    //       var coll = document.getElementsByClassName("collapsible");
    // var i;

    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var content = this.nextElementSibling;
    //     if (content.style.display === "block") {
    //       content.style.display = "none";
    //     } else {
    //       content.style.display = "block";
    //     }
    //   });
    // }
    //     }
  );
}
