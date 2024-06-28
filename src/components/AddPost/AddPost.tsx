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
    const[postCustomer, setPostCustomer] = useState<PostCustomer>(IAddPost);

    const [isFetching, setIsFetching] = useState<boolean>(false);

    const[isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
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

    const onFormSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const currentDate = new Date();
        const post: PostCustomer = {
            title: postCustomer.title,
            information: postCustomer.information,
            date: dateFormat(currentDate),
        };

        if(id !== undefined) {
            await axiosApi.put(`/posts/${id}.json`, post);
        }

        try {
            await axiosApi.post('/posts.json/', post);
        } finally {
            setIsLoading(false);
            navigate('/');
        }
    };

    const fetchOnePost = useCallback( async (postId:string) => {
        setIsFetching(true);
        const response = await axiosApi.get<PostCustomer | null>(`/posts/${postId}.json`);
        if(response.data){
            setPostCustomer({
                ...response.data,
            date: response.data.date.toString(),
            });
        }
        setIsFetching(false);
    }, []);

    useEffect(() => {
        if(id !== undefined) {
            void fetchOnePost(id);
        } else {
            setPostCustomer(IAddPost);
        }
    }, [id, fetchOnePost]);

    let form = (
        <form className="form-floating" onSubmit={onFormSubmit}>
            <h1>{id? 'Edit post' : 'Create a new post'}</h1>
            <div className="form-floating">
                <input required
                       type="text"
                       className="form-control mt-5"
                       placeholder="Amazing world"
                       id="title"
                       name="title"
                       value={postCustomer.title}
                       onChange={onFieldChange}/>
            </div>
            <div>
                <label htmlFor="floatingTextarea2" className="my-3">Comments</label>
                <textarea className="form-control"
                          placeholder="Leave a comment here"
                          id="information"
                          name="information"
                          value={postCustomer.information}
                          onChange={onFieldChange}
                          style={{height: "100px"}}/>
            </div>
            <div>
                {id ? <button className="btn btn-primary mt-2" type="submit">Save</button> :
                    <button className="btn btn-primary mt-2" type="submit">Add</button>}
            </div>
        </form>
    );

    if (isLoading) {
        form = (
            <div className="d-flex justify-content-center align-items-center"
                 style={{ height: '300px' }}>
                <Spinner />
            </div>
        );
    }

    return isFetching ? isFetching : (
            < div className = "row mt-2" >
                < div className = "col" >
                    {form}
                </div>
            </div>
    );
};

export default AddPost;