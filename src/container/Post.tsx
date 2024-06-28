import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import axiosApi from "../axiosApi.ts";
import { PostCustomer} from "../types.ts";

const Post:React.FC = () => {
    const [onePost, setOnePost] = useState<PostCustomer>();


    const params = useParams();




    useEffect(() => {

        const fetchOnePost = async () => {

            try {
                const response = await axiosApi.get<PostCustomer | undefined>(`/posts/${params.postId}.json/`);

                if (response) {
                    setOnePost(response.data);
                }

            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        void fetchOnePost();


    }, [params]);

    console.log(onePost)

    return (
        <div>
            <div>
                <p>{onePost?.date}</p>
                <h3>{onePost?.title}</h3>
                <p>{onePost?.information}</p>
            </div>
            <div>
                <NavLink to="/posts/:id/edit" className="btn btn-primary">Edit</NavLink>
                <NavLink to="/post:delete" className="btn btn-danger">Delete</NavLink>
            </div>

        </div>
    );
};

export default Post;