import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setImage, setDescription } from '../redux/postSlice';
import { useNavigate } from 'react-router-dom';

const CreatePostPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { image, description } = useSelector((state: RootState) => state.post);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                dispatch(setImage(reader.result as string));
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleRemoveImage = () => {
        dispatch(setImage(null));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Post submission logic here
        console.log({ image, description });
        // Reset the form
        dispatch(setImage(null));
        dispatch(setDescription(''));
        navigate('/');
    };

    return (
        <div className="max-w-4xl mx-auto p-4 border border-gray-400 rounded">
            <button
                className="mb-4 px-4 py-2 bg-gray-200 rounded"
                onClick={() => navigate(-1)}
            >
                &larr; Geri Dön
            </button>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div className="w-1/2 relative">
                        {image ? (
                            <div className="relative">
                                <img src={image} alt="Selected" className="w-full h-full object-cover rounded" />
                                <button
                                    type="button"
                                    className="absolute top-2 right-2 bg-white text-red-500 rounded-full p-1"
                                    onClick={handleRemoveImage}
                                >
                                    &times;
                                </button>
                            </div>
                        ) : (
                            <label className="w-full h-80 flex items-center justify-center border-2 border-dashed border-gray-300 rounded cursor-pointer">
                                Fotoğraf Yükle
                                <input type="file" onChange={handleImageChange} className="hidden" />
                            </label>
                        )}
                    </div>
                    <div className="w-1/2">
                        <div className="flex items-center mb-4">
                            <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                            <span className="text-lg font-bold">John Doe</span>
                        </div>
                        <textarea
                            className="w-full h-48 p-2 border border-gray-300 rounded"
                            placeholder="Açıklama ekle..."
                            value={description}
                            onChange={(e) => dispatch(setDescription(e.target.value))}
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Postu Yolla
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreatePostPage;
