import React from "react";

interface HomeItemProps {
    postDate: string,
    postInfo: string,
}

const HomeItem: React.FC<HomeItemProps> = ({postDate, postInfo}) => {
    return (
        <div className="card">
            <div className="card-header">
                <p>Created on: {postDate}</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">{postInfo}</h5>
                <a href="#" className="btn btn-primary">Read more</a>
            </div>
     </div>
    );
};

export default HomeItem;