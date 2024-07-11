import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchForumData, incrementPage, ForumCard } from '../redux/forumCardSlice';

export const useForumData = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, page, loading, hasMore, error } = useSelector((state: RootState) => state.forumCard);

    useEffect(() => {
        dispatch(fetchForumData(page));
    }, [dispatch, page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 100 || loading) return;
            if (hasMore) {
                dispatch(incrementPage());
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore, dispatch]);

    return { data, loading, error, hasMore, fetchMore: () => dispatch(incrementPage()) };
};
