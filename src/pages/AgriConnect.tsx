import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import useFetchPosts from "../hooks/useFetchPosts";
import PostComponent from "../assets/components/PostComponent";
import InfiniteScroll from "react-infinite-scroll-component";

const AgriConnect: React.FC = () => {
  const { posts, loading, error, fetchMoreData, hasMore } = useFetchPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
      <div className="mainContainer w-full">
        <div className="flex flex-row justify-between px-[5%] py-12 bg-[#fafafa]">
          <div className="main-container flex w-2/3">
            <div className="flex flex-col w-full mx-3.5">
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
                    <PostComponent key={post.id} post={post} />
                ))}
              </InfiniteScroll>
            </div>
          </div>

          <div className="side-container flex flex-col w-1/3 mx-6 mt-1.5 gap-8">
            <a
                href="#"
                className="rounded-md items-center py-2 px-2 w-[125px] text-center text-white bg-blue-700"
            >
              Ask Question
            </a>

            <div className="all-tags-container flex flex-col">
              <h2 className="mb-4">Trending Tags</h2>
              <div className="flex flex-col justify-center gap-1">
                <div className="tag-container flex flex-row gap-2">
                  <a
                      href="https://example.com"
                      className="px-[0.5rem] bg-gray-200 text-black text-sm lowercase text-center rounded hover:bg-gray-300"
                  >
                    crops
                  </a>
                  <span className="item-multiplier">
                  <span className="item-multiplier-x mr-2 text-sm items-center text-center">
                    x
                  </span>
                  <span className="item-multiplier-count text-sm items-center text-center">
                    123456
                  </span>
                </span>
                </div>
              </div>
              <a className="text-blue-700 hover:text-blue-900 text-sm mt-2" href="#">
                more trending tags
              </a>
            </div>

            <div className="qa-container flex flex-col">
              <div className="mb-4">
                <h4>
                  <a href="#">Network Questions </a>
                </h4>
              </div>
              <div className="network-qa-container flex flex-col">
                <ul>
                  <li className="flex flex-row gap-1">
                    <div>
                      <FontAwesomeIcon
                          icon={faHashtag}
                          style={{ color: "blue-900" }}
                          size="xs"
                      />
                    </div>
                    <a
                        className="text-blue-500 hover:text-blue-900 text-sm mt-0.5"
                        href="#"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AgriConnect;
