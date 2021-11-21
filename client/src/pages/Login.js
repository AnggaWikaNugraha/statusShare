import React, { useContext } from 'react';
import { Grid, Transition } from 'semantic-ui-react';

import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function Login() {

    return (
        <Grid columns={3}>
            Login
        </Grid>
    );
}

export default Login;
