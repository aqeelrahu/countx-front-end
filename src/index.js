import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import NewAccount from './NewAccount';
import * as serviceWorker from './serviceWorker';
import Accounts from './Accounts';



const routing = (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/NewAccount">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
        <table className="App-nav"  >
           <tbody>
           <tr >
           <td><Link to={'/NewAccount'} className="App-header pull-left">Signup</Link></td>
           <td className="App-header pull-right"><Link to={'/'} className="App-header pull-right">Login</Link></td>
           <td><Link to={'/Accounts'} className="App-header pull-left">Accounts</Link></td>
           </tr>
             </tbody>
         </table>
        <Route exact path="/" component={App} />
        <Route path="/NewAccount" component={NewAccount} />
        <Route path="/Accounts" component={Accounts} />
      </div>
    </Router>
)
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
