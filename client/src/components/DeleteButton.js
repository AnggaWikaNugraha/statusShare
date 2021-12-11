import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { Button, Confirm, Icon } from 'semantic-ui-react'
import { DELETE_COMMENT_MUTATION, DELETE_POST_MUTATION, FETCH_POSTS_QUERY } from '../util/graphql';

const DeleteButton = ({ postId, commentId, callback }) => {
    const [confirmOpen, setConfirmOpen] = useState(false);

    const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;

    const [deletePostOrMutation] = useMutation(mutation, {
        update(proxy) {
            setConfirmOpen(false);
            if (!commentId) {
                const data = proxy.readQuery({ query: FETCH_POSTS_QUERY });
                const x = data.getPosts.filter((p) => p.id !== postId);
                proxy.writeQuery({
                    query: FETCH_POSTS_QUERY,
                    data: {
                        getPosts: x
                    }
                });
            }
            if (callback) callback();
        },
        variables: {
            postId,
            commentId
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
