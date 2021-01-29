import React from "react";

import "./css/successStories.css";

export default function successStories() {
  return (
    <div>
      <header className="header">
        <h1>Success Stories</h1>
      </header>
      <main className="main">
        <div class="story1 storyDiv">
          <img
            src="https://images.unsplash.com/photo-1503011994592-d30eb1ef61dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1295&q=80"
            alt="crepe with ice cream"
          />
          <h3>Potlucky Got Me Promoted</h3>
          <p>
            I was the new guy at the office. So of course everyone thought it
            would be hilarious if they put me in charge of the company potluck.
            They were certain of my failure. But little did they know I had
            discovered a secret weapon--Potlucky. With Potlucky it was easy to
            make sure there was more than chips and salsa at our event. In fact,
            it turned out to be the best potluck in company history. My boss
            noticed, and now I’m a VP! Thanks Potlucky!
          </p>
        </div>
        <div class="story2 storyDiv">
          <img
            src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1350&q=80"
            alt="plate of crackers with strawberries"
          />
          <h3>Potlucky In Love</h3>
          <p>
            My love life was on the skids. No matter how hard I tried, whenever
            I planned a potluck, we’d have way too much zucchini bread. And the
            ladies would notice. Then, I heard about Potlucky from a friend and
            figured I’d give it a try. I mean why, not, things couldn’t get any
            worse. Well I was pleasantly surprised to find out that Potlucky was
            very easy to use. And the best part, at my next potluck, everyone
            brought something different! There was still plenty of zucchini
            bread, but not too much. All of a sudden I was very popular--I got 3
            phone numbers that day.
          </p>
        </div>
        <div class="story3 storyDiv">
          <img
            src="https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="craft pizza"
          />
          <h3>Jesus &hearts; Potlucky</h3>
          <p>
            My church potluck party was coming up, and I was really nervous. I
            prayed for some help and all of a sudden I saw a blinding light and
            heard a voice say, “Potlucky will save you!” So I went to my
            computer and searched for Potlucky, and lo and behold there it was.
            Just what I needed to throw the best Potluck my congregation had
            ever seen.
          </p>
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
