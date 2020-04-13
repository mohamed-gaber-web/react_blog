import React, { useState } from "react";
import "./index.style.scss";
import axios from "axios";

const AddPost = (props) => { 

    const [titleVal, setTitleVal] = useState("");
    const [imageVal, setImageVal] = useState("");
    const [contentVal, setContentVal] = useState("");
    const date = new Date().toLocaleDateString();

    const addPost = () => {
        axios.post("https://blog-27edb.firebaseio.com/posts.json",
            { title: titleVal, image: imageVal, content: contentVal, date }
            )
            .then(res => {
                // console.log(res) 
                if (res) { 
                    props.history.push("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="form_add_post">
            <div className="container">
                <div className="form-group">
                    <input
                        type="text"
                        value={titleVal}
                        className="form-control"
                        placeholder="title"
                        onChange={(event) => setTitleVal(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        value={imageVal}
                        className="form-control"
                        placeholder="add image url"
                        onChange={(event) => setImageVal(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <textarea
                        className="form-control text-height"
                        onChange={(event) => setContentVal(event.target.value)}
                        value={contentVal}
                    > Content </textarea>
                </div>


                <button className="btn btn-info" onClick={addPost}> add post </button>
            </div>
        </div>
    );
}

export default AddPost;
