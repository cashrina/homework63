import React from "react";
import {NavLink} from "react-router-dom";

interface HomeItemProps {
    postTitle: string,
    postDate: string,
    postLink: string
}

const HomeItem: React.FC<HomeItemProps> = ({ postTitle, postDate, postLink}) => {
    console.log("Post Information:", postTitle);
    return (
        <div className="card">
            <div className="card-header">
                <p>Created on: </p>
            </div>
            <div className="card-body">
                <p>Created on: {postDate}</p>
                <h5 className="card-title">{postTitle}</h5>
                <NavLink to={`/posts/${postLink}`} className="btn btn-primary">
                    Read more
                </NavLink>
            </div>
        </div>
    );
};

export default HomeItem;