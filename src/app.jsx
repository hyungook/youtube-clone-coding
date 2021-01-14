import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App() {
  // 데이터를 받아올 state 설정
  const [videos, setVideos] = useState([]);

  // 데이터를 마운트 되었거나, 업데이트가 될 때 사용할 수 있는 콜백을 등록 가능  // useEffect()
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyDNG_hfL-YnQr3sh-KrE0yRiVEdJzIgMP4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);


  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />;
    </div>
  )
}

export default App;
