import { useState } from "react";
import metamorphosis from "../assets/images/metamorphosis.png";
import "../assets/stylesheets/Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  let [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive ? (
        <>
          <div className="sidebar__container container__active">
            <div className="sidebar__container__header">
              <img alt="" className="sidebar__logo" src={metamorphosis} />
              <span
                className="sidebar__toggle__button"
                onClick={() => setIsActive(!isActive)}
              >
                <i class="fa-sharp fa-solid fa-arrow-left"></i>
              </span>
            </div>
            <div>
              <Link className="sidebar__links" to="/current">
                <div className="sidebar__container__links">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>Current</p>
                </div>
              </Link>
              <Link className="sidebar__links" to="/business">
                <div className="sidebar__container__links">
                  <i className="fa-solid fa-briefcase"></i>
                  <p>Business</p>
                </div>
              </Link>
              <Link className="sidebar__links" to="/sports">
                <div className="sidebar__container__links">
                  <i className="fa-solid fa-medal"></i>
                  <p>Sports</p>
                </div>
              </Link>
              <Link className="sidebar__links" to="/entertainment">
                <div className="sidebar__container__links">
                  <i class="fa-solid fa-camera"></i>
                  <p>Entertainment</p>
                </div>
              </Link>
              <Link className="sidebar__links" to="/technology">
                <div className="sidebar__container__links">
                  <i class="fa-solid fa-microchip"></i>
                  <p>Technology</p>
                </div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="sidebar__container container__inactive">
          <div className="sidebar__container__header">
            <img alt="" className="sidebar__logo" src={metamorphosis} />
            <span
              className="sidebar__toggle__button"
              onClick={() => setIsActive(!isActive)}
            >
              <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </span>
          </div>
          <div className="sidebar__icon__container">
            <Link className="sidebar__links" to="/current">
              <div className="sidebar__icon">
                <i class="fa-solid fa-calendar-days"></i>
              </div>
            </Link>
            <Link className="sidebar__links" to="/business">
              <div className="sidebar__icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </Link>
            <Link className="sidebar__links" to="/sports">
              <div className="sidebar__icon">
                <i className="fa-solid fa-medal"></i>
              </div>
            </Link>
            <Link className="sidebar__links" to="/entertainment">
              <div className="sidebar__icon">
                <i class="fa-solid fa-camera"></i>
              </div>
            </Link>
            <Link className="sidebar__links" to="/technology">
              <div className="sidebar__icon">
                <i class="fa-solid fa-microchip"></i>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
