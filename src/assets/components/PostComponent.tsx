import React, { useState, useCallback, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

interface Post {
  id: number;
  comments: string[];
}

interface CommentFormInputs {
  comment: string;
}

const PostComponent: React.FC = () => {
  const [items, setItems] = useState<Post[]>(
    
    Array.from({ length: 20 }, (_, index) => ({
      id: index,
      comments: Array.from(
        { length: Math.floor(Math.random() * 5) + 1 },
        (_, cIndex) => `Comment ${cIndex + 1} for post ${index}`
      ),
    }))
  );
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = useCallback(() => {
    if (items.length >= 500) {
      setHasMore(false);
      return;
    }
    // A fake async API call which sends 20 more records in 0.5 secs
    setTimeout(() => {
      setItems((prevItems) =>
        prevItems.concat(
          Array.from({ length: 20 }, (_, index) => ({
            id: prevItems.length + index,
            comments: Array.from(
              { length: Math.floor(Math.random() * 5) + 1 },
              (_, cIndex) =>
                `Comment ${cIndex + 1} for post ${prevItems.length + index}`
            ),
          }))
        )
      );
    }, 500);
  }, [items]);

  const [visibleComments, setVisibleComments] = useState<{
    [key: number]: boolean;
  }>({});
  const [commentErrors, setCommentErrors] = useState<{
    [key: number]: string;
  }>({});

  const { register, handleSubmit, reset } = useForm<CommentFormInputs>();

  const addComment = (data: CommentFormInputs, postId: number) => {
    if (data.comment.trim().length === 0) {
      setCommentErrors((prev) => ({
        ...prev,
        [postId]: "Comment cannot be empty",
      }));
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === postId
          ? { ...item, comments: [...item.comments, data.comment] }
          : item
      )
    );
    reset();
    setCommentErrors((prev) => ({
      ...prev,
      [postId]: "",
    }));
  };

  return (
    <div className="container mx-auto">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={1000}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map((item) => (
          <div
            className="bg-white border border-gray-300 rounded-lg shadow-md mb-6 max-w-md mx-auto"
            key={item.id}
          >
            <div className="flex items-center p-4">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <span className="font-semibold">User {item.id}</span>
            </div>
            <img
              src={`https://via.placeholder.com/600x400?text=Post+${item.id}`}
              alt={`Post ${item.id}`}
              className="w-full"
            />
            <div className="p-4">
              <p className="text-gray-800">
                This is a caption for post #{item.id}
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-gray-600 cursor-pointer hover:text-red-600"
                />
                <FontAwesomeIcon
                  icon={faComment}
                  className="text-gray-600 cursor-pointer hover:text-blue-600"
                />
              </div>
              <button
                onClick={() =>
                  setVisibleComments((prev) => ({
                    ...prev,
                    [item.id]: !prev[item.id],
                  }))
                }
                className="text-[#4a4a4a] text-sm mt-2"
              >
                View all {item.comments.length} comments
              </button>
              {visibleComments[item.id] && (
                <div className="mt-2">
                  {item.comments.map((comment, index) => (
                    <p key={index} className="text-sm text-gray-700">
                      {comment}
                    </p>
                  ))}
                </div>
              )}
              <form
                className="mt-2 flex"
                onSubmit={handleSubmit((data) => addComment(data, item.id))}
              >
                <input
                  type="text"
                  className="flex-grow border border-gray-300 rounded-l p-2"
                  placeholder="Add a comment..."
                  {...register("comment")}
                />
                <button
                  type="submit"
                  className="bg-green-800 text-white p-2 rounded-r"
                >
                  Post
                </button>
              </form>
              {commentErrors[item.id] && (
                <p className="text-red-500 text-sm mt-1">
                  {commentErrors[item.id]}
                </p>
              )}
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default PostComponent;
