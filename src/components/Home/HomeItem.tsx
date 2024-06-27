import React from "react";

interface HomeItemProps {
    postTitle: string,
    postDate: string,
}

const HomeItem: React.FC<HomeItemProps> = ({ postTitle, postDate}) => {
    console.log("Post Information:", postTitle);
    return (
        <div className="card">
            <div className="card-header">
                <p>Created on: </p>
            </div>
            <div className="card-body">
                <h5 className="card-title">{postTitle}</h5>
                <p>{postDate}</p>
                <a href="/posts/:id" className="btn btn-primary">Read more</a>
            </div>
     </div>
    );
};

export default HomeItem;