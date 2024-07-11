import { useState, useEffect, useCallback } from 'react';
import { axiosInstance } from '../api/axiosInstance';

interface Question {
    questionId: string;
    title: string;
    body: string;
    userId: string;
    favoriteCount: number;
    likeCount: number;
    commentCount: number;
    categoryTags: string[];
    imageIds: string[];
}

const useFetchForumData = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchQuestions = useCallback(async () => {
        try {
            const response = await axiosInstance.get('/api/questions');
            setQuestions(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch questions');
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchQuestions();
    }, [fetchQuestions]);

    return { questions, loading, error };
};

export default useFetchForumData;
