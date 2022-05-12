import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Directory from "./routes/directory.component";
import Plurals from "./routes/plurals.component";
import Subjunctive from "./routes/subjunctive.component";

const App = () => {
  return (
    <Fragment>
      <header>
        <h1>GreeactJs</h1>
        <p>Modern Greek pills on ReactJs</p>
      </header>      
      <main>
        <Routes>
          <Route path='/' element={<Directory />}></Route> 
          <Route path='plurals' element={<Plurals />}></Route>
          <Route path='subjunctive' element={<Subjunctive />}></Route>
        </Routes>      
      </main>
      <footer>
        <p>Built with ReactJs, &#9829; and <a href='https://github.com/kevquirk/simple.css'>Simple.css</a></p>
      </footer>      
    </Fragment>
  );
}

export default App;
