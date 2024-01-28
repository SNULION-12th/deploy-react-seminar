export const BigPost = ({ post }) => {
    const onClickLike = () => {
        alert("좋아요"); // add api call for liking post
    };

    return (
        <div className="flex flex-col px-8 py-5 w-full bg-orange-400 ring-8 ring-orange-200 rounded-xl gap-5">
            <div className="flex flex-row items-center justify-between gap-3">
                <span className="text-black font-bold text-2xl">{post.author.username}의 {post.title}</span>
                <span className="text-black font-medium text-base">{post.created_at.slice(0, 10)}</span>
            </div>

            <div className="border-[2px] border-black rounded-xl p-2 text-black font-medium text-lg">{post.content}</div>

            <div className="flex flex-row gap-2">
                {post.tags &&
                    post.tags.map((tag) => (
                        <span key={tag.id} className="tag">
                            #{tag.content}
                        </span>
                    ))
                }
            </div>
            
            <div className="flex flex-row text-black" onClick={onClickLike}>
                ❤️ {post.like_users.length > 0 ? post.like_users.length : "0"}
            </div>
        </div>
    );
};
