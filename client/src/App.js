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
import { Container } from 'semantic-ui-react';
import Layout from './pages/Layout';
import { AuthProvider } from './context/auth';
import { GuardOnlyLogin } from './util/AuthRouter';

function App() {
  return (
    <AuthProvider>
      <ApolloProviderApp>

        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="posts/:postId" element={<SinglePost />} />
              </Route>
            </Routes>

          </Container>
        </BrowserRouter>

      </ApolloProviderApp>
    </AuthProvider>
  );
}

export default App;
