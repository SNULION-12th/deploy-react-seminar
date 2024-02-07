import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
    const [commentList, setCommentList] = useState(comments); // state for comments
    const [newContent, setNewContent] = useState(""); // state for new comment

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        alert("댓글 작성"); // add api call for creating comment
        setNewContent("");
    };

    const handleCommentDelete = (commentId) => {
        console.log(commentId);
        alert("댓글 삭제"); // add api call for deleting comment
    };

    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
            {commentList.map((comment) => {
                return (
                    <CommentElement key={comment.id} comment={comment} handleCommentDelete={handleCommentDelete} />
                );
            })}
            
            <form className="flex flex-row mt-10 gap-3" onSubmit={handleCommentSubmit}>
                <input type="text" value={newContent} placeholder="댓글을 입력해주세요" className="input" style={{ width: "calc(100% - 100px)" }} onChange={(e) => setNewContent(e.target.value)} />
                <button type="submit" className="button">작성</button>
            </form>
        </div>
    );
};

export default Comment;
