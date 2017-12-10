import React from 'react';
import Hello from './hello/hello';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Hello}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;