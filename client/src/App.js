import React from 'react'
import 'semantic-ui-css/semantic.min.css';

import ApolloProviderApp from './ApolloProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './pages/Home';

function App() {
  return (
    <ApolloProviderApp>
      <Router>
        <Container>
          {/* <MenuBar /> */}
          <Route exact path="/" component={Home} />
          {/* <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} /> */}
        </Container>
      </Router>
    </ApolloProviderApp>
  );
}

export default App;
