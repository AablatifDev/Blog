import React, { useState } from 'react'

function CreatePost(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [url, setUrl] = useState("");
    const [author, setAuthor] = useState("Admin");

    const handleForm = (e) => {
        e.preventDefault();
        const post = {
            title,
            body,
            image: url,
            author,
        };
        fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post),
        }).then(() => {
            // console.log("post added");
            props.history.push("/");
        });
    }


    return (
        <section className="create-post">
            <h2>Add New Post</h2>
            <form onSubmit={handleForm}>
                <label>Blog title :</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Image :</label>
                <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)} />
                <label>Blog body :</label>
                <textarea
                    required
                    rows="10"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author :</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Bloger">Bloger</option>
                </select>
                <button className="btn" type="submit">
                    Add Blog
                </button>
            </form>
        </section>
    )
}

export default CreatePost
