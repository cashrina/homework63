import React from "react";
import { NavLink } from "react-router-dom";

interface HomeItemProps {
    postTitle: string;
    postDate: string;
    postLink: string;
}

const HomeItem: React.FC<HomeItemProps> = ({ postTitle, postDate, postLink }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-3">
            <div className="card h-100 shadow-lg">
                <div className="card-header">
                    <p className="card-text fw-lighter">Created on: {postDate}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{postTitle}</h5>
                    <NavLink to={`/posts/${postLink}`} className="btn btn-primary">
                        Read more
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;
