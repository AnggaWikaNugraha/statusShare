import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react';
import { LIKE_POST_MUTATION } from '../util/graphql';
import { useNavigate } from 'react-router-dom';

const LikeButton = ({ user, post: { id, likeCount, likes } }) => {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (user && likes.find((like) => like.username === user.username)) {
            setLiked(true);
        } else setLiked(false);
    }, [user, likes]);

    const [likePost] = useMutation(LIKE_POST_MUTATION, {
        variables: { postId: id }
    });

    const likeButton = liked ? (
        <Button color="teal">
            <Icon name="heart" />
        </Button>
    ) : (
        <Button color="teal" basic>
            <Icon name="heart" />
        </Button>
    )

    return (
        <>
            {
                user
                    ?
                    <>
                        <Button as="div" labelPosition="right" onClick={likePost}>
                            {likeButton}
                            <Label basic color="teal" pointing="left">
                                {likeCount}
                            </Label>
                        </Button>
                    </>
                    : <>
                        <Button as="div" labelPosition="right" onClick={() => navigate('/login')} color="teal" basic>
                            <Button color="teal" basic>
                                <Icon name="heart" />
                            </Button>
                            <Label basic color="teal" pointing="left">
                                {likeCount}
                            </Label>
                        </Button>

                    </>
            }
        </>
    )
}

export default LikeButton
