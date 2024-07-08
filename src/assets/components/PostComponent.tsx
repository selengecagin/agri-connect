import React, { useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style: React.CSSProperties = {
  height: 500,
  border: "1px solid lightGray",
  margin: 18,
  padding: 8,
  borderRadius: 8,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

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
        height={600}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map((_, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default PostComponent;
