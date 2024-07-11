import React from 'react';
import ForumCard from '../assets/components/ForumCard';
import AdArea from '../assets/components/AdArea';
import { useForumData } from '../hooks/useForumData';

const HarvestOverCrop: React.FC = () => {
  const { data, loading, error, hasMore, fetchMore } = useForumData();

  return (
      <div className="main-container w-full">
        <div className="flex flex-row justify-between px-[5%] py-16 bg-[#fafafa]">
          <div className="scroll-container flex flex-col w-2/3 mx-3.5 py-4">
            <ForumCard
                data={data || []}
                hasMore={hasMore}
                fetchMoreData={fetchMore}
                loading={loading}
                error={error}
            />
          </div>

          <div className="flex flex-col w-1/3 mx-6 mt-4 p-6 justify-start gap-8">
            <div className="flex flex-col gap-4 h-[450px] border rounded shadow-md p-4">
              <h1 className="text-lg text-[#737373] font-bold">Recommended Contacts</h1>
              <div className="flex flex-row gap-2">
                <p>Icon</p>
                <p>Username</p>
              </div>
            </div>
            <div className="advertisementArea">
              <AdArea />
            </div>
          </div>
        </div>
      </div>
  );
}

export default HarvestOverCrop;
