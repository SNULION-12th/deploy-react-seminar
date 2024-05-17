import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BigPost } from "../components/Posts";
import Comment from "../components/Comment";

// import posts from "../data/posts";
import { getPost } from "../apis/api";

const PostDetailPage = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    const getPostAPI = async () => {
      const post = await getPost(postId);
      setPost(post);
    };
    getPostAPI();
  }, [postId]);
  // 작성했던 getPost()를 호출한 후, setPostList를 통해 postList에 저장
  const navigate = useNavigate();
  const onClickDelete = () => {
    alert("게시물을 삭제합니다.");
    navigate("/");
    // add api call for deleting post
  };

  return (
    post && (
      <div className="flex flex-col items-center w-[60%] p-8">
        <BigPost post={post} />

        <Comment postId={postId} />
        <div className="flex flex-row gap-3">
          <Link to={`/${post.id}/edit`}>
            <button className="button mt-10 py-2 px-10">수정</button>
          </Link>
          <button className="button mt-10 py-2 px-10" onClick={onClickDelete}>
            삭제
          </button>
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
