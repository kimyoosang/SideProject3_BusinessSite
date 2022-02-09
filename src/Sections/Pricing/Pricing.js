import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <section class="section-3" id="pricing">
      <h1 class="section-heading">Pricing</h1>
      <div class="section-heading-line"></div>
      <div class="swiper-container">
        <div class="pricing-cards-wrapper swiper-wrapper">
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
            <div class="pricing-card-back back-free">
              <a href="#">Order Now</a>
            </div>
          </div>
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
            <div class="pricing-card-back back-basic">
              <a href="#">Order Now</a>
            </div>
          </div>
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
              <button class="pricing-card-btn btn-standard">Choose Plan</button>
            </div>
            <div class="pricing-card-back back-standard">
              <a href="#">Order Now</a>
            </div>
          </div>
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
              <button class="pricing-card-btn btn-premium">Choose Plan</button>
            </div>
            <div class="pricing-card-back back-premium">
              <a href="#">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
