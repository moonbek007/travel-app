import React from "react";
import s from "./photo-video.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "video-react/dist/video-react.css";
import ImageGallery from "react-image-gallery";
import { Player } from "video-react";

const PhotoVideo = ({ pictures, video }) => {
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
          poster={pictures[5].original}
          sizes={"500px"}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  );
};

export default PhotoVideo;
