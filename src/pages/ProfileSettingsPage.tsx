import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateProfile, updateProfileSuccess, updateProfileFailure } from '../redux/profileSlice';
import '../stylesheets/ProfileSettingsPage.css';
import { axiosInstance } from '../api/axiosInstance';

const ProfileSettingsPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const profileStatus = useSelector((state: RootState) => state.profile.status);
    const profileError = useSelector((state: RootState) => state.profile.error);
    const [file, setFile] = useState<File | null>(null);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const formData = new FormData();
        formData.append('firstName', data.firstName);
        formData.append('lastName', data.lastName);
        formData.append('birthDate', data.birthDate);
        formData.append('occupation', data.occupation);
        formData.append('location', data.location);
        formData.append('email', data.email);
        formData.append('currentPassword', data.currentPassword);
        formData.append('newPassword', data.newPassword);
        formData.append('confirmNewPassword', data.confirmNewPassword);
        if (file) {
            formData.append('file', file);
        }

        dispatch(updateProfile(formData));
        try {
            await axiosInstance.post('/api/profile', formData);
            dispatch(updateProfileSuccess());
            alert('Profile saved successfully');
        } catch (error) {
            dispatch(updateProfileFailure(error.message));
            alert('Failed to save profile');
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    return (
        <div className="profile-settings-page-container">
            <div className="profile-settings-page bg-[#fafafa] p-8">
                <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-700">
                            Upload Your Profile Picture
                        </label>
                        <input
                            type="file"
                            id="file"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('firstName', { required: 'Please enter your first name.' })}
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('lastName', { required: 'Please enter your last name.' })}
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="birthDate" className="block text-lg font-medium text-gray-700">
                            Birth Date
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('birthDate', { required: 'Please enter your birth date.' })}
                        />
                        {errors.birthDate && <p className="text-red-500">{errors.birthDate.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="occupation" className="block text-lg font-medium text-gray-700">
                            Occupation
                        </label>
                        <input
                            type="text"
                            id="occupation"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('occupation', { required: 'Please enter your occupation.' })}
                        />
                        {errors.occupation && <p className="text-red-500">{errors.occupation.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="location" className="block text-lg font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('location', { required: 'Please enter your location.' })}
                        />
                        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('email', { required: 'Please enter your email.' })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="currentPassword" className="block text-lg font-medium text-gray-700">
                            Current Password
                        </label>
                        <input
                            type="password"
                            id="currentPassword"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('currentPassword', { required: 'Please enter your current password.' })}
                        />
                        {errors.currentPassword && <p className="text-red-500">{errors.currentPassword.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="newPassword" className="block text-lg font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('newPassword', { required: 'Please enter your new password.' })}
                        />
                        {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmNewPassword" className="block text-lg font-medium text-gray-700">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            id="confirmNewPassword"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            {...register('confirmNewPassword', {
                                required: 'Please confirm your new password.',
                                validate: (value) => value === watch('newPassword') || 'Passwords do not match.',
                            })}
                        />
                        {errors.confirmNewPassword && <p className="text-red-500">{errors.confirmNewPassword.message}</p>}
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
                {profileStatus === 'loading' && <p>Loading...</p>}
                {profileStatus === 'failed' && <p className="text-red-500">{profileError}</p>}
                {profileStatus === 'succeeded' && <p className="text-green-500">Profile updated successfully!</p>}
            </div>
        </div>
    );
};

export default ProfileSettingsPage;
