import React from "react";

const Home = () => {
  return (
    <div>
      {/* Nav-bar Section */}
      <header class="header">
        <div class="header_content">
          <nav>
            <div class="logo">
              <p class="agency">e menu by Chiklu</p>
              <h4 class="title">Burger Kingdom</h4>
            </div>
            <div class="navcat">
              <ul>
                <li>
                  <a href="">Burger</a>
                </li>
                <li>
                  <a href="">Pizza</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* main container */}
      <div class="container">
        <div class="container_content">
          {/* Search Section */}
          <div class="searchbar">
            <div class="search">
              <span>
                <input type="text" placeholder="Search here..." />
                <div class="searchicon">
                  <img
                    src="/static/images/loupe.svg"
                    alt="search"
                    class="icon"
                  />
                </div>
              </span>
            </div>
            <div class="tableno">
              <p>Table No 1</p>
            </div>
          </div>
          {/* Carousel Category section */}
          <div class="category">
            <span class="carousel owl-carousel">
              <div class="cat">
                <div class="catimg">
                  <img src="/static/images/hamburger.svg" alt="hamburger" />
                </div>
                <p class="catname">Burger</p>
              </div>
              <div class="cat">
                <div class="catimg">
                  <img src="/static/images/pizza.svg" alt="pizza" />
                </div>
                <p class="catname">Pizza</p>
              </div>
              <div class="cat">
                <div class="catimg">
                  <img src="/static/images/hamburger.svg" alt="hamburger" />
                </div>
                <p class="catname">Burger</p>
              </div>
              <div class="cat">
                <div class="catimg">
                  <img src="/static/images/pizza.svg" alt="pizza" />
                </div>
                <p class="catname">Pizza</p>
              </div>
              <div class="cat">
                <div class="catimg">
                  <img src="/static/images/hamburger.svg" alt="hamburger" />
                </div>
                <p class="catname">Burger</p>
              </div>
              <div class="cat">
                <div class="catimg">
                  <img src="/static/images/pizza.svg" alt="pizza" />
                </div>
                <p class="catname">Pizza</p>
              </div>
            </span>
          </div>
          {/* Menu Category with Menu Listing */}
          <div class="menu">
            <div class="categorytitle">
              <p>Burger</p>
            </div>
            <div class="productslist">
              <div class="item">
                <div class="itemimg">
                  <img src="/static/images/burger.jpeg" alt="burger" />
                </div>
                <div class="itemdesc">
                  <p class="title">Veg. Burger</p>
                  <p class="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat, officia.
                  </p>
                  <div class="price">
                    <p class="rs">Rs. 90</p>
                    <div class="addtodish">
                      <p>ADD TO DISH</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="horizontal">
                <hr />
              </div>
              <div class="item">
                <div class="itemimg">
                  <img src="/static/images/burger.jpeg" alt="burger" />
                </div>
                <div class="itemdesc">
                  <p class="title">Veg. Burger</p>
                  <p class="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat, officia.
                  </p>
                  <div class="price">
                    <p class="rs">Rs. 90</p>
                    <div class="addtodish">
                      <p>ADD TO DISH</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="horizontal">
                <hr />
              </div>
              <div class="item">
                <div class="itemimg">
                  <img src="/static/images/burger.jpeg" alt="burger" />
                </div>
                <div class="itemdesc">
                  <p class="title">Veg. Burger</p>
                  <p class="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat, officia.
                  </p>
                  <div class="price">
                    <p class="rs">Rs. 90</p>
                    <div class="addtodish">
                      <p>ADD TO DISH</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="horizontal">
                <hr />
              </div>
              <div class="item">
                <div class="itemimg">
                  <img src="/static/images/burger.jpeg" alt="burger" />
                </div>
                <div class="itemdesc">
                  <p class="title">Veg. Burger</p>
                  <p class="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat, officia.
                  </p>
                  <div class="price">
                    <p class="rs">Rs. 90</p>
                    <div class="addtodish">
                      <p>ADD TO DISH</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="horizontal">
                <hr />
              </div>
              <div class="item">
                <div class="itemimg">
                  <img src="/static/images/burger.jpeg" alt="burger" />
                </div>
                <div class="itemdesc">
                  <p class="title">Veg. Burger</p>
                  <p class="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat, officia.
                  </p>
                  <div class="price">
                    <p class="rs">Rs. 90</p>
                    <div class="addtodish">
                      <p>ADD TO DISH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second category */}

      {/* Checkout Fixed Footer */}
      <footer class="footer">
        <div class="footer_content">
          <div class="foot_left">
            <p class="total_qty">
              2 Items{" "}
              <span>
                <small>In Dish</small>
              </span>
            </p>
            <p class="totalrs">Total : 560 Rs.</p>
          </div>
          <div class="foot_right">
            <span class="checkout">
              <p>CHECKOUT</p>
              <div class="check_btn">
                <img src="/static/images/rightarrow.svg" alt="" />
              </div>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
