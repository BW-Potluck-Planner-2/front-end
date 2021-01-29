import React from "react";

import "./css/style.css";

export default function OurStories() {
  return (
    <div>
      <header class="hero-header">
        <div id="potluck-logo2">
          <img
            src="https://images.unsplash.com/photo-1571559932711-cb498a7a1ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Light blue dutch over on a polished wooden stable serving as a logo for Potlucky"
          />
          <h1>Potlucky Potluck Planner</h1>
        </div>
        <nav class="nav-landing3">
          <a class="b1 aTag" href="how-it-works.htm">
            {" "}
            How it Works
          </a>
          <a class="b2 aTag" href="Index.html">
            Home
          </a>
          <a class="b3 aTag" href="about-us.htm">
            Meet the Team
          </a>
          <a class="b4 aTag" href="#login">
            Login/ Register
          </a>
        </nav>
      </header>
      <section>
        <div class="storytelling">
          <h2 class="story-header">Our Story</h2>
        </div>
        <div class="line-two">
          <img
            class="our-story"
            alt="An image of French toast with blueberries and bananas on a black table, surrounded by powdered sugar."
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"
          />
          <p class="story-text-one">
            "If it weren't for Potlucky, our next gathering would have been a
            disaster! The site makes keeping track of everything simple, and let
            us focus on family. This year when we had to organize a celebratory
            potluck for our son's soccer championship victory we found the
            perfect place to help us get started and to see it through."
          </p>
        </div>
        <div class="line-two">
          <p class="story-text-two">
            When we were trying to organize our first major potluck we weren't
            sure where to begin. Should we just try to make an event on
            facebook? Get in contact with people by phone? We had absolutely no
            idea. As luck would have it, one of us stumbled on Potlucky and it
            turned out to be a lot easier than we were afraid of. We were able
            to make a list of food items for guests to bring, let them pick what
            they wanted to bring item by item, and keep track of the ever
            growing guest list (with a few cancellations along the way, of
            course) with ease. By the time the day rolled around we were all
            ready to go and everything went off without a hitch. We didn’t have
            to resort to the very user-unfriendly experience of facebook events
            or micromanage a hundred phone calls and clumsily designed lists in
            Microsoft Word. We were able to focus on family and friends and feel
            like a part of our community instead of feeling like overworked
            event coordinators.
          </p>
        </div>
      </section>
      <footer>
        <nav class="nav-landing4">
          <a class="b1 aTag" href="how-it-works.htm">
            {" "}
            How it Works
          </a>
          <a class="b2 aTag" href="Index.html">
            Home
          </a>
          <a class="b3 aTag" href="about-us.htm">
            Meet the Team
          </a>
          <a class="b4 aTag" href="#login">
            Login/ Register
          </a>
        </nav>
      </footer>
    </div>
  );
}
