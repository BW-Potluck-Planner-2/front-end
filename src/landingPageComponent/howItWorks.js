import React from "react";
import "./css/howItWorks.css";

export default function HowItWorks() {
  return (
    <div>
      <header className="header">
        <div class="title">
          <h2>Potlucky Process</h2>
        </div>
      </header>

      <main>
        <div class="process">
          <div>
            <ol start="1">
              <li>1. Create a potluck.</li>
              <li>2. List food items for people to bring.</li>
              <li>3. Send link to party invitees so they can sign up.</li>
              <li>4. People sign up to bring stuff.</li>
            </ol>
          </div>

          <img src="https://images.unsplash.com/photo-1560269507-9495cdfcadca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
      </main>

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
  );
}
