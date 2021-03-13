import React from "react";
import s from "./photo-video.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "video-react/dist/video-react.css";
import ImageGallery from "react-image-gallery";
import { Player } from "video-react";

const PhotoVideo = ({ pictures }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.gallery}>
        <ImageGallery
          items={pictures}
          showBullets={true}
          showIndex={true}
          thumbnailPosition={"bottom"}
        />
      </div>
      <div className={s.video_player}>
        <Player
          playsInline
          poster={'https://images.unsplash.com/photo-1529414988992-52e2db9372b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80'}
          sizes={'500px'}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  );
}

export default PhotoVideo;
