import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostEditPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  // 기존 게시물 불러오기
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    const originalPost = { ...post, tags: post.tags.map((tag) => tag.content) };
    setPost(originalPost);
  }, [postId]);

  const onSubmit = (e) => {
    alert("게시물을 수정합니다.");
    // TODO : api connect(edit post)
  };

  return (
    <div className="flex flex-col items-center w-3/5">
      <h3 className="font-bold text-4xl">게시글 수정</h3>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          id="title"
          defaultValue={post.title}
          className="input"
          required
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <textarea
          placeholder="내용을 입력하세요"
          id="content"
          defaultValue={post.content}
          cols="30"
          rows="10"
          className="input"
          required
        ></textarea>
        <label htmlFor="tags" className="label">
          태그
        </label>
        <div className="flex w-full flex-col">
          <div className="flex  w-full gap-x-5">
            <input
              type="text"
              placeholder="태그를 추가하세요"
              id="tags"
              className="input grow"
            />
            <button className="small-button w-16">add</button>
          </div>
        </div>
        {post.tags && (
          <div className="flex w-full mt-3 gap-x-1 flew-nowrap">
            {post.tags.map((tag) => (
              <div key={tag} className="flex">
                <span className="tag active m-1 flex flex-row items-center gap-x-2">
                  <p>#{tag}</p>
                </span>
                <button className="after:content-['\00d7'] text-xl" />
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="button mt-7">
          완료
        </button>
      </form>
    </div>
  );
};

export default PostEditPage;
