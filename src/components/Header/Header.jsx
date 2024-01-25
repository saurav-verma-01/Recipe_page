import "./Header.css";
import bannerImg from "../../assets/images/image-omelette.jpeg";

const Header = () => {
  return (
    <header className="header ">
      <div className="header-container">
        <img src={bannerImg} alt="banner image" className="banner-img" />
      </div>
    </header>
  );
};

export default Header;
