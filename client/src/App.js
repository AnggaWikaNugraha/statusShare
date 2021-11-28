import React from 'react'
import 'semantic-ui-css/semantic.min.css';

import ApolloProviderApp from './ApolloProvider';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import MenuBar from './components/MenuBar';
import { Container } from 'semantic-ui-react';
import Layout from './pages/Layout';

function App() {
  return (
    <ApolloProviderApp>

      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" component={<Login />} />
              <Route path="register" component={Register} />
              <Route path="posts/:postId" component={SinglePost} />
            </Route>
          </Routes>

        </Container>
      </BrowserRouter>

    </ApolloProviderApp>
  );
}

export default App;
