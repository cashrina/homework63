import React from "react";
import {NavLink} from "react-router-dom";

interface IPost {
    title: string;
    info: string;
    date: string;
}
const Post:React.FC<IPost> = ({title, info, date}) => {
    return (
        <div>
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
            <div>
                <NavLink to="/posts/:id/edit" className="btn btn-primary">Edit</NavLink>
                <NavLink to="/post:delete" className="btn btn-danger">Delete</NavLink>
            </div>

        </div>
    );
};

export default Post;