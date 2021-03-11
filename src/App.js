import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMacth from './Components/NoMatch/NoMacth';
import AboutLeague from './Components/AboutLeague/AboutLeague';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route path="/aboutLeague/:idLeague"> <AboutLeague></AboutLeague> </Route>
          <Route path="*"><NoMacth></NoMacth></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
