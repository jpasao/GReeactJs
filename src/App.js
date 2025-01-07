import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ScrollButton from "./components/scroll-button.component";
import Directory from "./routes/directory.component";
import { sections } from "./resources/sections";

const App = () => {
  return (
    <Fragment>
      <header>
        <h1>GreeactJs</h1>
        <p>Modern Greek pills on ReactJs</p>
        <small><Link to='/landing'>return to index</Link></small>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Directory />}></Route> 
          {
            sections.map((section) => 
              <Route key={section.route} path={section.route} element={section.component}></Route>
            )
          }
        </Routes>
      </main>
      <ScrollButton />
      <footer>
        <p>Built with ReactJs, &#9829; and <a href='https://github.com/kevquirk/simple.css'>Simple.css</a></p>
      </footer>        
    </Fragment>
  );
}

export default App;
