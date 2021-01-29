import React from "react";
import "./css/style.css";

function Stories() {
  return (
    <div>
      <div class="test">
        <header className="header">
          <h1>Stories</h1>
        </header>
        <section class="gallery">
          <div class="line-one">
            <div class="content-one">
              <img
                class="stories"
                alt="French toast with blueberries and bananas on a black table, surrounded by powdered sugar."
                src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"
              />
              <p class="green">
                "If it weren't for Potlucky, our next gathering would have been
                a disaster! The site makes keeping track of everything simple,
                and let us focus on family." Continue story...
              </p>
            </div>
            <div class="content-one">
              <img
                class="stories"
                alt="Variety of citrus fruits sliced in half to display their colors, including red, yellow, and green."
                src="https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <p class="green">
                "Wow! Potlucky makes everything run like a charm. Our wedding
                anniversary potluck was in serious trouble until we found
                Potlucky! Now we'll never use anything else!"
              </p>
            </div>
            <div class="content-one">
              <img
                class="stories"
                alt="Well-baked pizza on an antique wooden table."
                src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
              <p class="green">
                "Without Potlucky we would have wasted countless hours trying to
                get in touch with people and coordinating minor details. Now we
                are free from stone age potluck planning!"
              </p>
            </div>
          </div>
          <div class="line-one">
            <div class="content-one">
              <img
                class="stories"
                alt="Meal of grilled chicken topped with potatoes and served with greens."
                src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
              />
              <p class="blue">
                "Potlucky took everything I always hated about planning huge
                gatherings, especially with food, and completely revamped it.
                Now I never dread planning them, and even look forward to it!"
              </p>
            </div>
            <div class="content-one">
              <img
                class="stories"
                alt="Bowl of a spicy stew, with dried red peppers as well as a variety of grains, tubers, and vegetables."
                src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
              <p class="blue">
                "Thanks to Potlucky my life has completely changed and now I
                have a potluck every weekend. If it weren't for Potlucky I never
                could have experienced the joy of a successful potluck."
              </p>
            </div>
            <div class="content-one">
              <img
                class="stories"
                alt="Tower of chocolate peanut butter cups drizzled in chocolate syrup placed against a stark white background."
                src="https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <p class="blue">
                "Potlucky is our very own pot-o'-gold when it comes to arranging
                large functions with food. If you haven't tried Potlucky our
                horror story turned success story is sure to convince you!"
              </p>
            </div>
          </div>
        </section>
        <footer>
          <nav className="nav-landing2">
            <a
              className="b1 aTag"
              href="/"
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </a>

            <a
              className="b2 aTag"
              href="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </a>

            <a
              className="b3 aTag"
              href="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              Register
            </a>
            <a
              className="b4 aTag"
              href="/potluckPage"
              style={{ textDecoration: "none", color: "black" }}
            >
              Go To Potluck Page
            </a>

            <a
              className="b1 aTag"
              href="/aboutUs"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </a>

            <a
              className="b2 aTag"
              href="/successStories"
              style={{ textDecoration: "none", color: "black" }}
            >
              Success Stories
            </a>

            <a
              className="b3 aTag"
              href="/stories"
              style={{ textDecoration: "none", color: "black" }}
            >
              Stories
            </a>

            <a
              className="b4 aTag"
              href="/howItWorks"
              style={{ textDecoration: "none", color: "black" }}
            >
              How It Works
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
export default Stories;
