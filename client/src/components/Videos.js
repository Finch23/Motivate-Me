import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import '../pages/Profile/Profile.css';
import youtube from "./youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [apiKey, setApiKey] = useState('');

  // Making a call to the API for Heroku
  useEffect(() => {
    fetch('/api/videosapi/config')
      .then(response => response.json())
      .then(json => setApiKey(json.config.key));
  }, []);
  // When a call is made, this set the parameters and the number of videos returning
  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: process.env.REACT_APP_API_KEY || apiKey,
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
