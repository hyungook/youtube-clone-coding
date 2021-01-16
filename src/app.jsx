import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App({youtube}) {
  // 데이터를 받아올 state 설정
  const [videos, setVideos] = useState([]);

  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };

  // 데이터를 마운트 되었거나, 업데이트가 될 때 사용할 수 있는 콜백을 등록 가능  // useEffect()
  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []);


  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  )
}

export default App;
