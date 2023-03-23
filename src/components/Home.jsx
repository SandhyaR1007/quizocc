import React from "react";
import "../styles/styles.css";
const Home = () => {
  return (
    <div className="home container">
      <header className="home__header">
        <h1 className="home__header--heading">Quizzoc</h1>
      </header>
      <main className="home__main">
        <h1>Are you ready for space exploration?</h1>
        <br />
        <p>
          This game is a simple quiz wherein you will be asked questions based
          on your selected category. You will be given enough time to answer
          those questions, however there will be a timer for the quiz. You have
          to complete it in the given time frame. All the best!!
        </p>
        <br />
        <h3>This game has very simple rules</h3>
        <br />
        <ul className="home__main--list">
          <li>
            <span className="numbers">1</span>50% Passing Percentage
          </li>
          <li>
            <span className="numbers">2</span>5 questions
          </li>
          <li>
            <span className="numbers">3</span>10 minutes time
          </li>

          <li>
            <span className="numbers">4</span>1 Attempt{" "}
          </li>
        </ul>
      </main>
      <footer className="home__footer">
        <button className="btn btn-primary">
          Start the game <i className="fa-solid fa-angles-right"></i>
        </button>
      </footer>
    </div>
  );
};

export default Home;
