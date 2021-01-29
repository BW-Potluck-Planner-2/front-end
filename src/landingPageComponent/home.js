import React from "react";

import "./css/style.css";

export default function Index() {
  return (
    <div>
      <div class="test">
        <section id="hero-image">
          <div id="hero-text">
            <p class="potluck-text-one">
              So, you got stuck planning the potluck?
            </p>
            <p class="potluck-text-two">Well, you just got potlucky!</p>
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
      ;
    </div>
  );
}
