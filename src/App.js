import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import myStore from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Provider store={myStore}>
      <div className="App">
        <div className="container">
            
            <Switch>
              <Route exact path="/todos" component={Todos}/>
              <Route exact path="/todos/create" component={AddTodo}/>
            </Switch>


        </div>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
