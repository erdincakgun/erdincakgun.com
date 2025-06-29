import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <title>Erdinç Akgün</title>
      <meta
        name="description"
        content="Hi, I'm Erdinç Akgün, a devops consultant from Türkiye. I've worked on projects ranging from real-time unmanned aerial vehicle systems to machine learning deployments and full-stack web applications."
      />
      <Navbar></Navbar>
      <div className="mx-auto max-w-4xl">
        <article class="prose p-2 max-w-none w-full">
          <h2>About Me</h2>
          <p>
            Hi, I'm Erdinç Akgün, a devops consultant from Türkiye. I've worked
            on projects ranging from real-time unmanned aerial vehicle systems
            to machine learning deployments and full-stack web applications.
          </p>
          <h2>About this website</h2>
          <p>
            I built this website as a personal hub to share who I am and what I
            do.
          </p>
          <h2>I'm looking for</h2>
          <p>a java developer I can team up with.</p>
          <h2>Contact</h2>
          <a href="mailto:hello@erdincakgun.com?subject=Website%20Contact%20-%20erdincakgun.com&body=Hi%20Erdinç,%20">
            hello@erdincakgun.com
          </a>
        </article>
      </div>
    </>
  );
}

export default App;
