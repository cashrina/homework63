import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axiosApi from "../axiosApi.ts";
import { PostCustomer } from "../types.ts";

const Post: React.FC = () => {
    const [onePost, setOnePost] = useState<PostCustomer>();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOnePost = async () => {
            try {
                const response = await axiosApi.get<PostCustomer | undefined>(`/posts/${params.postId}.json`);
                if (response.data) {
                    setOnePost(response.data);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };
        void fetchOnePost();
    }, [params]);

    const deletePost = async () => {
        try {
            await axiosApi.delete(`/posts/${params.postId}.json`);
            navigate('/');
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div>
            <div>
                <p>{onePost?.date}</p>
                <h3>{onePost?.title}</h3>
                <p>{onePost?.information}</p>
            </div>
            <div>
                <NavLink to={`/posts/${params.postId}/edit`} className="btn btn-primary">Edit</NavLink>
                <button className="btn btn-danger ms-2" onClick={deletePost}>Delete</button>
            </div>
        </div>
    );
};

export default Post;
