const AddPost = () => {
    return (
        <form className="form-floating">
            <div className="form-floating">
                <input type="text" className="form-control mt-5" placeholder="Amazing world"/>
            </div>
            <div>
                <label htmlFor="floatingTextarea2" className="my-3">Comments</label>
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                          style={{height: "100px"}}></textarea>
            </div>
        </form>
    );
};

export default AddPost;