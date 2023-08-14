import React, {FC} from 'react';
import {Text} from "../Themed";
type PropsType = {
    replies: number
    likes: number
}
const PostFooter: FC<PropsType> = ({likes, replies}) => {
    return (
        <Text style={{color: "grey"}}>
            {replies} replies · {likes} likes
        </Text>
    );
};

export default PostFooter;