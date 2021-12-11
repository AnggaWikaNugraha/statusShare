import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { Button, Confirm, Icon } from 'semantic-ui-react'
import { DELETE_POST_MUTATION, FETCH_POSTS_QUERY } from '../util/graphql';

const DeleteButton = ({ postId }) => {
    const [confirmOpen, setConfirmOpen] = useState(false);

    const [deletePostOrMutation] = useMutation(DELETE_POST_MUTATION, {
        update(proxy) {
            setConfirmOpen(false);
            const data = proxy.readQuery({ query: FETCH_POSTS_QUERY });
            const x = data.getPosts.filter((p) => p.id !== postId);
            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data: {
                    getPosts: x
                }
            });
        },
        variables: {
            postId,
        }
    })

    return (
        <>
            <Button
                as="div"
                color="red"
                floated="right"
                onClick={() => setConfirmOpen(true)}
            >
                <Icon name="trash" style={{ margin: 0 }} />
            </Button>
            <Confirm
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={deletePostOrMutation}
            />
        </>
    )
}

export default DeleteButton
