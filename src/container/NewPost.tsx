import React from 'react';
import {Post} from "../types.ts";
import AddPost from "../components/AddPost/AddPost.tsx";

interface PropsNewPost {
    onCreatePost: (post: Post) => void;
}

const NewPost:React.FC<PropsNewPost> = ({onCreatePost}) => {
    return (
        <div>
        <AddPost onSubmit={onCreatePost}/>
        </div>
    );
};

export default NewPost;