import React from 'react'
import useFetch from '../../useFetch'

const PostDetails = (prpos) => {

    let { data: post, isloading, errMsg } = useFetch(`http://localhost:4000/posts/${prpos.match.params.id}`);

    const handleDelete = () => {
        fetch(`http://localhost:4000/posts/${prpos.match.params.id}`, {
            method: "DELETE",
        }).then(() => {
            prpos.history.push("/");
        });
    };

    return (
        <>
            {isloading && <div>loading ...</div>}
            {errMsg && <div className="error">{errMsg}</div>}
            {post && !isloading && !errMsg && (
                <article className="container post-details">
                    <div className="post-details-title">
                        <h1> {post.title}</h1>
                        <button className="btn btn-danger" onClick={handleDelete}> Delete </button>
                    </div>
                    <img src={post.image} alt="" className="post-details-img" />
                    <div className="post-author">
                        By: {post.author ? post.author : "Ali"}
                    </div>
                    <p className="post-details-body">{post.body}</p>
                </article>
            )}
        </>
    )
}

export default PostDetails
