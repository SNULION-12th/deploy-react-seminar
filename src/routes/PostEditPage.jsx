import { useEffect, useState } from "react";
import { BigPost } from "../components/Posts";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostEditPage = () => {
  const { postId } = useParams();
  const [formData, setFormData] = useState({});

  // 기존 post 불러오기
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    const postFormData = { ...post, tags: post.tags.map((tag) => tag.content) };
    setFormData(postFormData);
  }, [postId]);

  const onSubmit = (e) => {
    alert("게시글을 수정합니다.");
    //TODO : api connect(edit post)
  };

  return (
    <div className="flex flex-col items-center w-3/5">
      <h3 className="font-bold text-4xl">게시글 수정</h3>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          id="title"
          defaultValue={formData.title}
          className="input"
          required
        />
        <label htmlFor="content" className="label">
          Content
        </label>
        <textarea
          placeholder="내용을 입력하세요"
          id="content"
          defaultValue={formData.content}
          cols="30"
          rows="10"
          className="input"
          required
        ></textarea>
        <label htmlFor="tags" className="label">
          Tags
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
        {formData.tags && (
          <div className="flex w-full mt-3 gap-x-1 flew-nowrap">
            {formData.tags.map((tag) => (
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostEditPage;
