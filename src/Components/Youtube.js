import React from "react";
import styled from "styled-components";

const Item = styled.div`
  margin-top: 10px;
  width: 100%;
  height: auto;
`;

const NoVideo = styled.div`
  width: 600px;
  height: 400px;
  background-image: url(${require("../assets/NoVideo.jpg")});
  background-size: cover;
  background-position: center center;
  padding: 10px;
`;

const VideoContainer = styled.div`
  width: 600px;
  height: 400px;
  overflow-x: hidden;
  background-image: url(${require("../assets/Loading.gif")});
  background-size: cover;
  background-position: center center;
`;

const Video = styled.iframe`
  position: absolute;
  width: 600px;
  height: 400px;
`;

const Youtube = ({
  result: {
    videos: { results: videos },
  },
}) => (
  <Item>
    {videos.length === 0 ? (
      <NoVideo>No videos find</NoVideo>
    ) : (
      <>
        <VideoContainer>
          {videos.map((video) => (
            <Video key={video.key} src={`https://www.youtube.com/embed/${video.key}`} />
            
            
          ))}
        </VideoContainer>
      </>
    )}
  </Item>
);
export default Youtube;
