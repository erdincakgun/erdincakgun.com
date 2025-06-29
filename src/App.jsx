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
      <article class="prose p-2">
        <p>Hi, I'm Erdinç Akgün, a devops consultant from Türkiye. I've worked on projects ranging from real-time unmanned aerial vehicle systems to machine learning deployments and full-stack web applications.</p>
        <h2>Contact</h2>
        <a href="mailto:hello@erdincakgun.com?subject=Website%20Contact%20-%20erdincakgun.com&body=Hi%20Erdinç,%20">hello@erdincakgun.com</a>
      </article>
    </>
  );
}

export default App;
