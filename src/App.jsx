import "./App.css";
import img from "./assets/images/image-omelette.jpeg";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <img src={img} alt="banner img" />
        </header>
        <main>
          <h1 className="primary-heading">Simple Omelette Recipe</h1>
          <p className="text">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="box-1">
            <h3 className="box-title">Preparation time</h3>
            <ul className="box-list">
              <li>
                <strong>Total:</strong> Approximately 10 minutes
              </li>
              <li>
                <strong>Preparation:</strong> 5 minutes
              </li>
              <li>
                <strong>Cooking:</strong> 5 minutes
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
