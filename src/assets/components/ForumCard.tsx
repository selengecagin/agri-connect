import React, { useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PostComponent: React.FC = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = useCallback(() => {
    if (items.length >= 500) {
      setHasMore(false);
      return;
    }
    // A fake async API call which sends 20 more records in 0.5 secs
    setTimeout(() => {
      setItems((prevItems) => prevItems.concat(Array.from({ length: 20 })));
    }, 500);
  }, [items]);

  return (
    <div>
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
        {items.map((_, index) => (
          <div
            className="flex flex-row border border-solid border-gray-200 py-4 m-4 p-2 rounded-lg shadow-lg"
            key={index}
          >
            <div className="flex flex-col justify-start px-4 py-3 gap-1 w-[150px] items-end text-sm">
              <p>2 votes</p>
              <p>1 answers</p>
              <p>7 views</p>
            </div>
            <div className="flex flex-col w-full px-4 py-2 justify-center gap-3">
              <div className="flex- flex-col">
                <a
                  className="text-lg text-blue-700 hover:text-blue-900"
                  href="#"
                >
                  Question Title
                </a>
                <p className="line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris.
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center gap-1">
                  <div className="tag-container flex flex-row gap-2">
                    <a
                      href="https://example.com"
                      className="px-[0.5rem] bg-gray-200 text-black text-sm lowercase text-center rounded hover:bg-gray-300"
                    >
                      crops
                    </a>
                  </div>
                </div>

                <div className="flex flex-row justify-between gap-2 text-sm">
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    @username
                  </a>
                  <p>less than 1 minute ago</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default PostComponent;
