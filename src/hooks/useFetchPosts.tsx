import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/posts');
      let posts = response.data.map(async (post: any) => {
        try {
          const user = await axios.get(`http://localhost:8080/api/users/${post.userId}`);
          post.user = user.data;
          return post;
        } catch (_) {
          return null;
        }
      });
      posts = (await Promise.all(posts)).filter((post) => post !== null);
      
      setPosts((prevPosts) => [...prevPosts, ...posts]);
      setHasMore(posts.length > 0);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch posts');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return { posts, loading, error, fetchMoreData, hasMore };
};

export default useFetchPosts;
