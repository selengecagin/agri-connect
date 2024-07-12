import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import useFetchPosts from "../hooks/useFetchPosts";
import PostComponent from "../assets/components/PostComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import AdArea from "../assets/components/AdArea";
import UserAvatar from "../assets/components/UserAvatar";
import { Link } from "react-router-dom";

const AgriConnect: React.FC = () => {
  const { posts, loading, error, fetchMoreData, hasMore } = useFetchPosts();
  const sessionId = localStorage.getItem("userid");
  console.log(sessionId);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  console.log(posts);
  
  return (
    <div className="main-container w-full">
      <div className="flex flex-row justify-between px-[5%] py-16 bg-[#fafafa]">
        <div className="scroll-container flex flex-col w-2/3 mx-3.5 py-4">
          <div className="flex flex-row justify-between items-center h-[50px] mb-4">
            <p>{posts.length} questions</p>
            <div>
              <div className="flex row rounded-lg border border-gray-300">
                <a
                  className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg text-xs py-3 px-3 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-r-none border-r-0"
                  href="#"
                >
                  Newest
                </a>
                <a
                  className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-3 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-r-none border-r-0 rounded-l-none"
                  href="#"
                >
                  Oldest
                </a>
                <a
                  className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg text-xs py-3 px-3 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-l-none"
                  href=""
                >
                  Unanswered
                </a>
              </div>
            </div>
          </div>

          <InfiniteScroll
            dataLength={posts.length}
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
            {posts.map((post) => (
              <PostComponent key={post.postId} post={post} />
            ))}
          </InfiniteScroll>
        </div>

        <div className="flex flex-col w-1/3 mx-6 mt-4 p-6 justify-start gap-8">
          <Link
            to="/create-post"
            className={`rounded-md items-center py-2 px-2 w-[125px] text-center text-white bg-green-600 hover:bg-green-700 }`}
          >
            Create Post
          </Link>
          <div className="flex flex-col gap-2 h-[450px] border rounded shadow-md p-4">
            <h1 className="text-lg text-[#737373] font-bold">Recommended Contacts</h1>

            {/* Recommended Contacts map */}
            <UserAvatar
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              username="John Doe"
            />
          </div>

          <div className="advertisementArea">
             <AdArea userId={sessionId}></AdArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriConnect;
