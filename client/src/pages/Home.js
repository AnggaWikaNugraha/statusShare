import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function Home() {

    const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);

    return (
        <Grid columns={3}>
            Home
        </Grid>
    );
}

export default Home;
