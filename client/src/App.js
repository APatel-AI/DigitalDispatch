import "./App.css";
import codeBanner from "./images/coding.jpg";
function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          Digital Dispatch
        </a>

        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div className="post">
        <div className="post-image">
        <img src={codeBanner} alt="code" />

        </div>
        <div className="post-text">
        <h2>
          From Plaid to Figma, here are the startups that are likely — or
          definitely — not having IPOs this year
        </h2>
        <p className="post-info">
          <a className="author">Rebecca Szkutak</a>
          <span className="slash"> / </span>
          <time>11:00 AM PDT - May 24, 2024</time>
        </p>
        <p className="post-summary">
          Last year’s investor dreams of a strong 2024 IPO pipeline have faded,
          if not fully disappeared, as we approach the halfway point of the
          year.
        </p>
        </div>

      </div>

      <div className="post">
        <div className="post-image">
        <img src={codeBanner} alt="code" />

        </div>
        <div className="post-text">
        <h2>
          From Plaid to Figma, here are the startups that are likely — or
          definitely — not having IPOs this year
        </h2>
        <p className="post-info">
          <a className="author">Rebecca Szkutak</a>
          <span className="slash"> / </span>
          <time>11:00 AM PDT - May 24, 2024</time>
        </p>
        <p className="post-summary">
          Last year’s investor dreams of a strong 2024 IPO pipeline have faded,
          if not fully disappeared, as we approach the halfway point of the
          year.
        </p>
        </div>

      </div>

      <div className="post">
        <div className="post-image">
        <img src={codeBanner} alt="code" />

        </div>
        <div className="post-text">
        <h2>
          From Plaid to Figma, here are the startups that are likely — or
          definitely — not having IPOs this year
        </h2>
        <p className="post-info">
          <a className="author">Rebecca Szkutak</a>
          <span className="slash"> / </span>
          <time>11:00 AM PDT - May 24, 2024</time>
        </p>
        <p className="post-summary">
          Last year’s investor dreams of a strong 2024 IPO pipeline have faded,
          if not fully disappeared, as we approach the halfway point of the
          year.
        </p>
        </div>

      </div>

      

     
    </main>
  );
}

export default App;
