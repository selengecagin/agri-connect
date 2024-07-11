import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchQuestions } from '../redux/forumCardSlice';
import ForumCard from '../assets/components/ForumCard';

const HarvestOverCrop: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { questions, loading, error } = useSelector((state: RootState) => state.forumCard);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Forum Questions</h1>
        {questions.map((question) => (
            <ForumCard
                key={question.questionId}
                questionId={question.questionId}
                title={question.title}
                body={question.body}
                userId={question.userId}
                favoriteCount={question.favoriteCount}
                likeCount={question.likeCount}
                commentCount={question.commentCount}
                categoryTags={question.categoryTags}
                imageIds={question.imageIds}
            />
        ))}
      </div>
  );
};

export default HarvestOverCrop;
