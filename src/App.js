import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pages from './components/pages'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route path="/board/:id" component={Pages.Board} />
          <Route path="/topic/:topicId" component={Pages.Topic} />
          <Route path="/mastermind" component={Pages.Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
