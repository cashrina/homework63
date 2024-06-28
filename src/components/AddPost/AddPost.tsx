import React, {useCallback, useEffect, useState} from "react";
import {PostCustomer} from "../../types.ts";
import {useNavigate, useParams} from "react-router-dom";
import Spinner from "../Spinner.tsx";
import axiosApi from "../../axiosApi.ts";

const IAddPost = {
    title: '',
    information: '',
    date: '',
}

const AddPost = () => {

    const {id} = useParams();
    const [postCustomer, setPostCustomer] = useState<PostCustomer>(IAddPost);

    const [isFetching, setIsFetching] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setPostCustomer((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const dateFormat = (date: Date): string => {
        return [
                date.getMonth() + 1,
                date.getDate(),
                date.getFullYear(),
            ].join('/') + ' ' +
            [
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
            ].join(':');
    };

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const currentDate = new Date();
        const post: PostCustomer = {
            title: postCustomer.title,
            information: postCustomer.information,
            date: dateFormat(currentDate),
        };

        try {
            if (id !== undefined) {
                await axiosApi.put(`/posts/${id}.json`, post);
            } else {
                await axiosApi.post('/posts.json', post);
            }

            setPostCustomer(IAddPost);
            navigate('/');

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchOnePost = useCallback(async (postId: string) => {
        setIsFetching(true);
        const response = await axiosApi.get<PostCustomer | null>(`/posts/${postId}.json`);
        if (response.data) {
            setPostCustomer({
                ...response.data,
                date: response.data.date.toString(),
            });
        }
        setIsFetching(false);
    }, []);

    useEffect(() => {
        if (id !== undefined) {
            void fetchOnePost(id);
        } else {
            setPostCustomer(IAddPost);
        }
    }, [id, fetchOnePost]);

    let form = (
        <form className="container" onSubmit={onFormSubmit}>
            <h1>{id ? 'Edit post' : 'Create a new post'}</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    required
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter title"
                    value={postCustomer.title}
                    onChange={onFieldChange}
                    style={{cursor: "pointer"}}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="information" className="form-label">Information</label>
                <textarea
                    className="form-control"
                    id="information"
                    name="information"
                    placeholder="Enter information"
                    value={postCustomer.information}
                    onChange={onFieldChange}
                    style={{height: "100px", cursor: "pointer"}}
                />
            </div>
            <div>
                {id ? (
                    <button className="btn btn-primary" type="submit">Save</button>
                ) : (
                    <button className="btn btn-primary" type="submit">Add</button>
                )}
            </div>
        </form>
    );

    if (isLoading) {
        form = (
            <div className="d-flex justify-content-center align-items-center" style={{height: '300px'}}>
                <Spinner/>
            </div>
        );
    }

    return isFetching ? isFetching : (
        <div className="container">
            <div className="row mt-2 justify-content-center">
                <div className="col-lg-6">
                    {form}
                </div>
            </div>
        </div>
    );
};
    export default AddPost;