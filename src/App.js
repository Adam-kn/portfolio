import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import GlobalSlyles from "./GlobalStyles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";


function App() {
  return (
    <BrowserRouter>
      <GlobalSlyles/>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
