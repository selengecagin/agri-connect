import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setTitle, setBody, setTags, setFile, askQuestionStart, askQuestionSuccess, askQuestionFailure } from '../redux/askQuestionSlice';
import { axiosInstance } from '../api/axiosInstance';
import '../stylesheets/AskQuestionPage.css';

export default function AskQuestionPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const { title, body, tags, file, status, error } = useSelector((state: RootState) => state.askQuestion);
    const [tagInput, setTagInput] = useState('');

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        dispatch(askQuestionStart());

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('body', data.body);
        formData.append('tags', JSON.stringify(tags));
        if (file) {
            formData.append('file', file);
        }

        try {
            await axiosInstance.post('/api/questions', formData);
            dispatch(askQuestionSuccess());
            alert('Question posted successfully');
        } catch (error: any) {
            dispatch(askQuestionFailure(error.message));
            alert('Failed to post question');
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            dispatch(setFile(event.target.files[0]));
        }
    };

    const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTagInput(event.target.value);
    };

    const handleTagInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ' ') {
            event.preventDefault();
            if (tagInput.trim() && !tags.includes(tagInput.trim())) {
                dispatch(setTags([...tags, tagInput.trim()]));
                setTagInput('');
            }
        }
    };

    const removeTag = (tag: string) => {
        dispatch(setTags(tags.filter(t => t !== tag)));
    };

    return (
        <div className="ask-question-page-container">
            <div className="ask-question-page bg-[#fafafa] p-8">
                <h1 className="text-2xl font-bold mb-4">Ask your question</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                            Select Your Title
                        </label>
                        <p className="text-sm text-gray-500">
                            Be specific and imagine you're asking a question to another person.
                        </p>
                        <input
                            type="text"
                            id="title"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('title', { required: 'Please enter a title.' })}
                            value={title}
                            onChange={(e) => dispatch(setTitle(e.target.value))}
                        />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="body" className="block text-lg font-medium text-gray-700">
                            Body
                        </label>
                        <p className="text-sm text-gray-500">
                            The body of your question contains your problem details and results. Minimum 220 characters.
                        </p>
                        <textarea
                            id="body"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 h-48"
                            {...register('body', { required: 'Please enter the body of your question.' })}
                            value={body}
                            onChange={(e) => dispatch(setBody(e.target.value))}
                        ></textarea>
                        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="tags" className="block text-lg font-medium text-gray-700">
                            Tags
                        </label>
                        <p className="text-sm text-gray-500">
                            Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
                        </p>
                        <div className="flex flex-wrap items-center border border-gray-300 rounded-md shadow-sm p-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag bg-blue-200 text-blue-700 px-2 py-1 rounded-full mr-2 mb-2 flex items-center">
                  {tag}
                                    <button type="button" className="ml-1 text-red-500" onClick={() => removeTag(tag)}>x</button>
                </span>
                            ))}
                            <input
                                type="text"
                                id="tags"
                                value={tagInput}
                                onChange={handleTagInputChange}
                                onKeyDown={handleTagInputKeyDown}
                                className="flex-grow mt-1 block border-none p-1 outline-none"
                                placeholder="Add a tag and press space"
                            />
                        </div>
                        {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-700">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="file"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            disabled={status === 'loading'}
                        >
                            Post your question
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                            Discard question
                        </button>
                    </div>
                </form>
                {status === 'failed' && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
}
