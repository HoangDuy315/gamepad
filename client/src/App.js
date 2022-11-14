import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/buttons/login/Login";
import Signup from "./components/buttons/signup/Signup";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
