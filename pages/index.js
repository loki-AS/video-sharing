import React from 'react';
import axios from 'axios';

import VideoCard from '../components/VideoCard';
import { BASE_URL } from '../utils';
import NoResults from '../components/NoResults';

const Home = ({ videos }) => {

  return (
    <>
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length > 0 ? videos?.map((video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async ({
  query: { topic }
}) => {
  let response

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`https://videoshare-two.vercel.app/api/post`);
  }
  
  return {
    props: { videos: response.data },
  };
};
