import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pages from './components/pages'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
