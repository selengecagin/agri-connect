import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ForumCard as ForumCardType } from '../../redux/forumCardSlice';

interface ForumCardProps {
    data: ForumCardType[];
    hasMore: boolean;
    fetchMoreData: () => void;
    loading: boolean;
    error: string | null;
}

const ForumCard: React.FC<ForumCardProps> = ({ data, hasMore, fetchMoreData, loading, error }) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Couldn't fetch data: {error}</p>;
    }

    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height={1000}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            {data.map((item) => (
                <div
                    className="flex flex-row border border-solid border-gray-200 py-4 m-4 p-2 rounded-lg shadow-lg"
                    key={item.id}
                >
                    <div className="flex flex-col justify-start px-4 py-3 gap-1 w-[150px] items-end text-sm">
                        <p>{item.votes} votes</p>
                        <p>{item.answers} answers</p>
                        <p>{item.views} views</p>
                    </div>
                    <div className="flex flex-col w-full px-4 py-2 justify-center gap-3">
                        <div className="flex flex-col">
                            <a
                                className="text-lg text-blue-700 hover:text-blue-900"
                                href="#"
                            >
                                {item.title}
                            </a>
                            <p className="line-clamp-2">
                                {item.content}
                            </p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col justify-center gap-1">
                                <div className="tag-container flex flex-row gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <a
                                            key={idx}
                                            href={`https://example.com/tag/${tag}`}
                                            className="px-[0.5rem] bg-gray-200 text-black text-sm lowercase text-center rounded hover:bg-gray-300"
                                        >
                                            {tag}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-row justify-between gap-2 text-sm">
                                <a href="#" className="text-blue-700 hover:text-blue-900">
                                    @{item.username}
                                </a>
                                <p>{item.timestamp}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </InfiniteScroll>
    );
};

export default ForumCard;
