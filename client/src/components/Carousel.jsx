import React from "react";
import PS42 from "../assets/2ps4.png";
import XBOX2 from "../assets/2xbox.png";
import PS43 from "../assets/3ps4.png";
import XBOX3 from "../assets/3xbox.png";
import PS54 from "../assets/4ps5.png";
import XBOX6 from "../assets/6xbox.png";
import "../style/style.css";
import { BsCartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <div>
      <div className="container p-1 py-3 mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw-bold text-success">BEST SELLER</h1>
            <hr />
          </div>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div class="carousel-inner justify-content-around">
          <div class="carousel-item active text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={PS42} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-success fw-bold">
                  PS4 Gamepad Màu Xanh Camo | HÀNG MỚI VỀ
                </h5>
                <p class="text-dark mt-2 ms-4 fs-5 fw-bold">
                  739.000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={PS43} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-success fw-bold">
                  Sony DualSense 5 PS5 Camo Gray Camouflage | HÀNG NHẬP KHẨU
                </h5>
                <p class="text-dark mt-2 ms-3 fs-5 fw-bold">
                  1,799,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={XBOX2} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-success fw-bold">
                  Xbox Elite Wireless Controller Series 2 – Core (White) | Không
                  Dây
                </h5>
                <p class="text-dark mt-2 ms-3 fs-5 fw-bold">
                  3,190,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={XBOX3} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-success fw-bold">
                  Xbox One X / Seri Bản Thường Có Dây Màu Đen | HÀNG MỚI VỀ
                </h5>
                <p class="text-dark mt-2 ms-3 fs-5 fw-bold">
                  570,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={PS54} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-success fw-bold">
                  Sony DualSense 5 PS5 Màu Tím Galactic Purple | PlayStation 5
                </h5>
                <p class="text-dark mt-2 ms-2 fs-5 fw-bold">
                  1,990,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={XBOX6} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-success fw-bold">
                  Xbox Elite Wireless Controller Series 2 – Core (black) | Không
                  Dây
                </h5>
                <p class="text-dark mt-2 ms-2 fs-5 fw-bold">
                  3,990,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
