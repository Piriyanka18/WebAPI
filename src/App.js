import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import{BrowserRouter,Route,Routes,NavLink, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className ="d-flex justify-content-center m-3">
        React Js FrondEnd
      </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <u1 className="navbar-nav">
            <li className ="nav-item-m-1">
              <NavLink className="btn btn-ligt btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className ="nav-item-m-1">
              <NavLink className="btn btn-ligt btn-outline-primary" to="/department">
                Department
              </NavLink>
            </li>
            <li className ="nav-item-m-1">
              <NavLink className="btn btn-ligt btn-outline-primary" to="/employee">
                Employee
              </NavLink>
            </li>
          </u1>

      </nav>
       <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/department' component={Department}/>
        <Route path='/employee' component={Employee}/>
        </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
