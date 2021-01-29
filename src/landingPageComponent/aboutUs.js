import React from "react";

import "./css/aboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <header className="header">
        <h2>Meet The Team</h2>
      </header>
      <main>
        <section class="people">
          <div class="box1">
            <img
              src="https://ca.slack-edge.com/ESZCHB482-W0123RJUSS3-4eb2d98cbeb3-512"
              alt="Sage"
            />
            <h3>Sage</h3>
            <h4>Project Lead</h4>
            <p>
              When she’s not leading epic projects, Sage enjoys dog sledding in
              Antarctica.
            </p>
          </div>
          <div class="box2">
            <img
              src="https://ca.slack-edge.com/ESZCHB482-W012R4ELF6Y-e81c53ade7bf-512"
              alt="Shanon"
            />
            <h3>Shanon</h3>
            <h4>Front End Developer</h4>
            <p>
              Shanon is a highly qualified front end developer. With a solid 2
              months of experience, she enjoys all coding challenges. While
              she’s coding she like to hang out with her cat, Squiggles.
            </p>
          </div>
          <div class="box3">
            <img
              src="https://ca.slack-edge.com/ESZCHB482-W013NPA0BUP-6dca551ed4e0-512"
              alt="Mars"
            />
            <h3>Mars</h3>
            <h4>Web Developer</h4>
            <p>
              Mars is out of this world when it comes to web development. He
              enjoys skateboarding, video games, and listening to 70s rock
              anthems.
            </p>
          </div>
          <div class="box4">
            <img
              src="https://ca.slack-edge.com/ESZCHB482-W012QNXAHHA-3718df56a021-512"
              alt="Prakash"
            />
            <h3>Prakash</h3>
            <h4>Front End Developer</h4>
            <p>
              Prakash knows his front ends, that’s for sure. He was a science
              student, but finally finds his passion and becomes a full time
              coder.
            </p>
          </div>
          <div class="box5">
            <img
              src="https://ca.slack-edge.com/ESZCHB482-W014G4L1M7T-462f5679b788-512"
              alt="Andy"
            />
            <h3>Andy</h3>
            <h4>Web Developer</h4>
            <p>
              Although relatively new to web design, his Hello World software
              has been a big hit at international conferences.
            </p>
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
      </main>
    </div>
  );
}
