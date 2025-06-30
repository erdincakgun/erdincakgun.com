import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <title>Erdinç Akgün</title>
      <meta
        name="description"
        content="Hi, I'm Erdinç Akgün, a DevOps consultant from Türkiye. I've worked on projects ranging from real-time unmanned aerial vehicle systems to machine learning deployments and full-stack web applications."
      />
      <Navbar></Navbar>
      <div className="mx-auto max-w-4xl">
        <article className="prose p-2 max-w-none w-full">
          <h2>About Me</h2>
          <p>
            Hi, I'm Erdinç Akgün, a DevOps consultant from Türkiye. I've worked
            on projects ranging from real-time unmanned aerial vehicle systems
            to machine learning deployments and full-stack web applications.
          </p>
          <h2>About this website</h2>
          <p>
            I built this website as a personal hub to share who I am and what I
            do.
          </p>
          <p>
            For the curious tech folks: this is a static site built with React
            and TailwindCSS, and hosted on Cloudflare Pages.&nbsp;
            <a
              href="https://github.com/erdincakgun/erdincakgun.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              source code
            </a>
          </p>
          <h2>I'm looking for</h2>
          <p>a Java developer I can team up with.</p>
          <h2>Contact</h2>
          <p>
            <a
              className="no-underline"
              href="mailto:hello@erdincakgun.com?subject=Website%20Contact%20-%20erdincakgun.com&body=Hi%20Erdinç,%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
              &nbsp;hello@erdincakgun.com
            </a>
          </p>
          <p>
            <a
              className="no-underline"
              href="https://linkedin.com/in/erdinc-akgun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
              &nbsp;erdinc-akgun
            </a>
          </p>
          <p>
            <a
              className="no-underline"
              href="https://www.instagram.com/erdincsusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
              &nbsp;erdincsusername
            </a>
          </p>
        </article>
      </div>
    </>
  );
}

export default App;
