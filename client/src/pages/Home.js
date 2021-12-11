import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { Grid, Transition } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { AuthContext } from '../context/auth';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function Home() {
    const { user } = useContext(AuthContext);

    const { loading, data } = useQuery(FETCH_POSTS_QUERY)
    return (
        <>
            <Grid columns={user ? 2 : 1}>
                {user && (
                    <Grid columns={1}>
                        <Grid.Column>
                            <PostForm />
                        </Grid.Column>
                    </Grid>
                )}
                <Grid columns={1}>
                    <Grid.Row>
                        {loading ? (
                            <h1>Loading posts..</h1>
                        ) : (
                            <Transition.Group>
                                {data?.getPosts &&
                                    data?.getPosts.map((post) => (
                                        <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                                            <PostCard post={post} />
                                        </Grid.Column>
                                    ))}
                            </Transition.Group>
                        )}
                    </Grid.Row>
                </Grid>
            </Grid>

        </>
    );
}

export default Home;
