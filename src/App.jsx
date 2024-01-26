import Header from "./component/Header";
import "./App.css";
import Main from "./component/Main";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
