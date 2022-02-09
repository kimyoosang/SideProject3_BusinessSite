import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

import "./Pricing.css";

function Pricing() {
  SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

  return (
    <section class="section-3" id="pricing">
      <h1 class="section-heading">Pricing</h1>
      {/* <div class="section-heading-line"></div> */}
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 3}
        draggable={true}
        loop={true}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        <div class="pricing-cards-wrapper ">
          <SwiperSlide>
            <div class="pricing-card swiper-slide">
              <div class="pricing-card-front">
                <h1 class="pricing-card-heading heading-free">FREE</h1>
                <h3 class="pricing-card-price">$0</h3>
                <ul class="pricing-card-list list-free">
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-times"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-times"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-times"></i>
                    <span>Pricing Card Item</span>
                  </li>
                </ul>
                <button class="pricing-card-btn btn-free">Choose Plan</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="pricing-card swiper-slide">
              <div class="pricing-card-front">
                <h1 class="pricing-card-heading heading-basic">BASIC</h1>
                <h3 class="pricing-card-price">$299</h3>
                <ul class="pricing-card-list list-basic">
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-times"></i>
                    <span>Pricing Card Item</span>
                  </li>
                </ul>
                <button class="pricing-card-btn btn-basic">Choose Plan</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="pricing-card swiper-slide">
              <div class="pricing-card-front">
                <h1 class="pricing-card-heading heading-standard">STANDARD</h1>
                <h3 class="pricing-card-price">$699</h3>
                <ul class="pricing-card-list list-standard">
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                </ul>
                <button class="pricing-card-btn btn-standard">
                  Choose Plan
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="pricing-card swiper-slide">
              <div class="pricing-card-front">
                <h1 class="pricing-card-heading heading-premium">PREMIUM</h1>
                <h3 class="pricing-card-price">$999</h3>
                <ul class="pricing-card-list list-premium">
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                  <li>
                    <i class="fas fa-check"></i>
                    <span>Pricing Card Item</span>
                  </li>
                </ul>
                <button class="pricing-card-btn btn-premium">
                  Choose Plan
                </button>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
}

export default Pricing;
