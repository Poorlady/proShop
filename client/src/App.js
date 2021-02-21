import { HomePage, ProductPage, Cart } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/cart/:id?" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
