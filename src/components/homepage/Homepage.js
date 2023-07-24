import "../../assets/stylesheets/Homepage.css";
import metamorphosis from "../../assets/images/metamorphosis.png";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage__container">
      <div className="homepage__logo__container">
        <img alt="" className="homepage__logo" src={metamorphosis} />
        <p className="homepage__title">Metamorphosis News</p>
        <p className="homepage__subtitle">morphing the way you recieve news</p>
      </div>
      <div className="homepage__link__container">
        <Link to="/current">
          <div className="homepage__link">
            <i class="fa-solid fa-calendar-days"></i>
          </div>
        </Link>
        <Link to="/business">
          <div className="homepage__link">
            <i className="fa-solid fa-briefcase"></i>
          </div>
        </Link>
        <Link to="/sports">
          <div className="homepage__link">
            <i className="fa-solid fa-medal"></i>
          </div>
        </Link>
        <Link to="/entertainment">
          <div className="homepage__link">
            <i class="fa-solid fa-camera"></i>
          </div>
        </Link>
        <Link to="/technology">
          <div className="homepage__link">
            <i class="fa-solid fa-microchip"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}
