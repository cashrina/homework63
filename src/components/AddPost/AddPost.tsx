import React, {useCallback, useEffect, useState} from "react";
import {Post, PostCustomer} from "../../types.ts";
import {NavLink, useNavigate, useParams} from "react-router-dom";
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

    const[iaLoading, setLoading] = useState(false);
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
        setLoading(true);

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
            setLoading(false);
            navigate('/');
        }
    };

    const fetchOnePost = useCallback( async (id:string) => {
        setIsFetching(true);
        const response = await axiosApi.get<Post | null>(`/posts/${id}.json`);
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
            <button className="btn btn-primary mt-2" type="submit" disabled={iaLoading}>Add</button>
        </form>
    );

    if (iaLoading) {
        form = (
            <div className="d-flex justify-content-center align-items-center"
                 style={{height:'300px'}}>
                <Spinner />
            </div>
        );
    }




    return (
            < div className = "row mt-2" >
                < div className = "col" >
                    {form}
                </div>
            </div>
    );
};

export default AddPost;