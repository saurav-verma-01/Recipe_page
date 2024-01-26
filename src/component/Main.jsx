import ColoredBox from "./ColoredBox";
import ListContainer from "./ListContainer";
import NutritionBox from "./NutritionBox";

const Main = () => {
  return (
    <main>
      <h1 className="primary-heading">Simple Omelette Recipe</h1>
      <p className="text">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <ColoredBox>
        <h3 className="box-title">Preparation time</h3>
        <ul className="box-list list">
          <li>
            <span className="dot"></span>
            <p className="list-text">
              <strong>Total: </strong>Approximately 10 minutes
            </p>
          </li>
          <li>
            <span className="dot"></span>
            <p className="list-text">
              <strong>Preparation: </strong>5 minutes
            </p>
          </li>
          <li>
            <span className="dot"></span>
            <p className="list-text">
              <strong>Cooking: </strong>5 minutes
            </p>
          </li>
        </ul>
      </ColoredBox>
      <ListContainer>
        <h2 className="secondary-heading">Ingredients</h2>

        <ul className="list">
          <li>
            <span className="dot"></span>
            <p className="list-text">2-3 large eggs</p>
          </li>
          <li>
            <span className="dot"></span>
            <p className="list-text">Salt, to taste</p>
          </li>
          <li>
            <span className="dot"></span>
            <p className="list-text">Pepper, to taste</p>
          </li>
          <li>
            <span className="dot"></span>
            <p className="list-text">1 tablespoon of butter or oil</p>
          </li>
          <li>
            <span className="dot"></span>
            <p className="list-text">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </p>
          </li>
        </ul>
      </ListContainer>
      <ListContainer>
        <h2 className="secondary-heading">Instructions</h2>

        <ol className="list num-list">
          <li>
            <span className="num">1.</span>
            <p className="list-text">
              <strong>Beat the eggs: </strong>In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </p>
          </li>
          <li>
            <span className="num">2.</span>
            <p className="list-text">
              <strong>Heat the pan: </strong>Place a non-stick frying pan over
              medium heat and add butter or oil.
            </p>
          </li>
          <li>
            <span className="num">3.</span>
            <p className="list-text">
              <strong>Cook the omelette: </strong>Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </p>
          </li>
          <li>
            <span className="num">4.</span>
            <p className="list-text">
              <strong>Add fillings (optional): </strong>When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </p>
          </li>
          <li>
            <span className="num">5.</span>
            <p className="list-text">
              <strong>Fold and serve: </strong>As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </p>
          </li>
          <li>
            <span className="num">6.</span>
            <p className="list-text">
              <strong>Enjoy: </strong>Serve hot, with additional salt and pepper
              if needed.
            </p>
          </li>
        </ol>
      </ListContainer>
      <NutritionBox>
        <h2 className="secondary-heading">Nutrition</h2>
        <p className="text">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <div className="nutrition-details">
          {" "}
          <div className="nutrition-div">
            <span className="name">Calories</span>
            <span className="amount">277kcal</span>
          </div>
          <div className="nutrition-div">
            <span className="name">Cards</span>
            <span className="amount">0g</span>
          </div>
          <div className="nutrition-div">
            <span className="name">Protein</span>
            <span className="amount">20g</span>
          </div>
          <div className="nutrition-div">
            <span className="name">Fat</span>
            <span className="amount">22g</span>
          </div>
        </div>
      </NutritionBox>{" "}
    </main>
  );
};

export default Main;
