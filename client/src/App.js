import React from 'react'
import 'semantic-ui-css/semantic.min.css';

import ApolloProviderApp from './ApolloProvider';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <ApolloProviderApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProviderApp>
  );
}

export default App;
