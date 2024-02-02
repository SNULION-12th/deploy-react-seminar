import { useState } from "react";
import posts from "../data/posts";

const PostCreatePage = () => {
  const [post, setPost] = useState({
    id: posts.length,
    title: "",
    content: "",
    author: { id: posts.length, username: "아기사자" },
    tags: [],
    like_users: [],
    created_at: "2024-02-04T07:42:50.658501Z",
  });

  const onSubmit = (e) => {
    alert("게시글을 등록합니다.");
    //TODO : api connect(post post)
  };

  return (
    <div className="flex flex-col items-center w-3/5">
      <h3 className="font-bold text-4xl">게시글 작성</h3>
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
            <button className="small-button w-16">추가</button>
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

export default PostCreatePage;
